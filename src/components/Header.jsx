import React from "react";

export default function Header(){
    const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
console.log(total);
console.log(withTax)
    return(
        <div className="header">
            <h3 className="header__title">CALCULATOR</h3>
            <div className="theme">
                <p className="theme__text">THEME</p>
                <div className="theme__container">
                    <div className="theme__container--upper">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                    <div className="theme__container--lower">
                        <button>O</button>
                    </div>
                </div>
            </div>
        </div>
    )
}