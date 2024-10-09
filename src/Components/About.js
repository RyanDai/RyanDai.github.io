import React, { Component } from "react"
import Fade from "react-awesome-reveal"

class About extends Component {
  render() {
    if (!this.props.data) return null

    const name = this.props.data.name
    const profilepic = "images/" + this.props.data.image
    const drcheng_pic = "images/" + this.props.data.drcheng
    const wechat_pic = "images/" + this.props.data.wechat_pic
    // const bio = this.props.data.bio;
    const club_desc = this.props.data.club_desc
    const club_points = this.props.data.club_points
    const email = this.props.data.email
    const youtube = this.props.data.youtube
    const wechat = this.props.data.wechat

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={profilepic} alt="Dr. Stem Profile" />
            </div>
            <div className="nine columns main-col">
              <h2>About Buyer Agent Service</h2>
              <p>
                <b>{club_points.line1}</b>
                {club_desc.line1}
                <br />
                <br />
                <b>{club_points.line2}</b>
                {club_desc.line2}
                <br />
                <br />
                <b>{club_points.line3}</b>
                {club_desc.line3}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="three columns">
              <img className="drcheng-pic" src={drcheng_pic} alt="Dr. Stem Profile" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              {/* <p>{this.props.data.bio}</p> */}
              <p>
                As an experienced buyer agent, I specialize in using the latest property data to assist clients in identifying and purchasing properties that
                are perfectly suited to their financial goals. By understanding each client’s unique financial situation, I help them make informed decisions
                that maximize value and long-term returns. In addition to property acquisition, I provide tailored financial advice aimed at enhancing passive
                income streams, drawing from my expertise in real estate investment. With a personal portfolio of six properties, I have firsthand knowledge of
                the investment landscape, enabling me to offer practical, results-driven strategies for building wealth through real estate.
              </p>
            </div>
          </div>

          {/* <h2>Our Pride</h2>
              <p>{this.props.data.pride}</p> */}

          <div className="row">
            <div className="three columns"></div>
            <div className="nine columns main-col contact-container">
              <div className="contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>
                    {name}
                    <br />
                    {this.props.data.address}
                    <br />
                    {wechat}
                    <br />
                    {email}
                    <br />
                    YouTube: {youtube}
                    <br />
                  </span>
                </p>
              </div>
              <div className="download">
                <p>
                  <img className="contact-pic" src={wechat_pic} alt="Wechat Contact" />
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    )
  }
}

export default About
