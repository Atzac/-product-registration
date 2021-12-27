import React from 'react';

export default function TabelaProdutos(props) {
    return (
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
                props.products.map( (product, index) => {
                return (
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.preco}</td>
                        <td>{product.fornecedor}</td>
                        <td>{product.desc}</td>
                        <td> 
                            <button 
                               className="btn btn-outline-primary"
                               onClick={() => props.redirectEdit(product.id)}
                            > 
                               Editar
                            </button>
                        </td>
                        <td> 
                            <button 
                               className="btn btn-outline-danger"
                               onClick={() => props.del(product.id)}
                            >
                               Excluir 
                            </button>
                        </td>
                    </tr>
                )
                })
                }
            </tbody>
        </table>
    )
}