import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {getStorage } from '../utils'

const isLogged = getStorage('token') !== null

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={
            props => isLogged ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                )
        } />
)