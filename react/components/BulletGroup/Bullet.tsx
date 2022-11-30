import React from "react"
import { useCssHandles } from "vtex.css-handles"
import { Link } from "vtex.render-runtime"
import { LinkProps } from "./BulletTypes"
import styles from "./styles.css";

/**
 * Este componente sirve para entregar un elemento, un bullet en este caso
 * @param src imagen
 * @param titleBullet imagen
 * @param link redirección
 * @returns elemento con cada una de sus propiedades
 */

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
  const CSS_HANDLES = ["bullet__item", "bullet__item--title", "bullet__item--image", "bullet__item--link"]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.bullet__item}>
      <Link to={link.url} className={`${styles["bullet__item--link"]}`}>
        <img className={`${styles["bullet__item--image"]}`} src={src} alt={titleBullet} />
        <p className={`${styles["bullet__item--title"]}`}>{titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: "Imagen de Bullet",
    type: "string",
    widget: {
      "ui:widget": "image-uploader"
    }
  }
}

export default Bullet
