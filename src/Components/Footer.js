import React, { Component } from "react"
import Fade from "react-awesome-reveal"

class Footer extends Component {
  render() {
    if (!this.props.data) return null

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      )
    })

    const scrollTarget = this.props.scrollTarget || "#home"

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
              <ul className="copyright">
                <li>&copy; Copyright 2023-2025 Powered by Cyberlark.com.au</li>
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
