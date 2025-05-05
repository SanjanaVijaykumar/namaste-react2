const heading = React.createElement("div",{id: "parent"}, 
    React.createElement("div",{id: "child"},
    [React.createElement("h1",{key: 1},"I am h1 tag"),
    React.createElement("h2",{key: 2},"I am h2 tag"),
React.createElement("span",{key: 3},"I am span taag")]
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);