import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookYourStay = () => {
  const [rooms, setRooms] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getroom');
        setRooms(response.data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>; 

  return (
    <div>
      <h1>Book Your Stay</h1>
      <ul>
        {rooms.map(room => ( 
          <li key={room.roomName}>
            <h2>{room.roomName}</h2>
            <p>{room.description}</p>
            <p>Type: {room.roomType}</p>
            <p>Status: {room.availablity}</p>
            <p>Rent per day: ${room.rentPerDay}</p>
            {room.imageurls.map((url, index) => (
              <img key={index} src={url} alt={room.roomName} style={{ width: '500px', height: 'auto' }} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookYourStay;
