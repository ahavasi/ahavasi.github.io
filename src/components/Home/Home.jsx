import { Card, Flex, Layout } from "antd";
import React from "react";
import resumeData from "../../resumeData";
import "./Home.css";

const { Header, Content } = Layout;
const { Meta } = Card;

export default function Home() {
  return (
    <Layout>
      <Header style={{ background: "white" }}>
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          <h1 style={{ height: "100%" }}>Andre Havasi</h1>
        </Flex>
      </Header>
      <Content>
        <Flex
          justify="center"
          align="center"
          style={{ border: "1px solid red" }}
        >
          <Card
            hoverable
            style={{
              width: 400,
            }}
            cover={
              <img
                alt="example"
                src="https://media.licdn.com/dms/image/C4D03AQGhPaA4fHnVFQ/profile-displayphoto-shrink_800_800/0/1592691383777?e=1714003200&v=beta&t=-NEoUnFBtn7ZOWeoyby8mJtabDOjdfA7ceNjvkj1rXY"
              />
            }
          >
            <Meta title="Profile" description={resumeData.profile} />
          </Card>
        </Flex>
      </Content>
    </Layout>
  );
}
