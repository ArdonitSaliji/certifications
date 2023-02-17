import { useState } from 'react';
import './App.css';
import cert from './assets/frontend-cert.pdf';
function App() {
    return (
        <div className='App'>
            <embed className='cert' src={cert} width='800px' height='1200px' />
        </div>
    );
}

export default App;
