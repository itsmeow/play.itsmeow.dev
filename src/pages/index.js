import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import TextSection from "../components/textSection"
import StaffCard from "../components/staffCard"
import its_meowImage from "../data/logos/its_meow.png"
import cherryImage from "../data/logos/cherry.png"
import LinkButton from "../components/linkButton"
import PatreonButton from "../components/patreon"
import { FaDiscord } from "react-icons/fa"

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
        <TextSection
          id="about"
          title="About The Server"
          animateIn="animate__fadeInLeftBig"
          noParagraph
          titleStyle={{ float: "left" }}
        >
          <LinkButton
            link="https://discord.play.itsmeow.dev/"
            color="#7289da"
            hoverColor="#9aaae4"
            style={{ marginLeft: "10px", transform: "translateY(4px)" }}
          >
            <FaDiscord /> Discord
          </LinkButton>
          <p style={{ clear: "left" }}>
            <strong>play.itsmeow.dev or PIDMC</strong> is a 1.15.2 semi-vanilla
            survival server aimed at improvement based on the community's needs
            and feedback. We aim to make the best experience possible in order
            to keep our players having fun. its_meow, the owner, is an
            experienced developer of Minecraft mods and plugins, meaning that
            the server can be improved more directly towards a vision through
            development, no middle-man.
          </p>
        </TextSection>
        <TextSection
          id="specs"
          title="Specs"
          animateIn="animate__fadeInRightBig"
        >
          <ul>
            <li>8 core Intel Xeon processor @ 2.2 GHz (primary bottleneck)</li>
            <li>30GB RAM</li>
            <li>800GB SSD</li>
            <li>600 Mbit/s port</li>
          </ul>
          The server costs around $20/mo, and as of current lacks hardware to
          support itself fully. If you want to help fund the purchase of
          improved hardware, please donate as I have no way of funding it fully
          myself.
        </TextSection>
        <TextSection
          id="servers"
          title="Servers"
          animateIn="animate__fadeInLeftBig"
        >
          PIDMC has multiple servers within the network. As of currently, there
          is a survival, creative, and hub server. You can view the pages for
          these individually via the navbar.
        </TextSection>
        <TextSection
          id="listings"
          title="Server Listings"
          animateIn="animate__fadeInRightBig"
        >
          <ul>
            <li>
              <a href="https://www.planetminecraft.com/">Planet Minecraft</a> -{" "}
              <a href="https://www.planetminecraft.com/server/pidmc/">
                Listing
              </a>{" "}
              -{" "}
              <a href="https://www.planetminecraft.com/server/pidmc/vote">
                Vote
              </a>
            </li>
            <li>
              <a href="https://minecraft-server.net/">
                Minecraft Servers
                <img
                  src="https://minecraft-server.net/button.php?u=pidmc"
                  alt="Minecraft Servers"
                  style={{ display: "none" }}
                  width="1px"
                  height="1px"
                />
              </a>{" "}
              -{" "}
              <a href="https://minecraft-server.net/details/pidmc/">Listing</a>{" "}
              - <a href="https://minecraft-server.net/vote/pidmc/">Vote</a>
            </li>
            <li>
              <a href="https://minecraft-server-list.com/">
                Minecraft Server List
              </a>{" "}
              -{" "}
              <a href="https://minecraft-server-list.com/server/454468/">
                Listing
              </a>{" "}
              -{" "}
              <a href="https://minecraft-server-list.com/server/454468/vote/">
                Vote
              </a>
            </li>
            <li>
              <a href="https://minecraft-mp.com/">Minecraft Multiplayer</a> -{" "}
              <a href="https://minecraft-mp.com/server-s248478">Listing</a> -{" "}
              <a href="https://minecraft-mp.com/server/248478/vote/">Vote</a>
            </li>
          </ul>
        </TextSection>
        <TextSection
          id="staff"
          title="Staff"
          style={{
            textAlign: "center",
            paddingBottom: "20px",
            paddingTop: "20px",
          }}
          animateIn="animate__backInLeft"
        >
          <StaffCard
            name="its_meow"
            role="Owner"
            image={its_meowImage}
            style={{ marginBottom: "20px" }}
            links={
              <>
                <LinkButton
                  link="https://itsmeow.dev/"
                  color="rgb(25, 144, 255)"
                  hoverColor="rgb(0, 132, 255)"
                  style={{ transitionDuration: "300ms" }}
                >
                  Website
                </LinkButton>
                <PatreonButton
                  className="devlinkbutton"
                  style={{ float: "left" }}
                />
              </>
            }
          >
            Owner of the server, set up pretty much everything on the server,
            made this website, configured a lot of plugins, wrote multiple
            plugins for the server. Busy dude.
          </StaffCard>
          <StaffCard name="chcherry" role="Admin" image={cherryImage}>
            My girlfriend, she's awesome so I gave her staff. Yes, that's the
            only reason. Goodbye. She's also really good at building and
            probably built most of the builds you see on the server :)
          </StaffCard>
        </TextSection>
      </main>
    </Layout>
  )
}

export default IndexPage
