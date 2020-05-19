import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextSection from "../components/textSection"
import Dynmap from "../components/dynmap"

const CreativePage = () => {
  return (
    <Layout pageInfo={{ pageName: "creative" }}>
      <SEO
        title="Creative"
        keywords={[
          `its_meow`,
          `itsmeow`,
          `Minecraft`,
          `server`,
          `multiplayer`,
          `Minecraft server`,
          `play.itsmeow.dev`,
          `PIDMC`,
          `creative`,
        ]}
      />
      <main>
        <TextSection
          id="map"
          title="PIDMC Creative Map"
          padding="0"
          style={{ paddingTop: 0, paddingBottom: 0, textAlign: "center" }}
          noParagraph
          animateIn="animate__backInLeft"
        >
          <Dynmap
            title="PIDMC Creative Map"
            src="https://play.itsmeow.dev/creative/dynmap"
          />
        </TextSection>
        <TextSection
          id="creative"
          title="Creative"
          padding="5%"
          style={{ paddingTop: "2%" }}
          noParagraph
          animateIn="animate__fadeInLeftBig"
        >
          <hr />
          <p>
            PIDMC creative is a plots creative building server with advanced
            merge and flag features, powered by PlotSquared.
          </p>
        </TextSection>
        <TextSection
          id="Plugins"
          title="Plugins"
          noParagraph
          animateIn="animate__fadeInRightBig"
        >
          <ul>
            <li>
              ActiveRewards (Custom ranking plugin for being active - get
              perks!)
            </li>
            <li>Dynmap (View a map of the server)</li>
            <li>FastAsyncWorldEdit (Optimized, fast world editing)</li>
            <li>Building Utilities (Tons of useful tools)</li>
            <li>Armor Stand Tools (Build custom armor stands)</li>
            <li>PlotSquared v4 (Drives plot system)</li>
          </ul>
        </TextSection>
        <TextSection
          id="ranks"
          title="Ranks"
          noParagraph
          animateIn="animate__fadeInLeftBig"
        >
          <p>
            The ranking system on PIDMC is a unique one where each minute you
            play, you gain <strong>Activity Points</strong>. These points expire
            one month after the time they were earned, and being over certain
            thresholds gives you ranks.
          </p>
          <p>
            Creative Ranks give you more possible plots as you rank up, and
            access to new commands and tools.
          </p>
        </TextSection>
      </main>
    </Layout>
  )
}

export default CreativePage
