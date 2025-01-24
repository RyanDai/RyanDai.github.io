import React, { Component } from "react"
import $ from "jquery"
import "./App.css"
import Home from "./Home"
import Footer from "./Components/Footer"
import Timeline from "./Timeline"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: "bar",
      data: {},
    }
  }

  getData() {
    $.ajax({
      url: "./data.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ data: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
        alert(err)
      },
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { data } = this.state

    if (!data.main) {
      return <div>Loading...</div>
    }

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
        </Routes>
        <CustomFooter data={data.main} />
      </Router>
    )
  }
}

export default App

function CustomFooter({ data }) {
  const location = useLocation()

  let scrollTarget = "#home"
  if (location.pathname === "/timeline") {
    scrollTarget = "#top"
  }

  return <Footer data={data} scrollTarget={scrollTarget} />
}
