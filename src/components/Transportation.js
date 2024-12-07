import React, { useState } from 'react';
import './Transportation.css';  // Make sure to import the CSS file

function Transportation() {
  const [selectedBus, setSelectedBus] = useState('');
  const [generatedPass, setGeneratedPass] = useState(null);
  const [studentType, setStudentType] = useState('dayScholar'); // Change to 'hostelite' if needed

  const buses = [
    {
      busId: 'B001',
      busNumber: '101',
      route: 'Route A - City Center',
      schedule: ['07:00 AM', '09:00 AM', '11:00 AM'],
      availableSeats: 20,
      idCard: '/images/bus_id_card_101.jpg', // Placeholder image path
    },
    {
      busId: 'B002',
      busNumber: '102',
      route: 'Route B - North Suburbs',
      schedule: ['07:30 AM', '09:30 AM', '12:00 PM'],
      availableSeats: 15,
      idCard: '/images/bus_id_card_102.jpg',
    },
    {
      busId: 'B003',
      busNumber: '103',
      route: 'Route C - East Gate',
      schedule: ['08:00 AM', '10:00 AM', '01:00 PM'],
      availableSeats: 10,
      idCard: '/images/bus_id_card_103.jpg',
    },
  ];

  // Function to handle bus selection
  const handleBusChange = (e) => {
    setSelectedBus(e.target.value);
  };

  // Function to generate travel pass
  const handleGeneratePass = () => {
    const passId = `PASS-${Math.floor(Math.random() * 10000)}`;
    setGeneratedPass(passId);
  };

  // Filter buses based on the current time (for example, show buses in the next 2 hours)
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const getAvailableBuses = () => {
    return buses.filter((bus) => {
      return bus.schedule.some((time) => {
        const [busHour, busMinute] = time.split(':');
        const busTime = new Date();
        busTime.setHours(parseInt(busHour), parseInt(busMinute.split(' ')[0]));
        return busTime > currentTime;
      });
    });
  };

  return (
    <div className="transportation-container">
      <h3>Transportation Details</h3>

      {/* Show Bus Availability */}
      <div className="student-type">
        <p><strong>Student Type:</strong> {studentType === 'dayScholar' ? 'Day Scholar' : 'Hostelite'}</p>
      </div>

      {studentType === 'dayScholar' && (
        <div className="bus-selection-container">
          <label htmlFor="busRoute">Select Bus:</label>
          <select
            id="busRoute"
            value={selectedBus}
            onChange={handleBusChange}
          >
            <option value="">-- Select Bus --</option>
            {getAvailableBuses().map((bus) => (
              <option key={bus.busId} value={bus.busId}>
                {bus.busNumber} - {bus.route}
              </option>
            ))}
          </select>

          {/* Bus Details */}
          {selectedBus && (
            <div className="bus-details">
              {buses
                .filter((bus) => bus.busId === selectedBus)
                .map((bus) => (
                  <div key={bus.busId} className="selected-bus-info">
                    <div>
                      <p><strong>Bus Number:</strong> {bus.busNumber}</p>
                      <p><strong>Route:</strong> {bus.route}</p>
                      <p><strong>Available Seats:</strong> {bus.availableSeats}</p>
                    </div>

                    {/* Display Bus ID Card */}
                    <div className="bus-id-card">
                      <img src={bus.idCard} alt={`Bus ${bus.busNumber} ID Card`} />
                      <p><strong>Bus ID Card:</strong></p>
                    </div>

                    {/* Available Timings */}
                    <div>
                      <p><strong>Available Timings:</strong></p>
                      <ul>
                        {bus.schedule.map((time, index) => (
                          <li key={index}>{time}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Generate Travel Pass Button */}
          <div className="generate-pass">
            <button onClick={handleGeneratePass}>Generate Travel Pass</button>
            {generatedPass && (
              <p><strong>Your Travel Pass ID:</strong> {generatedPass}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Transportation;
