import React, { useState } from 'react';
import { saveProducts } from '../../services/cadProdService';

const initial = {
    nome: "",
    id: 0,
    preco: 0,
    fornecedor: "",
    desc: ""
}

export default function CadastroProdutos() {
    const [cadValues, setCadValues] = useState(initial)

    function handleChange(e) {
       const { name, value } = e.target; //destruturando name e value do target
       setCadValues(
           {...cadValues, [name]: value} //destructuring
       )
    }
    function onSubmit(e) {
        saveProducts(cadValues)
        clear()
    }
    const clear = () => {
        setCadValues(initial)
    }


    return (
        <>
        <div className="card border-secondary mb-3">
          <div className="card-header">Cadastrar Produtos</div>
            <div className="card-body">

              <div className="row">
                 <div className="col-md-6">
                     <div className="form-group">
                         <label>Nome: *</label>
                         <input 
                           type="text" 
                           name="nome"
                           value={cadValues.nome} 
                           className="form-control"
                           onChange={handleChange} 
                         />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="form-group">
                            <label>ID: *</label>
                            <input 
                              type="text" 
                              name="id"
                              value={cadValues.id} 
                              className="form-control" 
                              onChange={handleChange}
                            />
                         </div>
                     </div>
              </div>
              <div className="row">
                 <div className="col-md-6">
                     <div className="form-group">
                         <label>Preço: *</label>
                         <input 
                           type="text" 
                           name="preco"
                           value={cadValues.preco} 
                           className="form-control" 
                           onChange={handleChange} 
                         />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="form-group">
                            <label>Fornecedor: *</label>
                            <input 
                              type="text" 
                              name="fornecedor"
                              value={cadValues.fornecedor} 
                              className="form-control" 
                              onChange={handleChange} 
                            />
                         </div>
                     </div>
              </div>

              <div className="row">                
                 <div className="col-md-12">
                    <div className="form-group">
                        <label>Descrição: *</label>
                        <textarea 
                          className="form-control" 
                          name="desc"
                          value={cadValues.desc} 
                          onChange={handleChange} 
                        />
                    </div>
                 </div>
              </div>
              

              <div className="row mt-3">                
                <div className="col-md-1">
                    <button className="btn btn-outline-success" onClick={onSubmit}>Salvar</button> 
                </div>
                <div className="col-md-1">
                    <button className="btn btn-outline-dark" onClick={clear}>Limpar</button> 
                </div>
                <div className="col-md-1">
                    <button className="btn btn-outline-danger">Cancelar</button> 
                </div>
              </div>
            </div>
        </div>
        </>
    )
}