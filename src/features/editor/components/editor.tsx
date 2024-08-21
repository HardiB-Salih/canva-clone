"use client";

import { useEditor } from "@/features/editor/hooks/useEditor";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";

interface EditorProps {
  // Define your props here
}

export default function Editor({}: EditorProps) {
  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { init } = useEditor();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initalCanvas: canvas,
      initialContainer: containerRef.current!,
    });
  }, [init]);

  return (
    <div className="flex h-full flex-col">
      <div className="h-full flex-1 bg-muted" ref={containerRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
