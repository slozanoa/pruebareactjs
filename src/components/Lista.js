import React from 'react';

const Lista = ({dato}) => {
    const {listaid,listatexto,trm,valor}= dato;
    return (

        <tr>
            <th scope="row">{listaid}</th>
            <td>{valor}</td>
            <td>{listatexto}</td>
            <td>{trm}</td>
          </tr>
      );
}
 
export default Lista;