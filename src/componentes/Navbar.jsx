import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Produtos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                        <span className="visually-hidden">(current)</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Cadastrar</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Consultar</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;