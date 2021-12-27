import React from 'react';

export default function Card(props) {
    return (
        <div className="card border-secondary mb-3">

          <div className="card-header">
            {props.header}
          </div>
          <div className="card-body">
            {props.children}
          </div>      

        </div>
    )
}