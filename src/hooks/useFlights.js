import { useState, useEffect } from 'react';

const useFlights = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-scrubland-00954.herokuapp.com/emptyLegs')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);
    
    return [details, setDetails];
}

export default useFlights;