import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Service = () => {

    const { serviceID } = useParams();
    const { data: service, isPending, error } = useFetch(`service?id=${serviceID}`);

    return (
        <>

            { error && <div>error</div> }

            { isPending && <div>loading..</div> }

            { service && <div className="service">
                jhhj
                { service.title }
            </div> }
        </>
    );
}

export default Service;