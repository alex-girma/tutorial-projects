import * as model from "./model";
import { MODAL_CLOSE_SEC } from "./config";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";
import bookmarksView from "./views/bookmarksView";
import addRecipeView from "./views/addRecipeView";

const controleRecipes = async function () {
	try {
		const id = window.location.hash.slice(1);

		if (!id) return;
		recipeView.renderSpinner();

		resultsView.update(model.getSearchResultsPage());
		bookmarksView.update(model.state.bookmarks);

		// Loading recipe
		await model.loadRecipe(id);

		// Rendering recipe
		recipeView.render(model.state.recipe);
	} catch (err) {
		recipeView.renderError();
	}
};

const controleSearchResult = async function () {
	try {
		resultsView.renderSpinner();
		const query = searchView.getQuery();
		if (!query) return;
		await model.loadSearchResult(query);
		resultsView.render(model.getSearchResultsPage());
		paginationView.render(model.state.search);
	} catch (err) {
		console.log(err);
	}
};

const controlePagination = function (goToPage) {
	resultsView.render(model.getSearchResultsPage(goToPage));
	paginationView.render(model.state.search);
};

const controleServings = function (newServings) {
	model.updateServings(newServings);
	recipeView.update(model.state.recipe);
};

const controleAddBookmark = function () {
	if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
	else model.deleteBookmark(model.state.recipe.id);

	recipeView.update(model.state.recipe);

	bookmarksView.render(model.state.bookmarks);
};

const controleBookmarks = function () {
	bookmarksView.render(model.state.bookmarks);
};

const controleAddRecipe = async function (newRecipe) {
	try {
		addRecipeView.renderSpinner();

		await model.uploadRecipe(newRecipe);
		recipeView.render(model.state.recipe);

		addRecipeView.renderMessage();

		bookmarksView.render(model.state.bookmarks);

		window.history.pushState(null, "", `#${model.state.recipe.id}`);

		setTimeout(function () {
			addRecipeView.toggleWindow();
		}, MODAL_CLOSE_SEC * 1000);
	} catch (err) {
		addRecipeView.renderError(err.message);
	}
};

const init = function () {
	bookmarksView.addHandlerRender(controleBookmarks);
	recipeView.addHandlerRender(controleRecipes);
	recipeView.addHandlerUpdateServings(controleServings);
	recipeView.addHandlerAddBookmark(controleAddBookmark);
	searchView.addHandlerSearch(controleSearchResult);
	paginationView.addHandlerClick(controlePagination);
	addRecipeView.addHabdlerUpload(controleAddRecipe);
};
init();
