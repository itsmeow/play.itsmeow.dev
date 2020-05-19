import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const sources = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxHeight: 466, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div class="banner-pane">
      <div class="banner-container">
        <div class="banner">
          <div class="title-front">
            <h1
              align="center"
              style={{
                padding: "0",
                color: "white",
                textShadow: "2px 2px black",
              }}
            >
              play.itsmeow.dev
            </h1>
            <h4
              align="center"
              style={{
                padding: "0",
                fontStyle: "italic",
                color: "white",
                textShadow: "2px 2px black",
              }}
            >
              A server for <strong>you</strong>!
            </h4>
          </div>
          <div className="image-wrapper">
            <Img
              fluid={sources.bannerImage.childImageSharp.fluid}
              align="center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
