import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import VoxelDogLoader from "../voxel-dog-loader";
import Footer from "../footer";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
    ssr: false,
    loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
    const urlPath = router;
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Rudra's homepage" />
                <meta name="author" content="Rudra Behera" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <meta name="twitter:title" content="Rudra Behera" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@rudratwts" />
                <meta name="twitter:creator" content="@rudratwts" />
                <meta
                    name="twitter:image"
                    content="https://www.craftz.dog/card.png"
                />
                <meta property="og:site_name" content="Rudra Behera" />
                <meta name="og:title" content="Rudra Behera" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://www.craftz.dog/card.png"
                />
                <title>Rudra Behera - Homepage</title>
            </Head>

            <Navbar path={urlPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
