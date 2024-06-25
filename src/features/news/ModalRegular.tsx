import { FC } from "react";
import { CloseButton as Close } from "../../assets";
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  CotenedorTexto,
} from "./styled";
import { INoticiasNormalizadas } from "./types";

interface ModalRegularProps {
  modal: INoticiasNormalizadas;
  closeModal: () => void;
}

const ModalRegular: FC<ModalRegularProps> = ({ modal, closeModal }) => (
  <ContenedorModal>
    <TarjetaModal>
      <CloseButton onClick={closeModal}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      <ImagenModal src={modal.imagen} alt="news-image" />
      <CotenedorTexto>
        <TituloModal>{modal.titulo}</TituloModal>
        <DescripcionModal>{modal.descripcion}</DescripcionModal>
      </CotenedorTexto>
    </TarjetaModal>
  </ContenedorModal>
);

export default ModalRegular;
