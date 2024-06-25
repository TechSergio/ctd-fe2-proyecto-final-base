// test-utils.tsx
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import quoteReducer from "./features/quote/citaSlice";
import { RootState } from "./app/store"; 


// Configuración personalizada para renderizar componentes con Redux
// Creamos el custom render
const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        cita: quoteReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: RootState;
    store?: ReturnType<typeof configureStore>;
  } = {}
) => {
  const Wrapper: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => <Provider store={store}>{children}</Provider>;

  render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

  // Re-exporta todo de testing-library/react
  export * from "@testing-library/react";
  
  // Exporta tu customRender en lugar del render por defecto
  export { customRender as render };
