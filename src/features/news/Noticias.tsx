import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import Noticia from "./Noticia";
import ModalPremium from "./ModalPremium";
import ModalRegular from "./ModalRegular";
import { INoticiasNormalizadas } from "./types";

/* ----------------------------------- * ----------------------------------- */
// Modifique el componente Noticias a fin de manejar las responsabilidades en Componentes mas pequenios, ya que manejaba varias responsabilidades como gestionar los modales y renderizar la interfaz, utilice el principio de abierto y cerrado, haciendo que Noticias este abierto a la extension pero cerrado para modificaciones, pudiendose crear en un futuro otros modales sin necesidad de modificar el componente Noticias.
/* ----------------------------------- ** ----------------------------------- */

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => {
        const titulo = n.titulo
          .split(" ")
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const ahora = new Date();
        const minutosTranscurridos = Math.floor(
          (ahora.getTime() - n.fecha.getTime()) / 60000
        );

        return {
          id: n.id,
          titulo,
          descripcion: n.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  const closeModal = () => setModal(null);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <Noticia key={n.id} noticia={n} setModal={setModal} />
        ))}
        {modal ? (
          modal.esPremium ? (
            <ModalPremium closeModal={closeModal} />
          ) : (
            <ModalRegular modal={modal} closeModal={closeModal} />
          )
        ) : null}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
