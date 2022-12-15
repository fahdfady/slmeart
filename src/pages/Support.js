import Logo from "../components/Logo";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Support = () => {
    return (
        <section className="support">
            <div className="support-header">
                <Logo />

                <h1>support us !</h1>
                <p>help us fund the development and watch the platform grow together</p>
            </div>

            <div className="support-body">
                <div className="section-title">
                    <h2>
                        supporters
                    </h2>

                    <p>thank you for supporting our community</p>
                </div>

                <div className="donuts-container">
                    <div className="donut">
                        <img src="https://www.resizepixel.com/Image/tgotdg2nxj/Preview/photo_5800842362975533412_x__1_-.png?v=f4f9582f-3977-4ea7-8c5f-a5d11c15978d" alt="" />
                    </div>
                    <div className="donut">
                        <img src="https://www.resizepixel.com/Image/e25ldserso/Preview/photo_5800842362975533412_x__2_-.png?v=7eadc0fb-3511-4c21-9dd7-fd86062abad7" alt="" />
                    </div>
                    <div className="donut">
                        <img src="https://www.resizepixel.com/Image/7e3nbwcsxo/Preview/photo_5800842362975533412_x__3_-.png?v=84b42b1f-2ac2-4b58-8aa1-1e6114cb36a3" alt="" />
                    </div>
                    <div className="donut">
                        <img src="https://www.resizepixel.com/Image/tgotdg2nxj/Preview/photo_5800842362975533412_x__1_-.png?v=f4f9582f-3977-4ea7-8c5f-a5d11c15978d" alt="" />
                    </div>
                </div>

                <p>buy some donut for <span> developers </span></p>
            </div>


            <div className="donuts-select">
                <form>
                    <div className="swiper-container">
                        <Swiper
                            modules={ [Navigation] }
                            loop={ true }
                            slidesPerView={ 1 }
                            navigation
                        >
                            <SwiperSlide>
                                <div className="donut">
                                    <img src="https://www.resizepixel.com/Image/tgotdg2nxj/Preview/photo_5800842362975533412_x__1_-.png?v=f4f9582f-3977-4ea7-8c5f-a5d11c15978d" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="donut">
                                    <img src="https://www.resizepixel.com/Image/e25ldserso/Preview/photo_5800842362975533412_x__2_-.png?v=7eadc0fb-3511-4c21-9dd7-fd86062abad7" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="donut">
                                    <img src="https://www.resizepixel.com/Image/7e3nbwcsxo/Preview/photo_5800842362975533412_x__3_-.png?v=84b42b1f-2ac2-4b58-8aa1-1e6114cb36a3" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="donut">
                                    <img src="https://www.resizepixel.com/Image/tgotdg2nxj/Preview/photo_5800842362975533412_x__1_-.png?v=f4f9582f-3977-4ea7-8c5f-a5d11c15978d" alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="text donate">
                        <input type="text" value="45$" />
                    </div>

                    <div className="text donate-message">
                        <input type="text" placeholder="enter message for developers" />
                    </div>

                    <button>buy donut</button>
                </form>
            </div>
        </section>
    );
}

export default Support;