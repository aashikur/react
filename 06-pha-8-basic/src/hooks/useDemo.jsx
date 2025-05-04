import { useEffect, useState } from "react"


const useBooking = () => {
    const [booked, setBooked] = useState([]);
    // useEffect(()=>{
    //     const updataBookedData = localStorage.getItem('bookedData');
    //     if(updataBookedData) {
    //         setBooked(JSON.parse(updataBookedData));
    //     }
    // },[]) 
    useEffect(() => {
        console.log("Booked updated:", booked);
    }, [booked]);

    const addBooking = (newBooked) => {
        // const updateBooking = [...booked, newBooked]
        setBooked(newBooked);
        // localStorage.setItem('bookedData',JSON.stringify(updateBooking));
        console.log('AddBooking -> Called', newBooked) // Find newBooked work
        console.log('useBooked', booked) // returning Emplty []

    }

    return {booked, addBooking};
}

export default useBooking; always giving []