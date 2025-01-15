# cocktail_drinkfinder
Use it here: [Deployment](https://cocktail-drinkfinder.vercel.app/).
## Running Locally

1. Clone this or your forked repo to your machine
2. Run ```npm i``` to install required dependencies
3. Run ```npm start``` to start the project locally

## User flow
Searching for a drink with the searchbar will always populate a fresh list of drinks matching your query.
You can narrow your search results using the dropdown menus, which allow you to cross-filter your search against categories, ingredients and glasses.

If you don't provide a search and instead just use the dropdown menus, it will populate a list of drinks based on the first option you searched by.
Note: You can still cross-filter with the other menus/dropdowns, even if you haven't provided a search.

After you've narrowed your search, you will have a list of drinks that match your query *(Or no drinks if none match)*.
From here you can press the button labeled **More Info** on your desired drink to be taken to a page that displays more details about the drink, including how to make it. *Provided that the API has instructions listed in English*

## A Note On Cross-Filtering
Due to a limitation in the API, *and me not wanting to pull every single drink into state at once* sometimes cross-filtering is inaccurate. Any given API call only returns 100 objects, and because the API doesn't support cross-filtering itself I had to build a function that compares the current state of the drinks to the list returned by the API call. This means that cross-filtering works, but only for the 100 drinks returned by the API.
