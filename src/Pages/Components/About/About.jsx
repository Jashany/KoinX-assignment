import { aboutdata } from "../../../data.mjs";
import styles from './About.module.css';
import DOMPurify from 'dompurify';
import { PieChart } from '@mui/x-charts/PieChart';


const About = ({prop}) => {
    const piedata = aboutdata.piechartdata;
    const santizeddesc = DOMPurify.sanitize(prop.description?.en, {ALLOWED_TAGS: []})
    return ( 
        <div>
            <div className={styles.aboutsection}>
            <h1>
                About {prop.name}
            </h1>
            <h4>What is {prop.name}?</h4>
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
                    Already Holding {prop.name}?
                </h1>
                <div className={styles.aboutpostdiv}>
                {aboutdata.aboutpost.map((post, index) => <Aboutpost key={index} post={post} />)}
                </div>
                <p>
                    {aboutdata.description2}
                </p>
            </div>
            <div className={styles.aboutsection}>
                <h1></h1>
                <h4></h4>
                <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
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
 