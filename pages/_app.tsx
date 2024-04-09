import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const loadingRef = useRef<any>(null);

  useEffect(() => {
    const handleRouteChange = (url: any, { shallow }: any) => {
      //Start the progress bar because the route is changed !
      try {
        loadingRef.current.continuousStart();
      } catch (err) {}
    };

    const handleRouteComplete = (url: any, obj: any) => {
      //Make the progress bar 100% because our route load is completed !
      try {
        loadingRef.current.complete();
      } catch (err) {}
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);

      //Complete the progress if component unmounted !
      try {
        loadingRef.current.complete();
      } catch (err) {}
    };
  }, []);
  return (
    <>
      <LoadingBar color="#FDBF47" height={3} ref={loadingRef} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
