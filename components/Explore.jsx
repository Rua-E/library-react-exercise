import React from "react";

const Explore = () => {
return (
    <>
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Expore more <span className="purple">Books</span>
                        <a href="/books" >
                            <button className="btn">Explore books</button>
                        </a>
                    </h2>
                </div>
            </div>
        </section>
    </>
)
};

export default Explore;