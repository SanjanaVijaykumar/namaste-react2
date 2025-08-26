import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id: "parent"}, 
    React.createElement("div",{id: "child"},
    [React.createElement("h1",{key: 1},"I am h1 tag"),
    React.createElement("h2",{key: 2},"I am h2 tag"),
React.createElement("span",{key: 3},"I am span taag")]
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React element
const heading = React.createElement("h1",{id: "parent"},"Namaste React 😎");
const jsxHeading = <h1>Sanjana 😊</h1>
console.log(jsxHeading);

//React functional component
const HeadingComponent = () => <h1>Hello</h1>;

const HeadingComponent2 = () => (<h1>Hello</h1>);

const HeadingComponent3 = () => {
    return <h1>Hello</h1>
};

// above all the heading components will display hello but these are different ways of writing a component
// so when it is single line we can write it in 3 ways
// 1 - without any brackets we can write it, this doesnt require any return statement or () or {};
// 2 - when single line of code is there within () then this doesnt require return keyword;
// 3 - when it is within {} then it requires a return keyword 

// rendering react element on browser
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// rendering react functional component on browser
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><HeadingComponent/><HeadingComponent2/><HeadingComponent3/></>);