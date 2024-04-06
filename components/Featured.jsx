import React from "react";
import Book from "./ui/Book";
import { books } from "../data";


const Featured = () => {
    console.log(books)
    return (
        <>
        <section id="features">
            <div className="conatiner">
                <div className="row">
                    <h2 className="section__title">
                        Fatured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        <Book></Book>
                        <Book></Book>
                        <Book></Book>
                        <Book></Book>
                       
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
};

export default Featured;