import React from 'react'
import {
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import Game from './Game/Game'
import Theme from './Theme'
import Iframe from './page/Iframe'
import Nomenu from './page/Nomenu'
import './App.css'

function App() {
    const theme = createTheme(Theme)
    const viteBaseUrl = import.meta.env.VITE_BASE_URL

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter basename={`${viteBaseUrl}`}>
                    <Routes>
                        <Route path="/" element={<Game />} />
                        <Route
                            path="portfolio"
                            element={
                                <Nomenu
                                    url={'https://360xp.co/ismartwebsite/'}
                                />
                            }
                        />
                        <Route
                            path="services"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/'
                                    }
                                />
                            }
                        />
                        <Route
                            path="about-us"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/about-us/'
                                    }
                                />
                            }
                        />
                        <Route
                            path="contact-us"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/contact-us/'
                                    }
                                />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App
