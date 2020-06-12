import React from 'react';
import Lista from './Lista'

const TablaList = ({datos}) => {

    return ( 
        <table class="table mt-4">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Consecutivo</th>
            <th scope="col">Valor</th>
            <th scope="col">Descripción del
                campo
                seleccionado</th>
            <th scope="col">TRM</th>
          </tr>
        </thead>
        <tbody>

          {datos.map(dato=>(
              <Lista
               key={dato.listaid}
               dato={dato}
               />
          ))}
          
        </tbody>
      </table>
    );
}
 
export default TablaList;