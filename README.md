# Country API Practice Project

This project is a practice exercise for using a Country API to retrieve and display information about different countries. The project includes HTML and JavaScript files.

## HTML Structure

The HTML file (`index.html`) consists of the following elements:

```html
<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <!-- meta tags, title, stylesheets, and scripts -->
</head>
<body>
    <!-- main content of the page -->
</body>
</html>
```

## JavaScript Functionality

The JavaScript file (`app.js`) contains the following functionality:

1. **Fetch Data**: The `fetchData()` function fetches country data from the specified API URL and stores it in the `countries` variable.

2. **Update UI**: The `updateUi()` function populates the UI with country information by creating and appending HTML elements based on the fetched data.

3. **Search Functionality**: The script listens for keydown events on the search input field. It filters the countries based on the search query and updates the UI accordingly.

4. **Filter Functionality**: The script listens for click events on the filter options. It filters the countries based on the selected region and updates the UI.

5. **Pop-up Functionality**: The script adds click event listeners to each country element. When clicked, it opens a pop-up with more detailed information about the country.

6. **Dark Mode Toggle**: The script listens for a click event on the theme toggle button. It toggles the theme between light and dark mode by updating the `data-bs-theme` attribute of the HTML tag.


## External Dependencies

The project relies on the following external dependencies:

- Bootstrap CSS (`bootstrap.min.css`): Provides pre-styled components and utilities for easy layout and styling.
- Bootstrap JavaScript (`bootstrap.bundle.min.js`): Adds interactive features to the page, such as dropdowns and pop-ups.

Please note that to run the project successfully, an active internet connection is required to fetch country data from the API.

To get started, open the index.html file in a web browser. The page will display a list of countries and provide search and filter options for exploring the data. Clicking on a country card will open a pop-up with more detailed information about the country.

Enjoy exploring the countries of the world with this Country API practice project!