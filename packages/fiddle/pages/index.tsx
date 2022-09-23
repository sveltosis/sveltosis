import { configure } from "mobx";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import { theme } from "../src/constants/theme";

const App = dynamic(() => import("../src/components/App"), { ssr: false });

configure({
  enforceActions: "never",
});

export default () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href={theme.darkMode ? "/favicon-dark.ico" : "/favicon.ico"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Write Svelte components once, run everywhere. Powered by Mitosis."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sveltosis Fiddle" />
        <meta
          property="og:description"
          content="Write Svelte components once, run everywhere. Powered by Mitosis."
        />
        <meta property="og:url" content="https://fiddle.sveltosis.dev" />
        <link rel="canonical" href="https://fiddle.sveltosis.dev" />
        <title>Sveltosis Fiddle - compile to common frameworks</title>

        <Script>
          {`
          if (location.hostname === 'jsx-lite-fiddle.web.app') {
            var url = new URL(location.href);
            url.hostname = 'fiddle.sveltosis.dev';
            location.href = url.href;
          }
          `}
        </Script>
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <App />

      {/* <Script async src="https://cdn.builder.io/js/editor@1.0.42-0"></Script> */}

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LFJQTJMFD3"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'G-LFJQTJMFD3');
          `}
      </Script> */}
    </>
  );
};
