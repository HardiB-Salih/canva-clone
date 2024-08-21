import { fabric } from "fabric";
import { useCallback, useState } from "react";
import { useAutoResize } from "@/features/editor/hooks/use-auto-resize";

export const useEditor = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  useAutoResize({
    canvas,
    container,
  });

  const init = useCallback(
    ({
      initalCanvas,
      initialContainer,
    }: {
      initalCanvas: fabric.Canvas;
      initialContainer: HTMLDivElement;
    }) => {
      fabric.Object.prototype.set({
        cornerColor: "#FFF",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      });

      const initialWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: "clip",
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.8)",
          blur: 5,
        }),
      });

      initalCanvas.setWidth(initialContainer.offsetWidth);
      initalCanvas.setHeight(initialContainer.offsetHeight);
      initalCanvas.add(initialWorkspace);
      initalCanvas.centerObject(initialWorkspace);
      initalCanvas.clipPath = initialWorkspace;

      setCanvas(initalCanvas);
      setContainer(initialContainer);

      const test = new fabric.Rect({
        height: 100,
        width: 100,
        fill: "black",
      });

      initalCanvas.add(test);
      initalCanvas.centerObject(test);
    },
    [],
  );

  return { init };
};
