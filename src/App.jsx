import React from 'react'
import { Header } from './Common/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Common/Footer/Footer'

export const App = () => {
    return (
        <main className="flex flex-col">
            {/* Header  */}
            <Header />

            <section>
                <Outlet />
            </section>

            {/* Footer */}
            <Footer />

        </main >
    )
}
