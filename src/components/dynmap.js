import React, { useState } from "react"
import PropTypes from "prop-types"
import Radium from "radium"
import StyledButton from "../components/styledButton"
import DynmapFrame from "./dynmapFrame"
import KeyboardEventHandler from "react-keyboard-event-handler"

const Dynmap = ({
  title,
  src,
  width,
  height,
  margin,
  style,
  popupStyle,
  ...rest
}) => {
  const overlayWidth = "150px"
  const overlayHeight = "38px"
  const [open, setOpen] = useState(false)
  var styles = {
    base: {
      marginLeft: margin,
      marginRight: margin,
      style,
    },
    popup: {
      margin: 0,
      left: "1%",
      top: "50px",
      zIndex: 10,
      popupStyle,
      height: "calc(100% - 55px)",
    },
  }
  const keyDown = e => {
    if (e.key === "Escape" && open) {
      setOpen(false)
    }
  }
  const onFrameLoad = e => {
    try {
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      e.target.contentWindow.document.addEventListener("keydown", keyDown)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <KeyboardEventHandler
      handleKeys={["esc"]}
      onKeyEvent={(_, _1) => {
        setOpen(false)
      }}
      handleFocusableElements
    >
      <DynmapFrame
        title={open ? title + "-popup" : title}
        src={src}
        width={open ? "98%" : width}
        height={open ? "100%" : height}
        className={"dynmap-frame" + (open ? "-popup" : "")}
        style={styles[open ? "popup" : "base"]}
        onLoad={onFrameLoad}
        {...rest}
      />
      {open ? (
        <div
          className="map-overlay-popup"
          style={{
            position: "fixed",
            width: "64.1666px",
            height: overlayHeight,
            left: `calc(98% - 55px)`,
            bottom: `15px`,
            zIndex: 11,
            textAlign: "center",
          }}
        >
          <StyledButton
            height="38px"
            color="#ffffffaa"
            hoverColor="#ffffffff"
            textColor="#000000ff"
            onClick={() => setOpen(false)}
          >
            Close
          </StyledButton>
        </div>
      ) : (
        <div
          className="map-overlay"
          style={{
            width: overlayWidth,
            height: 0,
            left: `calc(${margin} + ${width} - ${overlayWidth} + 10px)`,
            bottom: `calc(${overlayHeight} + 10px)`,
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <StyledButton
            height="38px"
            color="#ffffff50"
            hoverColor="#ffffffaa"
            textColor="#000000aa"
            onClick={() => setOpen(true)}
          >
            Fullscreen
          </StyledButton>
        </div>
      )}
    </KeyboardEventHandler>
  )
}

Dynmap.propTypes = {
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  popupStyle: PropTypes.object,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Dynmap.defaultProps = {
  width: "80%",
  height: "600vh",
  margin: "10%",
}

export default Radium(Dynmap)
