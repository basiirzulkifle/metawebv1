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
                            path="services/softwaredev_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#softwaredev_section'
                                    }
                                />
                            }
                        />
                        <Route
                            path="services/ecommerce_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#ecommerce_section'
                                    }
                                />
                            }
                        />
                        <Route
                            path="services/websitedesign_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#websitedesign_section'
                                    }
                                />
                            }
                        />
                        <Route
                            path="services/webminigame_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#webminigame_section'
                                    }
                                />
                            }
                        />
                        <Route
                            path="services/virtualevent_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#virtualevent_section'
                                    }
                                />
                            }
                        />
                        <Route
                            path="services/onlineshowroom_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#onlineshowroom_section'
                                    }
                                />
                            }
                        />
                        <Route
                            path="services/3dvisualization_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#3dvisualization_section'
                                    }
                                />
                            }
                        />
                        <Route
                            path="services/metaverse_section"
                            element={
                                <Iframe
                                    url={
                                        'https://360xp.co/ismartwebsite/services/#metaverse_section'
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
