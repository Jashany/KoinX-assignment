import { aboutdata } from "../../../data.mjs";
import styles from './About.module.css';
import DOMPurify from 'dompurify';
import { Chart } from "react-google-charts";


const About = ({prop}) => {
    const options = {
        pieHole: 0.7,
        pieSliceText: 'none',
        slices: {
            0: { color: '#0082fe' },
            1: { color: '#faa002' }
          }

      };
    const piedata = aboutdata.piechartdata;
    const santizeddesc = DOMPurify.sanitize(prop?.description?.en, {ALLOWED_TAGS: []})
    return ( 
        <div>
            <div className={styles.aboutsection}>
            <h1>
                About {prop?.name}
            </h1>
            <h4>What is {prop?.name}?</h4>
            <p>
                {santizeddesc}
            </p>
            <h4>
                {aboutdata.heading}
            </h4>
            <p>
                {aboutdata.description}
            </p>
            </div>
            <div className={styles.aboutsection}>
                <h1>
                    Already Holding {prop?.name}?
                </h1>
                <div className={styles.aboutpostdiv}>
                {aboutdata.aboutpost.map((post, index) => <Aboutpost key={index} post={post} />)}
                </div>
                <p>
                    {aboutdata.description2}
                </p>
            </div>
            <div className={styles.aboutsection}>
                <h1>{aboutdata.token.title}</h1>
                <h4>{aboutdata.token.undertitle}</h4>
                <div className={styles.chart}>
                <Chart

                    chartType="PieChart"
                    width="100%"
                    height="200px"
                    data={piedata}
                    options={options}
                />
                </div>
                <p>
                    {aboutdata.token.description}
                </p>
            </div>
        </div>
     );
}
 
export default About;


const Aboutpost = ({post}) => {
    return ( 
        <div className={styles.aboutpost}>
            <img src={post.image} alt="" />
            <div>
                <h3>
                    {post.title}
                </h3>
                <button>
                    {post.button}
                </button>
            </div>
        </div>
     );
}
 