import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import TextSection from "../components/textSection"

const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO
        title="Home"
        keywords={[
          `its_meow`,
          `itsmeow`,
          `Minecraft`,
          `server`,
          `multiplayer`,
          `Minecraft server`,
          `play.itsmeow.dev`,
          `PIDMC`,
        ]}
      />
      <main>
        <Banner />
        <TextSection>The server has been closed.</TextSection>
      </main>
    </Layout>
  )
}

export default IndexPage
