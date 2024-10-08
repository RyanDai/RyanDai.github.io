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

    const displayName = this.props.data.name
    const displayEmail = this.props.data.email
    const displayMessage = this.props.data.contactmessage

    const { loading } = this.state

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
          <div className="eight columns">
            <div id="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="fromName">
                    Parent Name <span className="required">*</span>
                  </label>
                  <input type="text" size="35" id="fromName" name="fromName" value={this.state.fromName} onChange={this.handleChange} required />
                </div>
                <div>
                  <label htmlFor="studentName">
                    Student Name <span className="required">*</span>
                  </label>
                  <input type="text" size="35" id="studentName" name="studentName" value={this.state.studentName} onChange={this.handleChange} required />
                </div>
                <div>
                  <label htmlFor="studentYear">
                    Student Year <span className="required">*</span>
                  </label>
                  <input type="text" size="35" id="studentYear" name="studentYear" value={this.state.studentYear} onChange={this.handleChange} required />
                </div>
                <div>
                  <label htmlFor="type">
                    Type <span className="required">*</span>
                  </label>
                  <select id="type" name="type" value={this.state.type} onChange={this.handleChange} required>
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="Enquire">Enquire</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complaints">Complaints</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="interest">
                    Area of Interest <span className="required">*</span>
                  </label>
                  <select id="interest" name="interest" value={this.state.interest} onChange={this.handleChange} required>
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="STEM Program">STEM Program</option>
                    <option value="RoboCup Junior">RoboCup Junior</option>
                    <option value="First LEGO League">First LEGO League</option>
                    <option value="First Tech Challenge">First Tech Challenge</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input type="email" size="35" id="contactEmail" name="contactEmail" value={this.state.contactEmail} onChange={this.handleChange} required />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    value={this.state.contactMessage}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <button className="submit" type="submit" onClick={this.handleSubmit} disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </fieldset>
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Email Us</h4>
              <p className="address">
                {displayName} <br />
                <span>{displayEmail}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    )
  }
}

export default Contact
