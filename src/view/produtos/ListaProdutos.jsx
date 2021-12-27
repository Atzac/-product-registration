import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { getProducts, delProduct } from '../../services/cadProdService';
import Card from '../../componentes/card/Card';
import * as constRotas from '../../constRotas'
import TabelaProdutos from './TabelaProdutos';

export default function ListaProdutos() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
       setProducts(() => getProducts())
    }, [])

    const redirectEdit = (id) => {
        navigate(`${constRotas.CADPRODUCTS}/${id}`);
    }

    const del = (id) => {
        delProduct(id)
        setProducts(() => getProducts())
    }

    return (
        <Card header={<h1>Produtos</h1>}>
            <TabelaProdutos 
               products={products}
               redirectEdit={redirectEdit}
               del={del}
            />
        </Card>
    )
}