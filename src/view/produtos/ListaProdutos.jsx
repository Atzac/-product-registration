import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/cadProdService';

export default function ListaProdutos() {
    const [products, setProducts] = useState([])

    useEffect(() => {
       setProducts(() => getProducts())
    }, [])


    return (
        <div className="card border-secondary mb-3">
          <div className="card-header">Produtos</div>
          
            <div className="card-body">
            <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
                <th scope="col">Fornecedor</th>
                <th scope="col">Descrição</th>
            </tr>
            </thead>
            <tbody>
                {
                products.map( (product, index) => {
                return (
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.preco}</td>
                        <td>{product.fornecedor}</td>
                        <td>{product.desc}</td>
                    </tr>
                )
                })
                }
            </tbody>
            </table>
            </div>
        </div>
    )
}