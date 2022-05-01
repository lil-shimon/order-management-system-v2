import "../styles/globals.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import { useUserChanged } from "../hooks/useUserChanged";
import { Provider } from "react-redux";
import { store } from "../selector/store";
import { Hydrate } from "react-query";
import { ThemeProvider } from "next-themes";

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
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <ThemeProvider attribute={"class"} defaultTheme={"dark"}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
