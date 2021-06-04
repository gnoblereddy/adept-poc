import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

import Dashboard from './src/Dashboard';
import Home from './src/Home';

const AppRoutes = () => {
    console.log('store------', store);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/home' component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRoutes;