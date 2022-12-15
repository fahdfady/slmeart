const DeadLine = () => {
    return (
        <section className="dead-line">
            <div className="section-title">
                <h1>
                    time left to deliver
                </h1>
            </div>

            <div class="counter-container">
                <span class="days">27</span>
                <span>:</span>
                <span class="hours">11</span>
                <span>:</span>
                <span class="minutes">19</span>
                <span>:</span>
                <span class="seconds">03</span>
            </div>

            <button>
                deliver now
            </button>
        </section>
    );
}

export default DeadLine;