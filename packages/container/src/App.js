import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp/>
                <hr />
                <h1>Hi there!!!!!!!!</h1>
            </div>
        </BrowserRouter>
    )
}
