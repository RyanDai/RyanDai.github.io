import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class RoboCup extends Component {
  render() {
    if (!this.props.data) return null

    return (
      <section id="robocup">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>RoboCup Junior</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <iframe
                className="roboCupVideo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v7CEL-KYMAM?si=eqO6D_JLVAn5iBdH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default RoboCup
