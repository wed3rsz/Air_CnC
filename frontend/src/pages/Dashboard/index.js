import React, { useEffect, useState } from 'react';
//useState para setar state de forma mais dinamica
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSposts() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        }
        loadSposts();
    }, []);

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `RS${spot.price}/dia` : "GRATUITO" }</span>
                    </li>
))}
            </ul>

            <Link to="/New">
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )
}

// função map necessita de uma chamada de key com uma solicitação de algum argumento unico na proxima instancia
