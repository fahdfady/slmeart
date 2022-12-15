import Banner from "../components/Banner"
import Recommended from "../components/Recommended";
import Row from "../components/row";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
    const { data: recommendeds, isPending, error } = useFetch("recommended");
    const { data: popular } = useFetch("service/?tag=popular");
    const { data: recent } = useFetch("service/?tag=recent");


    return (
        <>

            { error && <div>error</div> }

            { isPending && <div>loading..</div> }

            <Banner />
            
            { popular && <Row data={ popular } title="popular" /> }

            { recent && <Row data={ recent } title="recent" /> }

            { recommendeds && <Recommended recommendeds={ recommendeds } /> }
        </>
    );
}

export default Home;