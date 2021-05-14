import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './src/Dashboard';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes;