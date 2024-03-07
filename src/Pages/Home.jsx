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
import { useParams } from 'react-router-dom';
import Marketdata from './Components/Market/Market.jsx';
import Sentiment from './Components/Sentiments/Sentiments.jsx';

const Home = () => {

    const { id } = useParams();
    const [trending, setTrending] = useState([]);
    const [coin , setCoin] = useState([]);

    useEffect(() => {
        axios.get(('https://api.coingecko.com/api/v3/search/trending'),
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        )
        .then(res => {
            setTrending(res.data?.coins);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        if (id) {
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false`)
            .then(res => {
                setCoin(res.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [id]); 

    
    
    
    return ( 
        <div className={styles.main}>
            <p>Cryptocurrencies &gt;&gt; {coin?.name} </p>
    <div className={styles.innermain}>
        <div className={styles.left}>
            <Price coinData={coin} />
            <Chart coin={coin} />
            <Marketdata coin={coin?.market_data} />
            <Sentiment />
            <About prop={coin} />
            <Team teamdata={teamdata} />
        </div>
        <div className={styles.right}>
            <Ad ad={ad} />
            <Trending trending={trending} />
        </div>
    </div>
    <div className={styles.swipers}>
        <Slider prop={trending} heading={"You may Also Like"} option={1} />
        <Slider prop={trending} heading={"Trending"} option={1}/>
        
    </div>
        </div>
     );
}
 
export default Home;

