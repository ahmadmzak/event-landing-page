import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import TheButton from "../utils/TheButton";

class Discount extends Component {
    state = {
        discount_start: 0,
        discount_end: 30
    };
    componentDidUpdate() {
        setTimeout(() => this.percentage(), 30);
    }
    percentage = () => {
        if (this.state.discount_start < this.state.discount_end) {
            this.setState({
                discount_start: this.state.discount_start + 1
            });
        }
    };
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={this.percentage}>
                        <div className="discount_percentage">
                            <span>{this.state.discount_start}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 25th June</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Distinctio, est! Suscipit id
                                inventore odit hic molestias, iusto esse
                                veritatis excepturi itaque natus eius,
                                consequuntur rerum laudantium dolorum deserunt
                                ratione fugit!
                            </p>
                            <TheButton
                                label="Purchase tickets"
                                background="#ffa800"
                                color="#fff"
                                link="https://www.google.com"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;
