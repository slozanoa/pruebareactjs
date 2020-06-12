import React, {Fragment,useState} from 'react';

const Campo = ({nombreCampo,guardarValor}) => {
    const [numero,actualizarNumero] = useState({
        value:0
    });
    const actualizarState=(e)=>{
        actualizarNumero({
            ...numero,
            [e.target.name]:e.target.value
        })
    }

    const {valor}=numero;
    
    const addSeparatorsNF=(nStr, inD, outD, sep)=>
{
	nStr += '';
	var dpos = nStr.indexOf(inD);
	var nStrEnd = '';
	if (dpos !== -1) {
		nStrEnd = outD + nStr.substring(dpos + 1, nStr.length);
		nStr = nStr.substring(0, dpos);
	}
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(nStr)) {
		nStr = nStr.replace(rgx, '$1' + sep + '$2');
	}
	return nStr + nStrEnd;
}
    var valorlim = addSeparatorsNF(valor, '.',',','.');
    guardarValor(valorlim);
    

    return ( 
        
        <Fragment>
            <div>
                <div className="form-group">
                <label>{nombreCampo}</label>
                <input 
                    type="text"
                    name="valor"
                    className="form-control"
                    onChange={actualizarState}
                    value={valor}
                />
                </div> 
            </div>
        </Fragment>
     );
}
 
export default Campo;