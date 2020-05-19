import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextSection from "../components/textSection"
import Dynmap from "../components/dynmap"

const SurvivalPage = () => {
  return (
    <Layout pageInfo={{ pageName: "survival" }}>
      <SEO
        title="Survival"
        keywords={[
          `its_meow`,
          `itsmeow`,
          `Minecraft`,
          `server`,
          `multiplayer`,
          `Minecraft server`,
          `play.itsmeow.dev`,
          `PIDMC`,
          `survival`,
        ]}
      />
      <main>
        <TextSection
          id="map"
          title="PIDMC Survival Map"
          padding="0"
          style={{ paddingTop: 0, paddingBottom: 0, textAlign: "center" }}
          noParagraph
          animateIn="animate__backInLeft"
        >
          <Dynmap
            title="PIDMC Survival Map"
            src="https://play.itsmeow.dev/survival/dynmap"
          />
        </TextSection>
        <TextSection
          id="survival"
          title="Survival"
          padding="5%"
          style={{ paddingTop: "2%" }}
          noParagraph
          animateIn="animate__fadeInLeftBig"
        >
          <hr />
          <p>
            PIDMC survival, the first server added to the network, is a
            semi-vanilla survival server with custom ranks, plugins, and awesome
            features.
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
            <li>Essentials (tpa, home, all that)</li>
            <li>GriefPrevention (Claim land)</li>
            <li>TreeCapitator (Trees fall instantly)</li>
            <li>Fast Leaf Decay (Get rid of them leaves!)</li>
            <li>BossShops (GUI Shops/Voting Shops)</li>
            <li>
              Donation Goal (Custom Plugin, shows donation goal on the sidebar)
            </li>
            <li>VotingPlugin (Voting Rewards)</li>
            <li>
              Better Mending (Improves how mending applies to items and armor)
            </li>
            <li>OldCombatMechanics (Makes spam-clicking more viable)</li>
            <li>
              CoreProtect (Can rollback griefs if you forget to protect land)
            </li>
            <li>Chairs (Take a seat on those stairs)</li>
            <li>WildTp (Teleport somewhere random)</li>
            <li>WorldBorder (Keep the community close)</li>
          </ul>
        </TextSection>
        <TextSection
          id="ranks"
          title="Ranks"
          animateIn="animate__fadeInLeftBig"
        >
          The ranking system on PIDMC is a unique one where each minute you
          play, you gain <strong>Activity Points</strong>. These points expire
          one month after the time they were earned, and being over certain
          thresholds gives you ranks. These ranks range in rewards from /back to
          flight!
        </TextSection>
      </main>
    </Layout>
  )
}

export default SurvivalPage
