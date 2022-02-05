import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
	return (
		<div>
			<h1 id="my-brand">Adopt Me</h1>
			<Pet name="Luna" animal="Dog" breed="Havanese" />
			<Pet name="Pepper" animal="Bird" breed="Cockatiel" />
			<SearchParams />
		</div>
	);
};
ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.querySelector(".root")
);
