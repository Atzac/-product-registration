import React from 'react';

export default function Alert(props) {

    if (props.allOk == true) {
    return ( 
        <div className="alert alert-dismissible alert-success">
           <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
           <strong>Sucesso!</strong> O produto foi cadastrado.
           <a href="#" className="alert-link">
           </a>.
        </div>
     )
    } else if (props.allOk == false) {
        return ( 
            <div class="alert alert-dismissible alert-danger">
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
              <strong>Erro! </strong> 
              <a href="#" class="alert-link">
               Algo deu errado,
              </a> tente novamente
            </div>
         )
        } else if (props.allOk == null) {
            return ( 
                <></>
             )
        }
}
