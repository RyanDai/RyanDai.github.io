import React, { Component } from "react"
import Slide from "react-awesome-reveal"

class Reviews extends Component {
  render() {
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
                    <img className="review-image" src="images/r1-2.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r1-1.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r1.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r2.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r3.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r4.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r5.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r6.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r7.jpg" alt="Dai BA Service" />
                    <img className="review-image" src="images/r-8.jpg" alt="Dai BA Service" />
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
