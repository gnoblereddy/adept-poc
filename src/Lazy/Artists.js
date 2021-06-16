import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './App.css';

export default function Artists() {
    const [artist, useArtist] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            if(res.status === 200) {
                useArtist(res.data)
            }
        })
    }, [])

    return (
        <>
            <h1>MTV Base Headline Artists 2019</h1>
            {artist.map(art => (
                <div id='card-body' key={art.id}>
                    <div className='card'>
                        <h2>{art.title}</h2>
                        <p>genre: {art.userId}</p>
                        <p>Albums released: {art.body}</p>
                    </div>
                </div >
            ))
            }
        </>
    );
}