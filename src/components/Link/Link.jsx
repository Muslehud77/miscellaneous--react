
import PropTypes from 'prop-types';

const Link = ({route}) => {
   
    return (
        <div className='h-10'>
            <div className='hover:bg-cyan-100 duration-300 hover:p-3 hover:cursor-pointer rounded-xl px-3'>
            <li><a href={route.path}>{route.name}</a> </li>
        </div>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
};

export default Link;