// const CardUi =(props)=>{}

import React from "react"
const CardUi = ({ title, paragraph, image }) => {
    return (
        <>
            <div className="card shadow border-0">
                <img src={image ?? "images/pexels.png"} alt="" height={320} />
                <div className="card-body">
                    <h1>{title ?? "dummy title"}</h1>
                    <p>{paragraph ?? "dummy paragraph"}</p>
                </div>
            </div>
        </>     
    )


}
export default CardUi;