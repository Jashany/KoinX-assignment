import styles from './Trending.module.css';
import { Link } from 'react-router-dom';
const Trending = ({trending}) => {
    
    return ( 
        <div className={styles.maintrend}>
            <h1>Trending Coins (24h)</h1>
            <div className={styles.trending}>
                {trending?.slice(0,3).map(item => <TrendingPost key={item.item?.id} item={item.item} />)}
            </div>
        </div>
     );
}
 
export default Trending;

const TrendingPost = ({item}) => {
    const pricechange = item?.data?.price_change_percentage_24h.inr.toFixed(2);
    return ( 
        <Link to={`/${item?.id}` } className={styles.link}>
        <div className={styles.post}>
            <div className={styles.innerdiv}>
            <img src={item?.thumb} alt="" />
            <p>{item?.name}({item?.symbol})</p>
            </div>
            <p>{pricechange}%</p>
        </div>
        </Link>
     );
}
 