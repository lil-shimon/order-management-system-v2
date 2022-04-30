import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useUserChanged } from "../hooks/useUserChanged";
import { Provider } from "react-redux";
import { store } from "../selector/store";

function MyApp({ Component, pageProps }: AppProps) {

  const {} = useUserChanged();

  return (<Provider store={store}><Component {...pageProps} /></Provider>);
}

export default MyApp;
