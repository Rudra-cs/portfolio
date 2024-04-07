import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/layout/main";
import theme from "@/lib/theme";
import Fonts from "./components/fonts";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

export default function App({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Main router={router.route}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== "undefined") {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Main>
        </ChakraProvider>
    );
}
