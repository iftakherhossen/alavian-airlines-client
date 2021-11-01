import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useCart from '../../hooks/useCart';
import Flights from './Flights';
import useFlights from '../../hooks/useFlights'
import { getStoredCart } from '../../utilities/fakedb';

const MyFlights = ({ dName }) => {
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const [flights, setFlights] = useFlights();
    const [cart] = useCart(flights);

    console.log(dName);

    const handleProceed = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Booking is Under Processing')
                    reset();
                };
            })
    }

    return (
        <div className="myFlights">
            <Container>
                <div className="text-center">
                    <h2 className="text-white">My Flights</h2>
                    <h4 className="font-color-1">Manage Your Flights Here</h4>
                </div>
                <div className="mt-5">
                    <div className="d-flex flex-column text-white">
                        <div className="d-flex px-2">
                            <div className="w-95 fs-5">Manage Your Tickets - {cart.length}</div>
                            <div className="w-5"></div>
                        </div>
                        {
                            cart.map(flight => <Flights
                                key={flight._id}
                                flight={flight}
                            ></Flights>)
                        }
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleProceed)} className="d-flex justify-content-between text-white px-2">
                        <div>
                            <input placeholder="Type Your Name" {...register("name")} className="p-2 border-0" />
                            <input placeholder="Type Your Email" {...register("email", { required: true })} className="p-2 border-0 mx-3" />
                            {errors.email && <span className="error text-danger">This Name & Email is required</span>}
                        </div>
                        <input type="submit" value="Proceed to Payment" className="bg-color-2 border-0 py-2" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MyFlights;