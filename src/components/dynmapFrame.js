import React from "react"
import PropTypes from "prop-types"
import Radium from "radium"

const DynmapFrame = ({
  title,
  src,
  width,
  height,
  style,
  border,
  borderRadius,
  className,
  onLoad,
}) => {
  const styles = {
    border: border,
    borderRadius: borderRadius,
  }
  return (
    <iframe
      title={title}
      src={src}
      width={width}
      height={height}
      style={[style, styles]}
      className={className}
      onLoad={onLoad}
    >
      Loading Map...
    </iframe>
  )
}

DynmapFrame.propTypes = {
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

DynmapFrame.defaultProps = {
  borderRadius: "8px",
  border: "1px solid rgba(130, 130, 130, 0.75)",
  width: "80%",
  height: "600vh",
  className: "dynmap-frame",
}

export default Radium(DynmapFrame)
