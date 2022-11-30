import React, { PropsWithChildren } from 'react'
import { BulletsSchema } from './BulletTypes'
import { useListContext, ListContextProvider } from "vtex.list-context";
import { useCssHandles } from "vtex.css-handles";
import { useDevice } from "vtex.device-detector";
import { getBulletsAsTSXList } from "./modules/bulletsAsList";
import styles from "./styles.css";

/**
 * Este componente sirve para un contexto de la información que me pasen, en este caso; imágenes, nombre y url
 * @param bullets array de objetos
 * @param children
 * @returns contexto de las propiedades pasadas, en mobile y desktop se muestra de forma diferente
 */

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || [];
  const bulletsGroup = getBulletsAsTSXList(bullets);
  const newListContextValue = list.concat(bulletsGroup);

  const CSS_HANDLES = ["bullet__container"];
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={`${styles.bullet__group}`}>
      <h3 className={`${styles["bullet__group--title"]}`}>Compra por categorías</h3>
      <ListContextProvider list={newListContextValue}>
        {
          isMobile ?
            <div className={handles.bullet__container}>
              {bulletsGroup}
            </div> :
            children
        }
      </ListContextProvider>
    </div>
  )
}

export default BulletGroup
