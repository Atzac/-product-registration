import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './view/home/Home';
import CadastroProdutos from './view/produtos/CadastroProdutos';
import ListaProdutos from './view/produtos/ListaProdutos';
import * as constRotas from './constRotas'

export default function Rotas() {
    return ( 
        <Routes>
            <Route
                path={constRotas.LISTPRODUCTS}
                element={<ListaProdutos />} 
            />
            <Route
                path={constRotas.HOME}
                element={<Home />} 
            />
            <Route
                path={constRotas.CADPRODUCTS}
                element={<CadastroProdutos />} 
            />
        </Routes>
     );
}
 
