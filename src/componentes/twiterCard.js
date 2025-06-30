import { useState } from "react";

const TwiterCard = ({ children, userName, inicialisFollowing }) => {

    const [boton, setBoton] = useState(inicialisFollowing);
    const text = boton ? 'Seguir' : 'Siguiendo'

    const altNombre = `El avatar de ${userName}`

    const handleClick = () => {
        setBoton(!boton)
    }

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
                <button className='tw-followCard-button' onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}
export default TwiterCard;