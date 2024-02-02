import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/layout/main";

export default function App({ Component, pageProps, router }) {
    return (
        <ChakraProvider>
            <Main router={router.route}>
                <Component {...pageProps} key={router.route} />
            </Main>
        </ChakraProvider>
    );
}
