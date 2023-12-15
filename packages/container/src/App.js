import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingApp/>
                    <hr />
                    <h1>Hi there!!!!!!!!</h1>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}
