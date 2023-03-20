import Image from "next/image";
import { useRef } from "react";
import styles from "./ImageMap.module.css";
import React from "react";
export default function ImageMap({ img, children }) {
  const ImageRef = useRef();

  return (
    <div className={styles.main}>
      <Image src={img} ref={ImageRef} className={styles.imageStyles} />
      {
        (children = React.Children.map(children, (el) => {
          return React.cloneElement(el, { ImageRef });
        }))
      }
    </div>
  );
}
