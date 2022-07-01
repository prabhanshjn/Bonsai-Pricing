import React from "react";
// @ts-ignore
import logo from "../assets/bonsai_logo.svg"


const Navbar = () => {
    return(
        <nav className={"p-4 pt-6"}>
            <div className={"grid grid-cols-3 content-center justify-center"}>
                <div className={"md:pl-36"}>
                    <img className={"w-36 object-cover mt-2"} src={logo}/>
                </div>
                <div className={"grid grid-cols-4 content-center"}>
                    <p> Product </p>
                    <p> Templates </p>
                    <p> Pricing </p>
                    <p> Reviews </p>
                </div>
                <div className={"md:ml-32"}>
                    <button className="btn btn-outline btn-accent">LOG IN</button>
                    <button className="btn btn-accent ml-8 text-white">Start Free</button>

                </div>

            </div>
        </nav>
    )
}

export default Navbar