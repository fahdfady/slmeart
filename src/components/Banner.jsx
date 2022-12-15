const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-container"></div>
            <div className="layer">

                <form className="search-container">
                    <div className="text">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input placeholder="Type something..." type="search" />
                        <button>Search</button>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default Banner;