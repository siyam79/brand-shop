import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const ServiceDetails = () => {

    const [event, setEvent] = useState()
    const { id } = useParams()
    const events = useLoaderData()
    console.log(events);
    useEffect(() => {
        const findEvent = events?.find((event) => event.id == id);
        setEvent(findEvent)
    }, [events, id])

    console.log(event);

    return (
        <div className=" mt-14 ">
            <ServiceCard event={event}></ServiceCard>

        </div>
    );
};

export default ServiceDetails;