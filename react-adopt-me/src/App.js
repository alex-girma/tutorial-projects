import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Dog",
//       breed: "Cocketiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopte Me</h1>
      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
