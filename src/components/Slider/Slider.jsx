import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Navigation } from 'swiper/modules';


const Slider = ({prop,heading}) => {
    return ( 
    <div className="swiper-main">
            <h1>{heading}</h1>
        <div className="swipermain-inner">
        <Swiper
        spaceBetween={50}
        slidesPerView={5}
        navigation={true} 
        modules={[Navigation]}
      >
      {prop.map((item, index) => {
          return(
          <SwiperSlide key={index}>
              <Post prop={item.item} />
          </SwiperSlide>
          )
      })}
      </Swiper>
        </div>
    </div>
     );
}
 
export default Slider;

const Post = ({prop}) => {
    const pricechange = prop.data.price_change_percentage_24h.inr.toFixed(2);
    const sanitizedPrice = DOMPurify.sanitize(prop.data.price, {ALLOWED_TAGS: []});
    return ( 
        <Link to={`/${prop.id}`} className="link">
        <div className="swipermain-post">
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
                <img src={prop.data?.sparkline} alt="" />
            </div>
        </div>
        </Link>
     );
}
 