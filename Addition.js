import React from "react";
import { useState } from "react";
import ReactDom from "react-dom/client";


const BodyComponent = () => {
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

const Addition = ({data}) =>{
    return (
        <div>
        <button onClick={data}>+</button>
        </div>
    )
}

const Subtracttion = ({data}) =>{
    return (
        <div>
        <button onClick={data}>-</button>
        </div>
    )
}

const DisplayData = ({data}) =>{
    return (
        <div>
        <h3>{data.toString()}</h3>
        </div>
    )
}

const AppComponent = () => (
    <div>
        <BodyComponent />
    </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)