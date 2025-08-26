import React from "react";
import ReactDOM from "react-dom/client";

let count = 0;

// let addition = () => {
//     return count++;
// }

// let subtraction = () => {
//     return count--;
// }

const elem = (
    <span>sanjana</span>
)

const elem2 = (
    <div>
    {elem}
    <h1>Element within element</h1>
    </div>
)
const AdditionButton = () => (
    <span>
        <button> Add + </button>
    </span>
        
);

const SubtractionButton = () => (
    <span>
        <button> Subtract - </button>
    </span>
);

const CountDisplay = () => (
    <h1>{count}</h1>
)

// you can compose element with component and component within element
const HeadingComponent = () => (
    <div>
        <AdditionButton/>
        <CountDisplay/>
        <SubtractionButton/>
        {elem2}
        {/* <p>This is a react functional component</p> */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);