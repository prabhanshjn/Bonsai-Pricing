import React, {useState} from "react"
// @ts-ignore
import monthFree from "../../assets/2Months.svg"
import PricingCard from "./PricingCard";
import PricingPlans from "./pricingPlans";

const PricingHome = () => {

    const [checked, setChecked] = useState<boolean>(false)


    return(
        <div className={"w-full relative"} style={{
            paddingTop: "110px",
            paddingBottom: "40px",
        }}>
            <img className={"absolute right-96 top-16"} src={monthFree}/>
            <div className={"flex space-x-32 block mx-auto justify-center"}>
                <div>
                    <h1 className={"text-4xl text-stone-500"}>Plans & Pricing</h1>
                </div>


                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className={checked? "text-xl mr-4 opacity-50" : "text-xl mr-4"}>Monthly</span>
                        <input onClick={() => setChecked(!checked)} type="checkbox" className="toggle toggle-accent" checked={checked}/>
                        <span className={!checked? "text-xl mr-4 opacity-50" : "text-xl mr-4"}>Yearly</span>
                    </label>
                </div>
            </div>
            <div style={{
                width: "1200px"
            }} className={"grid grid-cols-3"}>
                {PricingPlans.map((object: {
                    checklist: string[];
                    name: string; tag: string; currency: number; }) => {{
                    return(
                        <PricingCard
                            name={object.name}
                            tag={object.tag}
                            currency = {object.currency}
                            checklist = {object.checklist}
                            checked = {checked}
                        />
                    )
                }
                })}
            </div>

        </div>
    )
}

export default PricingHome