import { useState } from "react";

const HolamMundo = () => {


    const [texto, setTexto] = useState('')

    return (  
        <>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <label>{texto}</label>  
            
        </>
    );
}
 
export default HolamMundo;