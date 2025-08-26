import React from "react";
import { useState } from "react";
import ReactDom from "react-dom/client";
import { Addition } from "./Addition";
import Subtracttion from "./Subtraction";
import DisplayData from "./DisplayData";


const BodyNewComponent = () => {
    const [data,setData] = useState(0);
    let add = () => {
        setData(data+1);
    }
    let subtract = () => {
        setData(data-1)
    }

    return (
        <div className="body">
            <DisplayData data={data}/>
            {data <= 10 ? <Addition data={add}/>: ''}
            {data>0 ? <Subtracttion data={subtract}/>: ''}
        </div>
    )
}

export default BodyNewComponent;