import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class RoboCup extends Component {
  render() {
    if (!this.props.data) return null

    return (
      <section id="robocup">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>经典案例</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div className="prideContainer">
                    <h3>黄金海岸Upper Coomera</h3>
                    <p>
                      购于2024年中，422户型460地，81w就拿下当时估价85w，市场价86-88w的别墅
                      <br />
                      <em className="date">租金820每周，租金回报5.1%</em>
                    </p>
                    <img src="images/uc.jpg" alt="pride" />
                  </div>
                  <div className="prideContainer">
                    <h3>珀斯Ellenbrook</h3>
                    <p>
                      购于2023年中，322户型350地，买入价42w，2024年七月市场估价64w
                      <br />
                      <em className="date">现租金620每周，租金回报7.6%</em>
                    </p>
                    <img src="images/ellen.jpg" alt="pride" />
                  </div>
                  <div className="prideContainer">
                    <h3>布里斯班Kallangur</h3>
                    <p>
                      购于2022年末，422户型620地，买入价61w，2024年七月市场估价88w
                      <br />
                      <em className="date">租金780每周，租金回报6.5%</em>
                    </p>
                    <img src="images/kall.jpg" alt="pride" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default RoboCup
