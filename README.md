# Simple Spotify Artist Search App

## Installation

- install packages
- `yarn start` and app can be seen at http://localhost:3000/
- In utils/constants.js, CLIENT_ID and REDIRECT_URI are already provided but feel free to change to your own.

## Good to know info

- UI lib : https://chakra-ui.com/ (So I don't need css stylesheets for the purpose of this project)
- Since we need access token in every page to fetch data from spotify, auth details are stored in a context.
- commonProps.js are mostly styling spreaded as props in various components.
