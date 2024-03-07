import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Slider.module.css';
import DOMPurify from 'dompurify';


const Slider = ({prop}) => {
    return ( 
        <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      {prop.map((item, index) => {
          return(
          <SwiperSlide key={index}>
              <Post prop={item.item} />
          </SwiperSlide>
          )
      })}
      </Swiper>
     );
}
 
export default Slider;

const Post = ({prop}) => {
    const pricechange = prop.data.price_change_percentage_24h.inr.toFixed(2);
    const sanitizedPrice = DOMPurify.sanitize(prop.data.price, {ALLOWED_TAGS: []});
    return ( 
        <div className={styles.main_post}>
            <div>
                <img src={prop.thumb} alt="" />
                <h5>
                    {prop.symbol}
                </h5>
                <p>
                    {pricechange}
                </p>
            </div>
            <div>
                <p>{sanitizedPrice}</p>
                {/* <img src={prop.data.sparkline} alt="" /> */}
            </div>
        </div>
     );
}
 