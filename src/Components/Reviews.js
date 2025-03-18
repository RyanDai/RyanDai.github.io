import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class Reviews extends Component {
  render() {
    if (!this.props.data) return null

    return (
      <section id="reviews">
        <Slide left duration={1300} triggerOnce>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>客户评价 - 不断更新中</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div className="">
                    <img className="review-image" src="images/r1.jpg" alt="reviews" />
                    <img className="review-image" src="images/r2.jpg" alt="reviews" />
                    <img className="review-image" src="images/r3.jpg" alt="reviews" />
                    <img className="review-image" src="images/r4.jpg" alt="reviews" />
                    <img className="review-image" src="images/r5.jpg" alt="reviews" />
                    <img className="review-image" src="images/r6.jpg" alt="reviews" />
                    <img className="review-image" src="images/r7.jpg" alt="reviews" />
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

export default Reviews
