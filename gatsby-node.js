exports.onCreateNode = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/discord",
    toPath: "https://discord.play.itsmeow.dev/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/donate",
    toPath: "https://store.itsmeow.dev/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/dynmap",
    toPath: "https://play.itsmeow.dev/survival",
    isPermanent: true,
  })
}
