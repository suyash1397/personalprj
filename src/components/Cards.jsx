import React from "react";
import "./Cards.css"



function Cards({ sname, imgsrc, title, links }) {
    return (

        <div className="card">
            <img src={imgsrc} alt="" />
            <div className="card_info">
                <span className="card__category">{title}</span>
                <h3 className="card_title">{sname}</h3>
                <a href={links} target={"_blank"}>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>


    )

}

export default Cards