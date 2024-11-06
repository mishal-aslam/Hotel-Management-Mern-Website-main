import React, { useEffect, useState } from "react";
import Button2 from "../shared/Button2";
import axios from "axios";

const BookingSrc = ({ match }) => {
  const [roomData, setRoomData] = useState(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getroom");
        setRoomData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (roomData && roomData.imageurls && roomData.imageurls.length > 0) {
      setSelectedImage(roomData.imageurls[0]); 
    }
  }, [roomData]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

 
  const imageUrls = roomData?.imageurls || [];

  return (
    <div className="bg-[#23223]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={selectedImage}
              alt="Room"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            {/* Thumbnail images */}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {imageUrls.length > 0 ? (
                imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => setSelectedImage(url)} 
                  />
                ))
              ) : (
                <div>No images available</div>
              )}
            </div>
          </div>

          {/* Room Details Section */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-bold mb-2">{roomData.roomName}</h2>
            <h2 className="text-xl font-bold mt-4">Booking Details:</h2>
            <p className="text-white/70 mb-4 font-semibold">{roomData.description}</p>
            <p className="text-white/70 mb-4">
              <span className="font-bold">Room Type:</span> {roomData.roomType}
            </p>
            <p className="text-white/70 mb-4">
              <span className="font-bold">Availability:</span> {roomData.availability}
            </p>
            <p className="text-white/70 mb-4">
              <span className="font-bold">Current Status: </span>{roomData.roomStatus}
            </p>
            <p className="text-white/70 mb-4">
              <span className="font-bold">Rent per day:</span> ${roomData.rentPerDay}
            </p>

            {/* Buttons for booking */}
            <div className="flex space-x-4 mb-6">
              <Button2 text="Pay Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSrc;
