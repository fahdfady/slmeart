const UpdatePassword = () => {
    return (
        <section className="updatepassword content-section">
            <div className="section-title">
                <h2>
                    update password
                </h2>

                <div className="profile-container">
                    <form>

                        <div className="text">
                            <input type="password" placeholder="Old password" required />
                        </div>

                        <div className="text">
                            <input type="password" placeholder="New password" required />
                        </div>

                        <div className="text">
                            <input type="password" placeholder="Cionfirm password" required />
                        </div>

                        <button> submit </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default UpdatePassword;