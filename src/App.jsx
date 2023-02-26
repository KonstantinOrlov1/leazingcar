import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { store } from "./store";
import { Main } from "./pages/Main/Main";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Main />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
