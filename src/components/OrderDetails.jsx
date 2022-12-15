const OrderDetails = () => {
    return (
        <section className="order-details">
            <div className="section-title">
                <h1>
                    order details
                </h1>
            </div>

            <div className="order-container">
                <div className="order-info-container">
                    <div className="order-image">
                        <img src="https://i.pinimg.com/736x/a2/30/2c/a2302c5aa0027ec1b178afd1c1f3c237.jpg" alt="order thumbnail" />
                    </div>
                    <div className="order-info">
                        <p className="order-title">
                            i will draw for you
                        </p>
                        <div className="order-state">
                            <span className="in-progress">
                                in progress
                            </span>
                        </div>
                    </div>
                    <ul className="order-data">
                        <li>
                            orderd by
                        </li>
                        <li>
                            Diane Chiang
                        </li>
                        <li>
                            Delivery date
                        </li>
                        <li>
                            Nov 15, 8:38
                        </li>
                        <li>
                            total price
                        </li>
                        <li>
                            25$
                        </li>
                    </ul>
                </div>

                <hr />

                <div className="order-description">
                    <div className="section-title">
                        <h1>work description</h1>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias maiores voluptas dolorum reprehenderit ipsa ad recusandae tempore ut debitis dicta suscipit nam, consequatur, illum velit enim? Eligendi, incidunt non?
                    </p>
                </div>
            </div>
        </section>
    );
}

export default OrderDetails;