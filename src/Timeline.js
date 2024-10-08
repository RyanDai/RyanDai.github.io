import React, { useState, useEffect } from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import "./Timeline.css"

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([])
  const [iconColours, setIconColours] = useState({})

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Accessing the timeline data inside the "events" array
        setTimelineData(data.timeline.events)
        setIconColours(data.timeline.iconColourStyle)
      })
      .catch((error) => console.error("Error loading timeline data: ", error))
  }, [])

  if (!timelineData.length || !Object.keys(iconColours).length) {
    return <div>Loading...</div>
  }

  return (
    <div className="timelineContainer">
      <div id="top" style={{ paddingTop: "50px" }}></div>
      <div class="title">TIMELINE</div>
      <VerticalTimeline>
        {timelineData.map((element) => {
          const iconStyle = { background: iconColours[element.icon] }

          return (
            <VerticalTimelineElement key={element.id} iconStyle={iconStyle}>
              <div className="vertical-timeline-element-title">{element.title}</div>
              <ul className="timeline-list">
                {element.description.map((item, index) => (
                  <li key={index} className="timeline-description">
                    {item}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
