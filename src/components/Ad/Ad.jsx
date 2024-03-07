import style from './Ad.module.css';

const Ad = ({ad}) => {
    return ( 
        <div className={style.main} >
            <h1>
                {ad.title}
            </h1>
            <p>
                {ad.description}
            </p>
            <img src={ad.image} alt={ad.title} />
            <button>
                {ad.button}
            </button>
        </div>
     );
}
 
export default Ad;