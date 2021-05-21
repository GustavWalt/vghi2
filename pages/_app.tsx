import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import store from "../redux/store";
import "../style/global/_global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ToastProvider placement="bottom-center">
        <Component {...pageProps} />
      </ToastProvider>
    </Provider>
  );
};

export default App;
