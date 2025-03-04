# Movie Catalog

This is a movie catalog React app that allows you to search for any movie title.


## Setting up
- At the moment, the OMDb API is used for this app, so before running this app it's necessary to get an OMDb API key.
    - To get your API key, go to https://www.omdbapi.com/apikey.aspx and follow the instructions.
- After cloning this repository, create a `.env.local` file within the root directory and include your API key as the following env. variable:
  ```
  VITE_OMDB_API_KEY=include_here_your_API_key
  ```

## Usage
- Install all required dependencies by running `npm install` from the root directory.
- To run tests, execute `npm run test` from the root directory.
- To run locally, execute `npm run dev` from the root directory.