import { useEffect, useRef, useState } from "react";

import styles from "./MapElement.module.css";

export default function MapElement({
  posX,
  posY,
  className,
  children,
  ImageRef,
}) {
  const point = useRef();

  function updatePos() {
    point.current.style.left =
      String(ImageRef.current.offsetWidth * (posX / 100)) + "px";
    point.current.style.top =
      String(ImageRef.current.offsetWidth * (posY / 100)) + "px";
  }
  useEffect(() => {
    window.addEventListener("resize", () =>
      window.requestAnimationFrame(updatePos)
    );
    window.requestAnimationFrame(updatePos);

    return () =>
      window.removeEventListener("resize", () =>
        window.requestAnimationFrame(updatePos)
      );
  }, []);
  return (
    <div className={[styles.point, className].join(" ")} ref={point}>
      {children ? (
        children
      ) : (
        <div className={styles.defaultPoint}>
          <p>Hello</p>
        </div>
      )}
    </div>
  );
}
