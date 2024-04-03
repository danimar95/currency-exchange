# Currency Exchange App

This is a simple project for currency exchange. It was created with ReactJS, Typescript and Tailwind. Uses Axios to make the API call and react-icons to import the icons.

The API call requires a token from alphavantage. You can request a free token on their website: https://www.alphavantage.co/documentation/#


Once you have a token, you should create a `.env.local` file on the root directory and add the token like this: `REACT_APP_API_KEY={TOKEN}`.

<br/>

## Setting the app up in a local environment

1. **Go to the desired location for the project and clone the current repository:**

    ```bash
    git clone https://github.com/danimar95/currency-exchange.git
    ```
2. **Go to the project folder:**
    Make sure you are in the project's directory first and run
    ```bash
    cd currency-exchange-project
    ```
3. **Install the Project Dependencies:**
    run
    ```bash
    npm install
    ```
4. **Start the React Application and Access it running:**
     ```bash
     npm run start 
    ```
    
    Access the application via `https://localhost:3000` (in case you are not running anything in port 3000)
