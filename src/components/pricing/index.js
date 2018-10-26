import React, { Component } from "react";
import TheButton from "../utils/TheButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ["Back", "Center", "Front"],
        descriptions: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, eum.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed ducimus!",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, eum."
        ],
        links: [
            "https://sales/back",
            "https://sales/center",
            "https://sales/front"
        ]
    };
    showPricing = () =>
        this.state.prices.map((price, idx) => (
            <Zoom key={idx} delay={idx === 1 ? 0 : 500}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${price}</span>
                            <span>{this.state.positions[idx]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.descriptions[idx]}
                        </div>
                        <div className="pricing_buttons">
                            <TheButton
                                label="Purchase"
                                color="fff"
                                background="#ffa800"
                                link={this.state.links[idx]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ));
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">{this.showPricing()}</div>
                </div>
            </div>
        );
    }
}

export default Pricing;
