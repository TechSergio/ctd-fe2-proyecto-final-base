export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
  }
  
  export interface IImagenTarjetaNoticia {
    src: string
  }
  
  export interface IImagenModal {
    src: string,
    alt: string
  }

  export interface ICloseButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
  }

  export interface IBotonSuscribir {
    onClick: () => void;
    children?: React.ReactNode;
  }

  
  export interface IBotonLectura {
    onClick: () => void;
    children?: React.ReactNode;
  }
  