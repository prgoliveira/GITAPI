import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home'
import Repositories from '../Pages/Repositories'

export default props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}