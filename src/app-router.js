import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTE_LIST} from "./route-list/route-list";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {ROUTE_LIST.map(routeItem => (
                        <Route 
                            exact={routeItem.exact} 
                            key={routeItem.url} 
                            path={routeItem.url} 
                            component={routeItem.component}
                        />
                    ))}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

