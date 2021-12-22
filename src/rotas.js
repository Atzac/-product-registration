import React from 'react';

import Home from './view/home/Home';
import CadastroProdutos from './view/produtos/CadastroProdutos';
import { Routes, Route } from 'react-router-dom';

export default function Rotas() {
    return ( 
        <Routes>
            <Route
                path="/cadastro" 
                element={<CadastroProdutos />} 
            />
            <Route
                path="/"
                element={<Home />} 
            />
            <Route
                path="/cadastroProdutos"
                element={<CadastroProdutos />} 
            />
        </Routes>
     );
}
 
