# Movie Browser

## About the Project

This project allows users to search through a movie database and display results including the movie title, poster, description, and release date.  The results are displayed on indiviual cards including a pop-out modal with addtional information.

### Deployed Link
This project was deployed using GitHub Pages.
- [Deployed Site](https://joshuafmiller.github.io/Movie-Project-Relias/)


## Built With
- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## How to Run Locally

Run the following command in your CLI

git clone https://github.com/joshuafmiller/Movie-Project-Relias.git

cd into the folder with this command:

cd .\Movie-Project-Relias\

Install dependencies by running:

npm install

Start the application by running the following command:

npm start

## How To Use
When the user arrives to the page, instructions are provided to direct the user to the top right of the screen.

The search bar can be used to search through the movie database.  As text is entered or changed, search results will be displayed on the page.

The user can click on the cards displayed to display the pop-out modal which provides additonal movie information.

If there are more than 20 results, Previous and Next buttons are displayed.  The user can navigate between results pages by clicking the Previous or Next buttons.  A change to the search text will always bring the user back to Page 1.

If no results are found, the user will give given a no results found message.

The user can clear search results by removing the current search text.


## Next Steps

- Create a backend so the user can save favorties or recent searches.
- Add error handling if there is a failed API request.  Currently there is a catch on error to just console log the error which prevents crashing but does not do anything else.
