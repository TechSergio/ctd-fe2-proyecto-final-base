import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import styles from "./styles.module.css";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(INFO_SIMPSONS[NombresSimpsons.BART]);

  const onClick = (nombre: NombresSimpsons) => setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre) => (
      <button
        key={nombre}
        onClick={() => onClick(nombre as NombresSimpsons)}
        className={
          bioActiva.id === nombre
            ? `${styles.botonBio} ${styles.botonBioActivo}`
            : `${styles.botonBio} ${styles.botonBioInactivo}`
        }
      >
        {nombre}
      </button>
    ));
  };

  return (
    <div className={styles.bioContainer}>
      <div className={styles.contenedorBotones}>{crearBotones()}</div>
      <div>
        <div>
          <img
            src={bioActiva.image}
            alt={bioActiva.nombre}
            className={styles.bioImagen}
          />
        </div>
        <div>
          <h3 className={styles.bioNombre}>{bioActiva.nombre}</h3>
          <p className={styles.bioDescripcion}>{bioActiva.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
