
// import PropTypes from 'prop-types';
import Link from '../Link/Link';

import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react';

const SelfMadeNav = () => {
    const routes = [{ path: '/', name: 'Home', id: 'home' },
   { path: '/about', name: 'About', id: 'about' },
  { path: '/products', name: 'Products', id: 'products' },
   { path: '/contact', name: 'Contact', id: 'contact' },
   { path: '/dashboard', name: 'Dashboard', id: 'dashboard', private: true }]
 
   const [open,setOpen] = useState(false)

    return (
        
        <nav className='p-1'>
           <div className='md:hidden w-10 h-10  '  >
            <Hamburger className='text-blue-500' toggled={open} toggle={setOpen} />
           
           </div>
           <ul className={`pt-1 md:flex duration-500 justify-center gap-5 absolute md:static bg-white md:bg-base-100 md:rounded-none md:shadow-none rounded-xl shadow-xl ${open? 'left-3' : '-left-56'}`}>
             {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

SelfMadeNav.propTypes = {
    
};

export default SelfMadeNav;