import React, { Component } from "react"

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null

    var portfolio = this.props.data.projects.map(function (project) {
      var imageUrl = "images/portfolio/" + (project.image ? project.image : "sample-image.svg")
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={project.url} title="">
              <img alt="" src={imageUrl} className="portfolio-item-img" />
            </a>
          </div>
        </div>
      )
    })

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Our Sponsors</h1>
            <p className="sponserDescription">
              We sincerely thank our generous sponsors for their invaluable support in helping us inspire the next generation of innovators and robotics
              enthusiasts at DR STEM Robotics Club!
            </p>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {portfolio}
            </div>
          </div>
        </div>
      </section>
    )

    /*
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out My Videos</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
    */
  }
}

export default Portfolio
