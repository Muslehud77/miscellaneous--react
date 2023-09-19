
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-blue-200 rounded-lg p-5 flex flex-col'>
           <h2 className='text-center'>
             <span className='text-7xl font-bold'>{price}$</span>
            <span className='text-3xl'>/mon</span>
           </h2>
            <h4 className='text-3xl text-center my-3'>{name}</h4>
            <div className='flex-grow p-2'>
                <Feature features={features} ></Feature>
            </div>
            <button className='btn bg-cyan-500 border-none text-white w-full hover:bg-cyan-600'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;