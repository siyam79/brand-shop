import PropTypes from 'prop-types';

const ServiceCard = ({ event }) => {

    const { title, image ,details} = event || {};
    console.log(event);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="py-6 font-semibold  "> {details} </p>
                        <button className="btn btn-primary"> Arrange Now  </button>
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