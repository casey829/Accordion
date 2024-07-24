//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import './styles.css'

function Accordian (){

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
       setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    return (
        <div className="wrapper">
            <div className="accordian">
             {
                data && data.length > 0 ? (
                data.map((dataItem) => (
                <div className="item">
                    <div onClick={()=> handleSingleSelection(dataItem.id)}className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className="contact">{dataItem.answer}</div>
                        : null
                    }
                </div>
                ))
            ): (
               <div>Sorry currently there is no data present</div>
             )}
            </div>
        </div>
    )
};


export default Accordian;