import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router';
import useBooking from '../../hooks/useBooking';

const ViewDetails = () => {
    const [data, setData] = useState([])
    
    const id = useParams();
    // console.log(id.id);
    // console.log(data);

    const {addBooking} = useBooking() 

    

    useEffect(() => {
        fetch('/Data.json').then(r => r.json()).then(d => setData(d))
    }, []) 

    const item = data.find(d => d.id == id.id)
    if (!item) {
        return <div className='h-[300px] text-center flex items-center justify-center'>Loading...</div>;
    } 


    const handleBookAppointment  = (item) => { 
        
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Your appointment has been booked!",
            showConfirmButton: false,
            timer: 1000
        });

        // console.log(item.id) 
        // alert(item.id + ' Added') 
        addBooking(item)
    }

    // console.log(item.name)

    return (
        <div>

            <div className="rounded-2xl my-2 container h-[300px] md:h-[320px] px-10 lg:px-70 text-center text-white/95  bg-gradient-to-b from-green-950 to-gray-500 flex flex-col gap-10 justify-center items-center">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Get Your Justice In Time</h1>
                <p className='text-base lg:text-xl'>Law ensures fairness, protects rights, resolves disputes, and maintains order in society for justice and equality.</p>
            </div>

            <div className="container">
                <div className="flex flex-row-reverse gap-10 justify-between py-10">
                    <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                        <span className="badge badge-success ">Available</span>
                        {/* <span className="badge badge-info ">{item.experience} Experience</span>
                        <span className="badge badge-neutral ">phd</span>
                        <span className="badge badge-warning">88+ case solve</span> */}
                    </div>
                    <div className='flex flex-col flex-1 gap-2'>
                        <h1 className='text-3xl font-bold flex items-center justify-center md:justify-start'>
                            {item.name}

                        </h1>
                        <p className="opacity-70">📃 {item.specialty}</p>
                        <p className="opacity-70 text-sm">License No: {item.license}</p>
                        <p className=" font-bold">Fee: {item.fee} Taka</p>
                        <div className='flex gap-3'>
                            Available :
                            {
                                item.availability.map(day => (
                                    <span key={day} className='badge badge-success'>{day}</span>
                                ))
                            }
                        </div>

                        <Link to={'/booking'}  className='mt-5'>
                            <button onClick={()=> handleBookAppointment(item)} className='btn  w-full hover:bg-transparent border cursor-pointer border-blue-200 hover:text-blue-500 bg-blue-600 text-white rounded-2xl py-2 text-lg'>
                                Book An Appointment
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;