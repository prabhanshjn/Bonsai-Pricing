import React from "react"
import {Pricing} from "./pricing"
// @ts-ignore
import check from "../../assets/check.png"

const PricingCard = (props: any) => {
    return(
        <div className={"mt-12 ml-36"}>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title pt-8 relative">{props.name}</h2>
                        <p className={"w-60 text-sm"}>{props.tag}</p>
                        <div className={"relative mt-4"}>
                            <span className={"text-3xl absolute top-0"}>$</span>
                            <span className={"text-6xl ml-6"}>{props.currency}</span>
                            <span className={"uppercase text-3xl absolute -bottom-1 right-24 opacity-80"}>/month</span>
                        </div>
                        <div className={props.checked? "ml-auto mr-8" : "hidden"}>Billed Yearly</div>
                        <div className={"mb-12"}>
                            <hr className={"border-t-2"} style={{
                                width: "300px",
                                borderColor:"#01b289",
                            }}/>
                            <div className={props.name === "Professional" ? "relative" : "hidden"}>
                                <div style = {{
                                    backgroundColor:"#01b289",
                                }} className={props.checked? "absolute uppercase origin-center left-32 rotate-45 text-white text-xl w-full text-center -top-52" : "absolute uppercase origin-center left-32 rotate-45 text-white text-xl w-full text-center -top-44"}>Most Popular</div>
                            </div>
                        </div>
                        <div className={"mb-52"}>
                            {props.checklist.map((point: string) => {
                                return(
                                    <div className={"ml-2 mb-3 flex"}>
                                        <img className={"w-4 mr-3 object-cover"} src={check}/>
                                        <span>{point}</span>
                                    </div>
                                    )


                            })}
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full btn-accent text-white">Start Free</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PricingCard