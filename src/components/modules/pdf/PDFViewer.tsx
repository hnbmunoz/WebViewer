import { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

const PDFViewer = ({ source }: any) => {
  const viewer = useRef<any>();

  useEffect(() => {
    WebViewer.Iframe(
      {
        path: "/webviewer",
        initialDoc: source ?? "files/PDFTRON_about.pdf",
        licenseKey:
          "demo:1727354107446:7e3b2e4603000000008f6f2696275d54acef40461f46fc5e2c002d4370", 
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core;

      documentViewer.addEventListener("documentLoaded", () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        });

        annotationManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);

  return <div className="webviewer" ref={viewer}></div>;
};
export default PDFViewer;
