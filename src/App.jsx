import { useState } from 'react';
import './App.css';
import frontendCert from './assets/frontend-cert.pdf';
import backendCert from './assets/backend-cert.pdf';

import { Routes, Route, BrowserRouter, useSearchParams, useParams } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route
                        path='/frontend'
                        element={
                            <embed
                                className='cert'
                                src={frontendCert}
                                width='800px'
                                height='1200px'
                            />
                        }
                    />
                    <Route
                        path='/backend'
                        element={
                            <embed
                                className='cert'
                                src={backendCert}
                                width='800px'
                                height='1200px'
                            />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
