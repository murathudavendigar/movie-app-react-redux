import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import store from "./app/store";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
