import React from "react";
import ReactDOM from "react-dom/client";
// import './css/index.css';
import App from './components/App';
// import ContactApp from './components/contact-components/App'

const root = ReactDOM.createRoot(document.getElementById("root"))
// This is for contact
// root.render(<ContactApp />)

// this is for Note Keeper
root.render(<App />)