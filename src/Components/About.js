import React, { Component } from "react"
import Fade from "react-awesome-reveal"

class About extends Component {
  render() {
    if (!this.props.data) return null
    const drcheng_pic = "images/" + this.props.data.drcheng

    return (
      <section id="about">
        <Fade duration={1000} triggerOnce>
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/dai.jpg" alt="Dr. Stem Profile" />
            </div>
            <div className="nine columns main-col">
              <h2>为什么选择我？</h2>
              <p>
                <h3>过硬的估价及谈判能力 和买自己的房子一样去挑选您的房子</h3>
                随着越来越多的买家中介只是匹配房源和客户，选房的标准大幅降低。我依然坚持用数据为主，经验为辅的方式去一套一套的 做高标准的筛选，只买优质房。
                <br />
                <br />
                <h3>真诚 诚实 绝对的信任</h3>
                在整个过程中，完全分享所有思考和决策，绝对透明，您可以把我当做家人一样去讨论每一套房的想法，我都会给出最公正和客观的回答
                <br />
                <br />
                <h3>过硬的估价及谈判能力</h3>
                六年的房产投资研究及实战经验，每天大量研究房产数据及案例，拥有一眼看穿真实估价的能力，每周都和不同中介打交道，练就了极强的谈判水平，擅长以低价拿下优质房产
                <br />
                <br />
                <h3>专业的知识及服务</h3>
                本人以自身的成功投资组合配置，熟悉各类贷款方法，精通各种投资框架，帮助近五十位普通人建立属于自己的投资组合，打造被动收入
              </p>
            </div>
          </div>

          <div className="row">
            <div className="three columns">
              <img className="drcheng-pic" src={drcheng_pic} alt="Dai" />
            </div>
            <div className="nine columns main-col">
              <h2>我的故事</h2>
              <p>
                2020-2022年投资买入布里斯班，黄金海岸等地，拿到了昆州十年来的最佳买点。
                <br />
                2023开始买入珀斯，再次拿到西澳十五年来最佳买点。
                <br />
                作为一个年轻人，从零开始五年打造了一个600万+的正现金流投资组合。
                <br />
                我又以投资顾问和规划师的身份帮助近50位朋友们排忧解难，在投资路上更进一步。
                <br />
                现在，我又开始了全套的买家代理服务，旨在帮助更多人复制我自己的成功投资经历。
              </p>
            </div>
          </div>
        </Fade>
      </section>
    )
  }
}

export default About
