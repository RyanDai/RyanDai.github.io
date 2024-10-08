import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class Work extends Component {
  render() {
    if (!this.props.data) return null

    const pride = this.props.data.pride.map(function (pride) {
      return (
        <div key={pride.team} className="prideContainer">
          <h3>{pride.team}</h3>
          <p className="info">
            {pride.desc} <span>&bull;</span>
            <em className="date">{pride.date}</em>
          </p>
          <img src={pride.image} alt="pride" />
        </div>
      )
    })

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Our Pride</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{pride}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default Work
