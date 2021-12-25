import React from 'react';

import Home from './view/home/Home';
import CadastroProdutos from './view/produtos/CadastroProdutos';
import ListaProdutos from './view/produtos/ListaProdutos';
import { Routes, Route } from 'react-router-dom';

export default function Rotas() {
    return ( 
        <Routes>
            <Route
                path="/listaProdutos" 
                element={<ListaProdutos />} 
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
 
