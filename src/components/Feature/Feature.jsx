

import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({features}) => {
    return (
        <div className='pl-'>
            {
                features.map((feature,index) => <p className='flex items-center gap-2'  key={index}><AiFillCheckCircle className='text-green-500'/> {feature}</p>)
            }
        </div>
    );
};

Feature.propTypes = {
    features: PropTypes.string
};

export default Feature;