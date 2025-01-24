import React, { Component } from "react"
import Header from "./Components/Header"
import About from "./Components/About"
import Work from "./Components/Work"
import Milestones from "./Components/Milestones"
import RoboCup from "./Components/RoboCup"
import Contact from "./Components/Contact"

class Home extends Component {
  render() {
    const { data } = this.props

    return (
      <div className="App">
        <Header data={data.main} />
        <About data={data.main} />
        <Work data={data.work} />
        <Milestones data={data.work} />
        <RoboCup data={data.work} />
        <Contact data={data.main} />
      </div>
    )
  }
}

export default Home
