import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "./components/layout/article";
import Section from "./components/section";
import { GridItem } from "./components/grid-item";

import thumbPortfolio from "../public/images/contents/youtube-how-to-build-portfolio.jpg";
import thumbHowToUseInkdrop from "../public/images/contents/youtube-how-to-use-inkdrop.jpg";
import thumbFishWorkflow from "../public/images/contents/youtube-fish-workflow.jpg";
import thumbMyDeskSetup from "../public/images/contents/youtube-my-desk-setup.jpg";
import thumb500PaidUsers from "../public/images/contents/blog-500-paid-users.jpg";
import thumbFinancialGoal from "../public/images/contents/blog-financial-goal.png";
import thumbHowToPriceYourself from "../public/images/contents/blog-how-to-price-yourself.jpg";
import thumb50xFaster from "../public/images/contents/youtube-50x-faster.jpg";
import thumbsecurity from "../public/images/contents/blog-cloudsecurity.jpeg";
import thumbDocker from "../public/images/contents/blog-docker.jpeg";
import thumbStorage from "../public/images/contents/blog-storage.jpeg";
import thumbOpenvpn from "../public/images/contents/blog-openvpn.jpg";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Setting Up AWS VPC Endpoint Connection"
                        thumbnail={thumbPortfolio}
                        href="https://awstip.com/setting-up-aws-vpc-endpoint-connection-d4294d0c2204"
                    />
                    <GridItem
                        title="Docker Swarm for beginners"
                        thumbnail={thumbDocker}
                        href="https://medium.com/@rudra.behera50/docker-swarm-for-beginners-5f6e457fee5e"
                    />
                    <GridItem
                        title="Aws Block Storage: Types and Operations on EBS Volume"
                        thumbnail={thumbStorage}
                        href="https://dev.to/rudracs/aws-block-storage-types-and-operations-on-ebs-volume-1cne"
                    />
                    <GridItem
                        title="How to Setup an OpenVPN Access Server in Amazon VPC"
                        thumbnail={thumbOpenvpn}
                        href="https://medium.com/@rudra.behera50/how-to-setup-an-openvpn-access-server-in-amazon-vpc-f7e62d4f709f"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="How To Secure Your AWS Environment Using Amazon VPC"
                        thumbnail={thumbsecurity}
                        href="https://medium.com/@rudra.behera50/how-to-secure-your-aws-environment-using-amazon-vpc-f29143c19ad5"
                    />
                    {/* <GridItem
                        title="I stopped setting a financial goal for my SaaS"
                        thumbnail={thumbFinancialGoal}
                        href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
                    /> */}
                </SimpleGrid>
            </Section>

            {/* <Section delay={0.5}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="How to Price Yourself as a Freelance Developer"
                        thumbnail={thumbHowToPriceYourself}
                        href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
                    />
                    <GridItem
                        title="I made my React Native app 50x faster"
                        thumbnail={thumb50xFaster}
                        href="https://www.youtube.com/watch?v=vj723NlrIQc"
                    />
                </SimpleGrid>
            </Section> */}
        </Container>
    </Layout>
);

export default Posts;
export { getServerSideProps } from "./components/chakra";
