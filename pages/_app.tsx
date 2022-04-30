import "../styles/globals.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import { useUserChanged } from "../hooks/useUserChanged";
import { Provider } from "react-redux";
import { store } from "../selector/store";

function MyApp({ Component, pageProps }: AppProps) {

  const {} = useUserChanged();

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        // userがフォーカスした時にfetchするか
        // 過剰fetchになるがtrueにしても良いかも。。。？
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
