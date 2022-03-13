import React from "react";

const Header = ({ title }) => {
	return (
		<header
			style={{
				backgroundColor: "mediumblue",
			}}
		>
			<h1>{title}</h1>
		</header>
	);
};
Header.defaultProps = {
	title: "Default Title",
};

export default Header;
