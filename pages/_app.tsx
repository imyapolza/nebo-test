import { AppProps } from "next/app";
import "../styles/global.css";
import { createContext, useContext } from "react";
import { DadJokeContextProvider } from "../context/state";

function App({ Component, pageProps }: AppProps) {
  return (
    <DadJokeContextProvider>
      <Component {...pageProps} />
    </DadJokeContextProvider>
  );
}

export default App;
