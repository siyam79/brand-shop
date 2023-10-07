import PropTypes from 'prop-types';

const ServiceCard = ({ event }) => {
    // const {title} = event;
    const { title, image } = event || {};
    console.log(event);
    return (
        <div>
            <h1> {title} </h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    event: PropTypes.object
}

export default ServiceCard;