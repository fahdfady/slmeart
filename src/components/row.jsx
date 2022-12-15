import { Link } from "react-router-dom";
import Avatar from "./Avatar"
import Stars from "./Stars";

const Row = ({ title, data }) => {
    return (
        <section className="row">
            <div className="section-title">
                <h1 >
                    { title }
                </h1>
            </div>

            <div className="row-container">

                { data.map((item) => (
                    <Link to={ `/services/${item.id}` } key={ item.id } className="service">
                        <div className="service-info">
                            <div className="service-image">
                                {/* { item.serviceimage === "" ? (<img src={ item.userimage } alt="" />) : (item.serviceimage && <img src={ item.userimage } alt="" />) } */ }
                            </div>

                            <div className="service-title">
                                <h2>
                                    { item.title }
                                </h2>
                            </div>

                            <div className="service-tags">
                                <a href="#0">
                                    lorem ipsum / dolor sit
                                </a>
                            </div>

                            <Stars />

                            <div className="service-price">
                                <p>
                                    starts from <strong> 15.00$ </strong>
                                </p>
                            </div>
                        </div>
                        <Link to='/profile' className="service-user">
                            <div className="user-image">
                                { <Avatar /> }
                            </div>

                            <div className="user-name">
                                <h3>{ item.username }</h3>
                            </div>
                        </Link>
                    </Link>
                )) }

            </div>

            <button className="see-more">
                see more <i class="fa-solid fa-chevron-right"></i>
            </button>
        </section >
    );
}

export default Row;