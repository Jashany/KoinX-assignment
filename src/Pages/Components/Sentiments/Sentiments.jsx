import Slider from '../../../components/Slider/Slider';
import { estimates } from '../../../data.mjs';
import Styles from './Sentiments.module.css'
import { sliderdata } from '../../../data.mjs';
const Sentiment = () => {
    console.log(estimates)
    return ( 
        <div className={Styles.sentimentsmain}>
            <h1>
                Sentiment
            </h1>
            <div className={Styles.keyevent}>
                <h3>Key Events</h3>
                <Slider prop={sliderdata} heading="" option={2} />
            </div>
            <div className={Styles.estimates}>
                <h3>Analyst Estimates</h3>
                <div className={Styles.innerestimates}>
                    <h1 style={{color:`${estimates[0].color}`}}>
                        {estimates[0].percentage}%
                    </h1>
                    <div>
                        {estimates.map((estimate, index) => {
                            return (
                                <div key={index} className={Styles.estimate}>
                                    <h3>{estimate.label}</h3>
                                    <div style={{width:`${estimate.percentage}%`,backgroundColor:`${estimate.color}`}}></div>
                                    <p>{estimate.percentage}%</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Sentiment;