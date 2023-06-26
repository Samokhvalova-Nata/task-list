import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "components/App";
import { Provider } from "react-redux";
import { store, persisitor } from "redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persisitor}>
                <BrowserRouter basename="/task-list">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    // </React.StrictMode> 
);