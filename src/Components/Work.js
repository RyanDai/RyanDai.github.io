import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class Work extends Component {
  render() {
    if (!this.props.data) return null

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>买房流程</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div className="">
                    <h3>阶段一</h3>
                    <p>进行初步咨询，了解客户财务状况，提供一个量身定制的财务规划，包括房产投资组合规划策略，税务规划等</p>
                    <h3>阶段二</h3>
                    <p>进一步咨询，确认客户的投资房产购买标准，将确定购买房产的具体需求和细节</p>
                    <h3>阶段三</h3>
                    <p>
                      将启动全面的房产搜索，包括online和off
                      market，利用数据和经验做客观，真实的筛选，锁定最值得购买的区域和房子，将为客户提供房产报告和现金流分析，供客户参考和考虑
                    </p>
                    <h3>阶段四</h3>
                    <p>
                      将代表客户进行房产检查，并进行全面的尽职调查。同时，将完成全面的市场评估，以便通过合适的报价锁定房产。在客户批准后，代理人将运用专业知识进行谈判，力争为客户成功获取房产
                    </p>
                    <h3>阶段五</h3>
                    <p>将推荐专业人士为客户审核购房合同，并协助办理过户流程，包括贷款broker、律师、建筑/虫害检查员，物业管理。客户也可以选择自己的专业团队</p>
                    <h3>阶段六</h3>
                    <p>完成过户，并协助将房产交接给物业管理人员，直到出租</p>
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

export default Work
