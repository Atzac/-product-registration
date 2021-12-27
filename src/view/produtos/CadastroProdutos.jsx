import React, { useEffect, useState } from 'react';
import { getProducts, saveProducts } from '../../services/cadProdService';
import { useParams } from 'react-router-dom';
import Alert from '../../componentes/alert/Alert';
import Card from '../../componentes/card/Card';

const initial = {
    nome: "",
    id: 0,
    preco: 0,
    fornecedor: "",
    desc: ""
}

export default function CadastroProdutos() {
    const [cadValues, setCadValues] = useState(initial)
    const [allOk, setAllOk] = useState(null)
    const [errors, setErrors] = useState([])
    const [update, setUpdate] = useState(false)
    const { id } = useParams() 

    useEffect(() => {
      if(id) {
        setUpdate(true)
        const response = getProducts().filter( product => product.id === id) //filtra produtos cujo id = id do parametro
        if (response.length === 1) { 
           const data = response[0]
           setCadValues({...data})
        }
      }
    }, []) //ao carregar a tela, verifica se tem (id) como parametro na url e puxa os dados caso true

    function handleChange(e) {
       const { name, value } = e.target; //destruturando name e value do target
       setCadValues(
           {...cadValues, [name]: value} //destructuring
       )
    }

    async function onSubmit(e) {
        try {
          await saveProducts(cadValues)
          setAllOk(true)
        } catch(error) {
          console.log(error)
          setErrors(() => errors.push(error.errors))
          setAllOk(false)
        }
        clear()
    }

    const clear = () => {
        setCadValues(initial)
    }

    return (
        <Card header={update? <h1>Editar Produto</h1>: <h1>Cadastrar Produtos</h1>}>
             <Alert allOk={allOk}/>
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
                           required
                         />
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="form-group">
                            <label>ID: *</label>
                            <input 
                              type="text" 
                              name="id"
                              disabled={update}
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
              </div>
        </Card>
    )
}