import React from 'react'

import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Details from '../pages/detail/Details'

const Routers = () => {
    return (
        <Switch>
            <Route 
                path='/:category/search/:keyword' 
                component= {Catalog}
            />
            <Route 
                path='/:category/:id' 
                component= {Details}
            />
            <Route 
                path='/:category' 
                component= {Catalog}
            />
            <Route 
                path='/' 
                component= {Home}
            />
        </Switch>
    )
}

export default Routers
