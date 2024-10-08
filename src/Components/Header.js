import React, { Component } from "react"
import ParticlesBg from "particles-bg"
import Fade from "react-awesome-reveal"

class Header extends Component {
  render() {
    if (!this.props.data) return null

    // const github = this.props.data.github
    const name = this.props.data.name
    const description = this.props.data.description

    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true} color="#6495ED" />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Our Pride
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#milestones">
                Milestones
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#robocup">
                RoboCup
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div id="logo-image"></div>

          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2>{description}</h2>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              {/* <ul className="social">
                <li>
                  <a href="#portfolio" className="button btn project-btn">
                    <i className="fa fa-book"></i>Our Work
                  </a>
                </li>
                <li>
                  <a href={github} className="button btn github-btn">
                    <i className="fa fa-youtube"></i>Youtube
                  </a>
                </li>
              </ul> */}
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    )
  }
}

export default Header
