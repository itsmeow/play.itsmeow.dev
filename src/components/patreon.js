import React from "react"
import PropTypes from "prop-types"

const PatreonButton = ({ className, style }) => {
  return (
    <div
      class={
        "_2KV-widgets-shared--patreonWidgetWrapper patreonButton" +
        (className ? " " + className : "")
      }
      style={style}
    >
      <div class="fpvra8-0 Ubsnp">
        <a
          class="sc-AxmLO bVyoVa"
          color="primary"
          tabindex="0"
          type="button"
          href="https://www.patreon.com/bePatron?u=28256207&redirect_uri=https%3A%2F%2Fitsmeow.dev%2F&utm_medium=widget"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="sc-AxgMl fMtbEW">
            <div class="sc-AxirZ dQIjTw">
              <span class="sc-AxjAm iKePQk">
                <svg viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle
                      cx="362.589996"
                      cy="204.589996"
                      data-fill="1"
                      id="Oval"
                      r="204.589996"
                    ></circle>
                    <rect
                      data-fill="2"
                      height="545.799988"
                      id="Rectangle"
                      width="100"
                      x="0"
                      y="0"
                    ></rect>
                  </g>
                </svg>
              </span>
            </div>
            <div class="sc-Axmtr kBWvho"></div>Become a patron
          </div>
        </a>
      </div>
    </div>
  )
}

PatreonButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

export default PatreonButton
