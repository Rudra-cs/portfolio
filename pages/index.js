import React from "react";
import { Container, Box, Heading } from "@chakra-ui/react";

const Home = () => {
    return (
        <Container>
            <Box borderRadius={"lg"} bg="red" p={3} mb={6} align={"center"}>
                Hello, I&apos;m a full stack developer base in India!
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant={"page-title"}>
                        Rudra Behera
                    </Heading>
                    <p>Digital Craftsman ( Engineer / Developer / Designer )</p>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;