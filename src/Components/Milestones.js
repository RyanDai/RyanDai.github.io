import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class Milestones extends Component {
  render() {
    if (!this.props.data) return null

    const milestones = this.props.data.milestones.map(function (milestones) {
      return (
        <ul class="milestones">
          <li class="milestones-event">
            <label class="milestones-event-icon"></label>
            <div class="milestones-event-copy">
              <div className="milestonesContainer">
                <p class="milestones-event-thumbnail">{milestones.date}</p>
                <img className="milestonesLogo" src={milestones.image} alt="milestones" />
              </div>
              <h4>{milestones.title}</h4>
              <ul>
                {milestones.desc.map((description, idx) => (
                  <li key={idx}>{description}</li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      )
    })

    return (
      <section id="milestones">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Milestones</span>
              </h1>
            </div>
            <div className="nine columns main-col">{milestones}</div>

            {/* Add View All button */}
            <div className="viewallContainer">
              <a href="/timeline" target="_blank" rel="noopener noreferrer">
                <button className="viewall-button">View All ...</button>
              </a>
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default Milestones
