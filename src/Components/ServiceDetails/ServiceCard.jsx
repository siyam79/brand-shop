import PropTypes from 'prop-types';

const ServiceCard = ({ event }) => {

    const { title, image , price } = event || {};
    console.log(event);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="lg:w-1/2 w-full mt-14  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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