const CreatorsArtists = () => {
    return (
        <section className="creatorsandasrtists content-section">
            <div className="section-title">
                <h1>
                    creators & artists
                </h1>
            </div>


            <div className="profile-container">

                <div className="verification-status">
                    <span>verification status</span>
                    <span>
                        <i class="fa-solid fa-circle-minus"></i>
                        unverified
                    </span>
                </div>

                <div className="status">
                    <span>status</span>
                    <span>
                        <select>
                            <option value="available">Available</option>
                            <option value="unavailable">unavailable</option>
                        </select>
                    </span>
                </div>

                <div className="donation">
                    <span>donation button</span>
                    <span>
                        <div className="on-off-button">
                            <button className="on">on</button>
                            <button className="off">off</button>
                        </div>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default CreatorsArtists;