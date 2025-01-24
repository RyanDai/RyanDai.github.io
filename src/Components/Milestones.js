import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class Milestones extends Component {
  render() {
    if (!this.props.data) return null

    return (
      <section id="milestones">
        <Slide left duration={1300} triggerOnce>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>买房细节</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <ul class="milestones">
                <li class="milestones-event">
                  <label class="milestones-event-icon"></label>
                  <div class="milestones-event-copy">
                    <div className="milestonesContainer">
                      <p class="milestones-event-thumbnail">细节一</p>
                    </div>
                    <h4>只买中低价位二手house</h4>
                    <ul>
                      <li>避坑，不碰楼花，减少风险</li>
                      <li>不碰公寓，最多买townhouse</li>
                      <li>120w以下，大多数为蓝筹区或边缘</li>
                    </ul>
                  </div>
                </li>
                <li class="milestones-event">
                  <label class="milestones-event-icon"></label>
                  <div class="milestones-event-copy">
                    <div className="milestonesContainer">
                      <p class="milestones-event-thumbnail">细节二</p>
                    </div>
                    <h4>顺周期买房</h4>
                    <ul>
                      <li>通过每天研究数据和实战，发现即将或正在上涨的区域</li>
                      <li>保证买到手就有的增值和良好现金流</li>
                      <li>避开刚暴涨完的地区，避免溢价</li>
                    </ul>
                  </div>
                </li>
                <li class="milestones-event">
                  <label class="milestones-event-icon"></label>
                  <div class="milestones-event-copy">
                    <div className="milestonesContainer">
                      <p class="milestones-event-thumbnail">细节三</p>
                    </div>
                    <h4>尽量不去拍卖</h4>
                    <ul>
                      <li>从online和off market房源中选择，中低价位很多好机会都不是从拍卖中获得的</li>
                      <li>减少竞争，更能发挥我估价和谈判能力强的优势</li>
                    </ul>
                  </div>
                </li>
                <li class="milestones-event">
                  <label class="milestones-event-icon"></label>
                  <div class="milestones-event-copy">
                    <div className="milestonesContainer">
                      <p class="milestones-event-thumbnail">细节四</p>
                    </div>
                    <h4>全程服务保障</h4>
                    <ul>
                      <li>真诚，只说实话，确保满意是我的第一要义</li>
                      <li>分期付款，并支持退款（需付少量人工成本），做到就算万一真的不满意，也可以满意的结束</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Slide>
      </section>
    )
  }
}

export default Milestones
