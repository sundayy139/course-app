import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ProvideProps {
  children: ReactNode;
}

export function Providers({ children }: ProvideProps) {
  return <Provider store={store}>{children}</Provider>;
}
