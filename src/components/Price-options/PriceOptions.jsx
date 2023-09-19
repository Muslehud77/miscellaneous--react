
import PriceOption from '../Price-option/PriceOption';

const PriceOptions = () => {

 const gymPriceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Limited group fitness classes",
        "Free towel service",
        "Monthly fitness assessment"
      ],
      price: 50.00
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
        "Free towel service",
        "Monthly fitness assessment"
      ],
      price: 75.00
    },
    {
      id: 3,
      name: "VIP Membership",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "Access to sauna and steam room",
        "Personal trainer sessions (2 sessions/month)",
        "Free towel service",
        "Monthly fitness assessment",
        "Nutritional consultation"
      ],
      price: 100.00
    }
];




    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-6xl text-center py-6'>Best prices in the town</h2>
           <div className='grid lg:grid-cols-3 gap-6'>
             {
                gymPriceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;