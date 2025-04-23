import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css"; // Tailwindの読み込み(先ほどの指示文があるファイル)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
