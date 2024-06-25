export interface ICita {
  personaje: string;
  cita: string;
  imagen: string;
  direccionPersonaje: string;
}

export interface IBoton {
  "aria-label": string;
  onClick: () => void;
  secondary?: boolean;
  children?: React.ReactNode;

}

export interface IInput {
  "aria-label": string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
