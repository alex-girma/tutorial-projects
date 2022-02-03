const Pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h2", {}, props.name),
		React.createElement("h3", {}, props.animal),
		React.createElement("h3", {}, props.breed),
	]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
		// Passing props into Pet element. {} is going to be passed as an argument into the Pet element
		React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
		React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
	]);
};
ReactDOM.render(React.createElement(App), document.querySelector(".root"));
