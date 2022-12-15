import Stars from "../components/Stars";

const Payment = () => {
    return (
        <>
            <section className="checkout">

                <div className="services-container">
                    <div className="section-title">
                        <h1>customize your package</h1>
                    </div>

                    <div className="service">
                        <img src="https://uploads-ssl.webflow.com/5de2db6d3719a1e2f3e4454c/5de869c61338086eb26df3c9_different-types-of-logos.jpg" alt="" />

                        <div className="service-info">
                            <h3 className="service-title">
                                i will design an outstanding logo
                            </h3>

                            <Stars />
                        </div>

                        <div className="quantity">
                            <label>Qty</label>
                            <select>
                                <option value="1">1</option>

                                <option value="2">2</option>

                                <option value="3">3</option>

                                <option value="4">4</option>

                            </select>
                        </div>

                        <p className="price">
                            45$
                        </p>
                    </div>

                    <hr />
                </div>

                <div className="summary-container">
                    <div className="section-title">
                        <h1>summary</h1>
                    </div>

                    <ul>
                        <li>subtotal</li>
                        <li>$45</li>
                        <li>service fee</li>
                        <li>$2.25</li>
                        <hr />
                        <li>total</li>
                        <li>47.25</li>
                        <li>delivery time</li>
                        <li>2 days</li>
                    </ul>

                    <button>order now</button>
                </div>
            </section>
        </>
    );
}

export default Payment;