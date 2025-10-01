import React, { Component } from "react"
import Header from "./Components/Header"
import About from "./Components/About"
import Steps from "./Components/Steps"
import Milestones from "./Components/Milestones"
import Reviews from "./Components/Reviews"
import Properties from "./Components/Properties"
import Contact from "./Components/Contact"

class Home extends Component {
  render() {
    const { data } = this.props

    return (
      <div className="App">
        <Header data={data.main} />
        <About />
        <Steps />
        <Milestones />
        <Reviews />
        <Properties />
        <Contact data={data.main} />
      </div>
    )
  }
}

export default Home
