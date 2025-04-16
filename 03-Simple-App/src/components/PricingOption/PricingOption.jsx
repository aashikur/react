import { TicketCheck } from 'lucide-react';
import React, { use } from 'react';

const PricingOption = ({pricingPromise}) => {
    
    const PriceingData = use(pricingPromise)
  
    return (
        <div>
            <div className="mt-5 card mx-auto w-4/5 grid gap-x-30 gap-y-10 lg:grid-cols-3"> 

                {
                    PriceingData.map((card,index) => 
                    
                <div className="single-card">
                    <div>
                    <span className='badge badge-warning text-white '>1 month</span>
                    <h1 className='text-2xl'>{card.plan_name}</h1> 
                    <p>$254/month</p>
                    
                    </div> 
                    <ul className='mt-3'>
                        {
                            card.features.map(feathers => 
                            <li className='flex gap-2 mb-1'>
                                <TicketCheck className='text-green-700'></TicketCheck> 
                                 {feathers}</li>)
                        }
                    </ul> 
                    <div className='mt-5'>
                        <button className='btn btn-secondary w-full'>Subscribe</button>
                    </div>
                </div>    
                    
                    )
                }

            </div>
        </div>
    );
};

export default PricingOption;