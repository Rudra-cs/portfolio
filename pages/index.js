import React from "react";
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import Section from "./section";
import Paragraph from "./components/paragraph";
import Image from "next/image";
import NextLink from "next/link";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { BioSection, BioYear } from "./components/bio";
import { GridItem } from "./components/grid-items";
import thumbYouTube from "../public/images/links/youtube.png";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";

const Home = () => {
    return (
        <Container>
            <Box
                borderRadius={"lg"}
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={3}
                mb={6}
                align={"center"}
            >
                Hello, I&apos;m a full stack developer based in India!
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rudra Behera
                    </Heading>
                    <p>Digital Craftsman ( Engineer / Developer / Artist )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/images/rudra.jpg"
                            alt="Profile image"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Takuya is a freelance and a full-stack developer based in
                    Osaka with a passion for building digital services/stuff he
                    wants. He has a knack for all things launching products,
                    from planning and designing all the way to solving real-life
                    problems with code. When not online, he loves hanging out
                    with his camera. Currently, he is living off of his own
                    product called{" "}
                    <Link
                        as={NextLink}
                        href="/works/inkdrop"
                        passHref
                        scroll={false}
                    >
                        Inkdrop
                    </Link>
                    . He publishes content for marketing his products and his
                    YouTube channel called &quot;
                    <Link
                        as={NextLink}
                        href="https://www.youtube.com/devaslife"
                        passHref
                        target="_blank"
                    >
                        Dev as Life
                    </Link>
                    &quot; has more than 100k subscribers.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My portfolio
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1999</BioYear>
                    Born in Bhubaneswar, India.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Completed the Bachelor&apos;s Program in the field of
                    Computer Science at Silicon Institute Of Technology,
                    Bhubaneswar, Odisha.
                </BioSection>
                {/* <BioSection>
                    <BioYear>2010</BioYear>
                    Worked at Yahoo! Japan (ヤフー株式会社入社)
                </BioSection> */}
                <BioSection>
                    <BioYear>2023 - present</BioYear>
                    Working as a freelancer
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Art, Music, , Football, Chess, Coding & Travelling.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link
                            href="https://github.com/Rudra-cs"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @Rudra-cs
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://twitter.com/rudratwts"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @rudratwts
                            </Button>
                        </Link>
                    </ListItem>
                    {/* <ListItem>
                        <Link
                            href="https://twitter.com/craftzdog"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @craftzdog (日本語)
                            </Button>
                        </Link>
                    </ListItem> */}
                    <ListItem>
                        <Link
                            href="https://instagram.com/rudraooo7"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @rudraooo7
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.youtube.com/devaslife"
                        title="Dev as Life"
                        thumbnail={thumbYouTube}
                    >
                        My YouTube channel (&gt;150k subs)
                    </GridItem>
                    <GridItem
                        href="https://www.inkdrop.app/"
                        title="Inkdrop"
                        thumbnail={thumbInkdrop}
                    >
                        A Markdown note-taking app
                    </GridItem>
                </SimpleGrid>

                <Heading as="h3" variant="section-title">
                    Newsletter
                </Heading>
                <p>
                    Join me on a behind-the-scenes coding journey. Weekly
                    updates on projects, tutorials, and videos
                </p>

                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="https://www.devas.life/"
                        scroll={false}
                        leftIcon={<EmailIcon />}
                        colorScheme="teal"
                    >
                        Sign up my newsletter here
                    </Button>
                </Box>
            </Section>
        </Container>
    );
};

export default Home;
