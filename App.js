// How to create h1 element in react
// {} - is the place where you give attributes

const heading = React.createElement("h1",{id:"heading"}, "Hello World from React!");
// It comes from the first library

console.log(heading); // object

// First we need to tell where is the root
// This comes from second library
// To render it in web browser
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(heading);
// render function converts the heading object to tag
// and render it in the browser



// How to create nested elements

/**
 * <div id = "parent">
 *  <div id ="child"> 
 *      <h1>I am nested inside div</h1>
 *  </div> 
 * </div>
 */

const parent = React.createElement("div", {id:"parent"},
[
React.createElement("div", {id:"child"},[
React.createElement("h1", {id:"head"}, "I am nested"),
React.createElement("h2", {id:"head2"}, "I am nested"),]
)],
[
React.createElement("div", {id:"child2"},[
React.createElement("h1", {id:"head"}, "I am nested"),
React.createElement("h2", {id:"head2"}, "I am nested"),
]
)],
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// ReactElement(Object) => HTML(Browser Understands)

//JSX
