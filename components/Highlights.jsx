import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why choose <span className="purple"> Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                        icon={<FontAwesomeIcon icon="bolt" />} 
                    />
                    <div className="highlight">
                        <div className="highlight__img">
                            
                        </div>
                        <h3 className="highlight__subtitle">
                            Easy and Quick</h3>
                        <p className="highlight__para">
                            Get access to the book you purchesed online instantly
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Highlights


