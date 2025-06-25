const Datos = ({tipo, etiqueta}) => {
    return ( 
      <div>
        <label>INGRESE {etiqueta}</label>
        <input
            type = {tipo}
        />
      </div>
    );
}
 
export default Datos;
