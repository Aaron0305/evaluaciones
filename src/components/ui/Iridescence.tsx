"use client";

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

export interface IridescenceProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
}

export default function Iridescence({
  color = [0.05, 0.45, 0.85],
  speed = 0.6,
  amplitude = 0.1,
  mouseReact = false,
  className = "w-full h-full",
  style,
  ...rest
}: IridescenceProps) {
  const ctnDom = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const programRef = useRef<Program | null>(null);

  // Update uniforms without destroying the WebGL context
  useEffect(() => {
    if (programRef.current) {
      programRef.current.uniforms.uColor.value.set(color[0], color[1], color[2]);
      programRef.current.uniforms.uSpeed.value = speed;
      programRef.current.uniforms.uAmplitude.value = amplitude;
    }
  }, [color, speed, amplitude]);

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    let program: Program;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth || window.innerWidth;
      const height = ctn.offsetHeight || window.innerHeight;
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / (gl.canvas.height || 1)
        );
      }
    }

    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / (gl.canvas.height || 1)
          ),
        },
        uMouse: {
          value: new Float32Array([mousePos.current.x, mousePos.current.y]),
        },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });
    let animateId: number;

    function update(t: number) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e: MouseEvent) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / (rect.width || 1);
      const y = 1.0 - (e.clientY - rect.top) / (rect.height || 1);
      mousePos.current = { x, y };
      if (program?.uniforms?.uMouse?.value) {
        program.uniforms.uMouse.value[0] = x;
        program.uniforms.uMouse.value[1] = y;
      }
    }

    if (mouseReact) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (mouseReact) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (gl.canvas && ctn.contains(gl.canvas)) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      programRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseReact]);

  return <div ref={ctnDom} className={className} style={style} {...rest} />;
}
