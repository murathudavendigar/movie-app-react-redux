import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./app/store";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
        {/* <Login /> */}
        {/* <Register /> */}
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
