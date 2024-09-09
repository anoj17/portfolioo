'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';
import Home from '../page';
import { useSelector } from 'react-redux';

const Provider = ({ children }: { children: ReactNode }) => {
    const { isAuthentication } = useSelector((state: any) => state.auth)
    console.log(isAuthentication)
    const client: QueryClient = new QueryClient()
    // { isAuthentication && <Home /> }
    return (
        <div>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
            <Toaster />
        </div>
    )
}

export default Provider