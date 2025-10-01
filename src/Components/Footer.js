import React, { Component } from "react"
import Fade from "react-awesome-reveal"

class Footer extends Component {
  render() {
    const scrollTarget = this.props.scrollTarget || "#home"
    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              {/* <ul className="social-links">{networks}</ul> */}
              <ul className="copyright">
                <li>&copy; Dai BA Service - Copyright 2023-2025 Powered by Dai</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href={scrollTarget}>
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
