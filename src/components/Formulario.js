import React,{Fragment,useState} from 'react';
import Campo from './Campo';
import axios from'axios';

const Formulario = ({crearDatos}) => {
    //VALORES DE LOS CAMPOS
    const [Valor,guardarValor]=useState();
    const [listaid,actualizarListaId] = useState();
    const [listatexto,actualizarListaTexto] = useState();
    const [trm,actualizarTRM] =useState();
    
    //state de error
    const [error, actualizarerror]=useState(false);
    const handleChange = e =>{
        actualizarListaId(e.target.selectedIndex);
        actualizarListaTexto(e.target.value);
        
    }
    const obtenerdatos = async()=>{
        const url = "https://httpbin.org/post";
        const resultado = await axios.post(url,{
            valor:Valor,
            listaid:listaid,
            listatexto:listatexto,
            trm:trm
        });
        
        crearDatos(JSON.parse(resultado.data.data));
        
    }
    //cuando el usuario de click
    const handleSubmit=e=>{
        e.preventDefault();
        if(Valor==='undefined' || trm==='undefined' || listatexto==='' || listatexto===undefined){
            actualizarerror(true);
            return;
        }
        actualizarerror(false);
        obtenerdatos();
       
        //llamar el api
       
    } 
    const limpiar=e=>{
        actualizarTRM("")
        actualizarListaTexto("");
        guardarValor("");
     }

    return (  
        <Fragment>
            <form  onSubmit={handleSubmit} className="mt-3">
                {error ? (<p className="alert alert-danger">Complete todos los campos</p>):null}
                <Campo 
                nombreCampo="Valor"
                guardarValor={guardarValor}
                
                />
                <div>
                <div class="form-group">
                    <label>Lista</label>
                    <select class="form-control" 
                    name="lista"
                    id="lista"
                    onChange={handleChange}
                    value={listatexto}
                    >
                    <option value="" selected>Seleccione</option>
                        <option id="1">Prueba 1</option>
                        <option id="2">Prueba 2</option>
                        <option id="3">Prueba 3</option>
                    </select>
                </div>
                
            </div>
            <div>
            <Campo 
                nombreCampo="TRM"
                guardarValor={actualizarTRM}
                
                />
            </div>
            <div class="row">
            <div>
                <input 
                    type="submit"
                    value="Guardar"
                    className="btn btn-primary col"
                />
            </div>
            <div>
                <input 
                    className="btn btn-secondary col ml-4"
                    value="limpiar Formulario"
                    onClick={()=>limpiar()}
                />
            </div>
            </div>
            </form>
        </Fragment>
    );
}
 
export default Formulario;