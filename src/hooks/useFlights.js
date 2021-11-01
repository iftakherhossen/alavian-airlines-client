import { useState, useEffect } from 'react';

const useFlights = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/emptyLegs')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);
    
    return [details, setDetails];
}

export default useFlights;