// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Avatar from './Avatar';

const Recommended = ({ recommendeds }) => {

    return (
        <section className="recommended">
            <div className="section-title">
                <h1>recommended</h1>
            </div>

            <div className="recommended-container">

                <Swiper
                    modules={ [Navigation] }
                    loop={ true }
                    slidesPerView={ 3 }
                    navigation>
                    { recommendeds.map((recommended) => (
                        <SwiperSlide>
                            <div className="user" key={ recommended.id }>
                                <div className="user-info">
                                    <div className="user-image">
                                      <Avatar />
                                    </div>
                                    <h3 className="user-name">
                                        { recommended.name }
                                    </h3>
                                </div>

                                <div className="user-stats">
                                    <span>sales</span>
                                    <span>{ recommended.sales }</span>

                                    <span>review</span>
                                    <span className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <span>(45)</span>
                                    </span>
                                </div>

                                <button>buy now</button>

                            </div>
                        </SwiperSlide>
                    )) }
                </Swiper>

            </div>
        </section>
    );
}

export default Recommended;