'use client'

import React from 'react'
import { store } from "../redux/index"
import { Provider as ReduxProvider } from 'react-redux';

const ReduxProviders = ({children}: any) => {

    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default ReduxProviders
