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
    const email = this.props.data.email
    const facebook = this.props.data.facebook
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
              <h2>About the Club</h2>
              <p>
                {club_desc.line1}
                <br />
                {club_desc.line2}
                <br />
                {club_desc.line3}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="three columns">
              <img className="drcheng-pic" src={drcheng_pic} alt="Dr. Stem Profile" />
            </div>
            <div className="nine columns main-col">
              <h2>Who is Dr. Cheng</h2>
              <p>{this.props.data.bio}</p>
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
                    Wechat: {wechat}
                    <br />
                    Email: {email}
                    <br />
                    Facebook: {facebook}
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
