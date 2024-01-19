"use client";

import { persistor, store } from "@/redux/store";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

interface IRoot {
  children: React.ReactNode;
}
const Root: FC<IRoot> = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </Provider>
  );
};

export default Root;
