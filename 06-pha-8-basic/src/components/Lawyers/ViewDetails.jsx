import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import useBooking from '../../hooks/useBooking';

const ViewDetails = () => {
    const { id } = useParams();
    const ViewDetailsID = useLoaderData().find(item => item.id == id)
    // console.log(ViewDetailsID);
    const {addBooking} = useBooking();
    const handleAddAppointment = (ViewDetailsID) => {
        addBooking(ViewDetailsID);
    }

    return (
        <div className='container py-10'>
            <div className="border p-4 rounded w-64">
                <img src={ViewDetailsID.image} alt={ViewDetailsID.name} className="w-full rounded mb-2" />
                <h2 className="text-lg font-semibold">{ViewDetailsID.name}</h2>
                <p><span className="font-medium">Specialty:</span> {ViewDetailsID.specialty}</p>
                <p><span className="font-medium">Experience:</span> {ViewDetailsID.experience}</p>
                <p><span className="font-medium">Fee:</span> {ViewDetailsID.fee} Taka</p>
                <p><span className="font-medium">License:</span> {ViewDetailsID.license}</p>
                <p><span className="font-medium">Available:</span> {ViewDetailsID.availability.join(', ')}</p>
                <Link to={'/booking'}>
                    <button onClick={
                        ()=> handleAddAppointment(ViewDetailsID)
                    } className="btn">Book An Appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default ViewDetails;