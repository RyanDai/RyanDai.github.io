import React, { Component } from "react"
import emailjs from "@emailjs/browser"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromName: "",
      studentName: "",
      studentYear: "",
      type: "",
      interest: "",
      contactEmail: "",
      contactMessage: "",
      loading: false,
    }
    // Bind event handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { fromName, studentName, studentYear, type, interest, contactEmail, contactMessage } = this.state

    if (!fromName || !studentName || !studentYear || !type || !interest || !contactEmail || !contactMessage) {
      alert("Please fill out all required form fields.")
      return
    }

    this.setState({ ...this.state, loading: true })

    const templateParams = {
      from_name: fromName,
      student_name: studentName,
      student_year: studentYear,
      message_type: type,
      interest: interest,
      from_email: contactEmail,
      message: contactMessage,
    }

    const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID || ""
    const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID || ""
    const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY || ""

    emailjs
      .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_PUBLIC_KEY)
      .then(() => {
        this.setState({
          fromName: "",
          studentName: "",
          studentYear: "",
          type: "",
          interest: "",
          contactEmail: "",
          contactMessage: "",
          loading: false,
        })
        alert("Your message sent successfully.")
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          loading: false,
        })
        console.error("Email send error:", error)
        alert("Something went wrong. Please try again later.")
      })
  }

  render() {
    if (!this.props.data) return null

    const displayEmail = this.props.data.email
    const displayMessage = this.props.data.contactmessage

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{displayMessage}</p>
          </div>
        </div>

        <div className="row">
          <div className="row">
            <div className="three columns"></div>
            <div className="nine columns main-col contact-container">
              <div className="contact-details">
                <p className="contact-text">
                  <span>
                    Dai BA Service
                    <br />
                    小Dai
                    <br />
                    {this.props.data.address}
                    <br />
                    Wechat: ryandaiisme
                    <br />
                    {displayEmail}
                    <br />
                    YouTube: 小Dai的财富自由之路
                    <br />
                    Rednote: 小Dai的财富自由之路
                  </span>
                </p>
              </div>
              <div className="download">
                <p>
                  <img className="contact-pic" src="images/wechat.jpg" alt="Wechat Contact" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
