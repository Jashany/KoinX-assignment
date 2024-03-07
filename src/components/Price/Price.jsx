    import styles from './Price.module.css';
    import { useState, useEffect } from 'react';
    import axios from 'axios';

    const Price = ({ coinData }) => {
        const [coinPrice, setCoinPrice] = useState({});
    
        useEffect(() => {
            axios.get(`/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true`)
                .then(data => {
                    setCoinPrice(data);
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                    
                });
        }, []);
    
        
    
        return ( 
            <div className={styles.price_main}>
                <div className={styles.price_coin}>
                    <h1>{coinData.name}</h1>
                    <p>{coinData.symbol}</p>
                    <div className={styles.rank}>
                        Rank # {/* Adjusted assuming rank is part of coinData */}
                    </div>
                </div>
                <div className={styles.price_rate}>
                    USD: {coinPrice.inr} {/* Adjusted based on assumed response structure */}
                </div>
            </div>
        );
    }
    
    export default Price;