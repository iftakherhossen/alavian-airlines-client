import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useCart from '../../hooks/useCart';
import Flights from './Flights';
import useFlights from '../../hooks/useFlights'
import { getStoredCart, clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const Bookings = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [flights, setFlights] = useFlights();
    const [cart, setCart] = useCart(flights);

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
                    clearTheCart();
                    alert('Your Booking is Under Processing')
                    reset();
                };
            })
    }

    const handleDelete = key => {
        const confirm = window.confirm('Are you sure? You wanna delete it!')

        if (confirm === true) {
            const newCart = cart.filter(product => product.key !== key);
            setCart(newCart);
            removeFromDb(key);
        }
    }

    return (
        <div className="myFlights">
            <Container>
                <div className="text-center">
                    <h2 className="text-white">My Bookings</h2>
                    <h4 className="font-color-1">Manage Your Bookings Here</h4>
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
                                handleDelete={handleDelete}
                            ></Flights>)
                        }
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleProceed)} className="d-flex justify-content-between text-white p-2 ">
                        <div>
                            <input placeholder="Type Your Name" {...register("name")} className="p-2 border-0" />
                            <input placeholder="Type Your Email" {...register("email", { required: true })} className="p-2 border-0 mx-3" />
                            {errors.email && <span className="error text-danger">This Name & Email is required</span>}
                        </div>
                        <input type="submit" value="Proceed to Payment" className="bg-color-2 border-0 py-2 px-4 text-white" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Bookings;