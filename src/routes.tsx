import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Country from './pages/Country';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/:country">
                    <Country />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;