import { FC } from "react";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  BotonLectura,
} from "./styled";
import { INoticiasNormalizadas } from "./types";

interface NoticiaProps {
  noticia: INoticiasNormalizadas;
  setModal: (modal: INoticiasNormalizadas) => void;
}

const Noticia: FC<NoticiaProps> = ({ noticia, setModal }) => (
  <TarjetaNoticia>
    <ImagenTarjetaNoticia src={noticia.imagen} />
    <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
    <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
    <DescripcionTarjetaNoticia>
      {noticia.descripcionCorta}
    </DescripcionTarjetaNoticia>
    <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
  </TarjetaNoticia>
);

export default Noticia;
