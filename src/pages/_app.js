import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ButtonAppBar from "../components/ButtonAppBar";

import { store, persistor } from "../redux/store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>Desafió React</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ButtonAppBar />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;
