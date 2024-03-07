import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Navigation } from 'swiper/modules';


const Slider = ({prop,heading,option}) => {
    return ( 
        <div className="swiper-main">
            {option === 1 ? <h1>{heading}</h1> : null}
            
            <div className="swipermain-inner">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={option === 2 ? 1 : 1}
                    navigation={true} 
                    modules={[Navigation]}
                    
                    breakpoints={{
                        440: {
                            slidesPerView: option === 2 ? 1 : 2,
                            spaceBetween: option === 2 ? 20 : 40,
                        },
                        768: {
                            slidesPerView: option === 2 ? 1 : 3,
                            spaceBetween: option === 2 ? 80 : 40,
                        },
                        1024: {
                            slidesPerView: option === 2 ? 2 : 5,
                            spaceBetween: option === 2 ? 80 : 50,
                        },
                    }}
                >
                    {prop.map((item, index) => {
                        return(
                            <SwiperSlide key={index}>
                                {option === 1 ? <Post prop={item.item} /> : <Secondpost prop={item} />}
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

const Secondpost = ({prop}) => {
    return ( 
        <div className='secondpost'>
            <img src={prop.image} alt="" />
            <div>
               <h4>
                     {prop.title}
               </h4>
               <p>
                     {prop.description}
               </p>
            </div>
        </div>
     );
}


 