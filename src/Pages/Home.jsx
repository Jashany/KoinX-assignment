import Ad from '../components/Ad/Ad.jsx';
import Chart from '../components/Chart/Chart.jsx';
import Trending from './Components/Trending/Trending.jsx';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import axios from 'axios';
import { ad } from '../data.mjs';
import Slider from '../components/Slider/Slider.jsx';
import Price from '../components/Price/Price.jsx';
import Team from './Components/Team/Team.jsx';
import { teamdata } from '../data.mjs';
import About from './Components/About/About.jsx';

const Home = () => {
    const [trending, setTrending] = useState([]);
    const [coin , setCoin] = useState([]);

    useEffect(() => {
        axios.get('/api/v3/search/trending')
        .then(res => {
            setTrending(res.data.coins);
            console.log(res.data.coins);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        axios.get('/api/v3/coins/bitcoin?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false')
        .then(res => {
            setCoin(res.data);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    
    
    
    return ( 
        <div className={styles.main}>
            <p>Cryptocurrencies &gt;&gt; {coin.name} </p>
    <div className={styles.innermain}>
        <div className={styles.left}>
            <Price coinData={coin} />
            <Chart coin={coin.symbol} />
            <About prop={coin} />
            <Team teamdata={teamdata} />
            <Slider prop={trending} />
        </div>
        <div className={styles.right}>
            <Ad ad={ad} />
            <Trending trending={trending} />
        </div>
    </div>
        </div>
     );
}
 
export default Home;

