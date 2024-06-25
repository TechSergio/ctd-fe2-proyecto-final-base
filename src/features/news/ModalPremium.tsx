import { FC } from "react";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  BotonSuscribir,
  CotenedorTexto,
} from "./styled";

interface ModalPremiumProps {
  closeModal: () => void;
}

const ModalPremium: FC<ModalPremiumProps> = ({ closeModal }) => (
  <ContenedorModal>
    <TarjetaModal>
      <CloseButton onClick={closeModal}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
      <CotenedorTexto>
        <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
        <DescripcionModal>
          Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.
        </DescripcionModal>
        <BotonSuscribir
          onClick={() => {
            setTimeout(() => {
              alert("Suscripto!");
              closeModal();
            }, 1000);
          }}
        >
          Suscríbete
        </BotonSuscribir>
      </CotenedorTexto>
    </TarjetaModal>
  </ContenedorModal>
);

export default ModalPremium;
