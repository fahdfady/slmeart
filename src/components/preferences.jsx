const Preferences = () => {
    return (
        <section className="preferences content-section">
            <div className="section-title">
                <h1>
                    preferences
                </h1>
            </div>

            <div className="profile-container">

                <div className="language">
                    <span>
                        <select>
                            <option value="">select language</option>
                            <option value="english">English</option>
                        </select>
                    </span>

                </div>

                <div className="push-notifications">
                    <span>

                        enable push notifications
                    </span>
                </div>

                <div className="email-preferences">
                    <span>email preferences <small> <a href="#0">show </a> </small></span>
                </div>
            </div>

        </section>
    );
}

export default Preferences;