import { useState } from "react";

const TwiterCard = ({ children, name, isfollower, userName }) => {



    const [boton, setBoton] = useState(isfollower);
    const text = isfollower ? 'Siguiendo' : 'Seguir'

    const altNombre = `El avatar de ${name}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt={altNombre}
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button' onClick={() => setBoton(!boton)}>
                    {boton && <>{text}</>}
                </button>
            </aside>
        </article>
    );
}
export default TwiterCard;