import "../styles/theme.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"
      />
      <Script src="/js/sticky.js" id="sticky" type="text/javascript" />
      <Script src="/js/flickity.js" id="flickity" type="text/javascript" />
      <Script src="/js/lazyload.js" id="lazyload" type="text/javascript" />
      <Script
        src="/js/smoothscroll.js"
        id="smoothscroll"
        type="text/javascript"
      />
      <Script src="/js/theme.js" id="theme" type="text/javascript" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
