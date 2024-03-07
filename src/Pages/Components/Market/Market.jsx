import PerformanceBar from '../../../components/Performancebar/PerformanceBar';
import styles from './Market.module.css';
const Marketdata = ({coin}) => {
    return ( 
        <div className={styles.market}>
            <h1>Performance</h1>
            <div className={styles.bar}>
            <PerformanceBar low={coin?.low_24h?.usd} high={coin?.high_24h?.usd} current={coin?.current_price?.usd} />
            <PerformanceBar low={coin?.low_24h?.usd} high={coin?.high_24h?.usd} current={coin?.current_price?.usd} />
            </div>
            <h3>Fundamentals</h3>
            <div className={styles.fundamental}>
                <div>
                    <div>
                        <p>
                            Price
                        </p>
                        <p>
                            24h low / 24h high
                        </p>
                        <p>
                            Trading volume
                        </p>
                        <p>
                            Market Cap Rank
                        </p>
                    </div>
                    <div>
                        <p>
                           ${coin?.current_price?.usd}
                        </p>
                        <p>
                            ${coin?.low_24h?.usd} / ${coin?.high_24h?.usd}
                        </p>
                        <p>
                            ${coin?.total_volume?.usd}
                        </p>
                        <p>
                            #{coin?.market_cap_rank}
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            Market Cap
                        </p>
                        <p>
                            All time low
                        </p>
                        <p>
                            All time high
                        </p>
                        <p>
                            Circulating Supply
                        </p>
                    </div>
                    <div>
                        <p>
                            ${coin?.market_cap?.usd}
                        </p>
                        <p>
                            ${coin?.atl?.usd}
                        </p>
                        <p>
                            ${coin?.ath?.usd}
                        </p>
                        <p>
                            {coin?.circulating_supply}
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Marketdata;