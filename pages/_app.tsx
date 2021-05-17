import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../style/global/_global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
