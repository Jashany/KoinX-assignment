import styles from './Price.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Price = ({ coinData }) => {
    const [coinPrice, setCoinPrice] = useState({});
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        if (coinData?.id) {
            setLoading(true); // Start loading
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinData?.id}&vs_currencies=inr,usd&include_24hr_change=true`)
                .then(res => {
                    setCoinPrice(res.data[coinData?.id]); // Access the coin data dynamically
                    setLoading(false); // Stop loading after data is fetched
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false); // Stop loading if an error occurs
                });
        } else {
            setLoading(false); // Stop loading if no coinData is provided
        }
    }, [coinData]);

    if (loading) {
        return (
            <div className={styles.price_main}>
                <div className={styles.loading}>Loading...</div>
            </div>
        );
    }

    // Check if coinPrice is defined and has properties to avoid rendering errors
    const isPriceAvailable = coinPrice && coinPrice?.usd && coinPrice?.inr;
    
    return ( 
        <div className={styles.price_main}>
            <div className={styles.price_coin}>
                <img src={coinData.image?.thumb} alt={coinData.name} />
                <h1>{coinData.name}</h1>
                <p>{coinData.symbol?.toUpperCase()}</p>
                <div className={styles.rank}>
                   <p>
                   Rank #{coinData?.market_cap_rank}
                    </p> 
                </div>
            </div>
            <div className={styles.price_rate}>
                {isPriceAvailable ? (
                    <div>
                        <h1>${coinPrice.usd.toLocaleString()}.00</h1>
                        <p>
                            {coinPrice.usd_24h_change > 0 ? 
                                <span className={styles.green}>+{coinPrice?.usd_24h_change.toFixed(2)}%</span> : 
                                <span className={styles.red}>{coinPrice?.usd_24h_change.toFixed(2)}%</span> } 
                        </p>
                        <p className={styles.hour}>
                            (24H)
                        </p>
                    </div>
                ) : 'Price Information Unavailable'}
                <p>₹{isPriceAvailable ? coinPrice?.inr.toLocaleString() : 'Loading...'}</p>
            </div>
        </div>
    );  
}

export default Price;
