import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import EventCard from './Components/EventCard';
import LoadingSpinner from './components/LoadingSpinner';
import Modal from './components/Modal';

const mockData = [
  { id: 1, name: "Music Concert", date: "2024-11-10", location: "New York", description: "An amazing music event.", image: "https://via.placeholder.com/300?text=Music+Concert" },
  { id: 2, name: "Art Exhibition", date: "2024-11-15", location: "San Francisco", description: "Explore modern art.", image: "https://via.placeholder.com/300?text=Art+Exhibition" },
  { id: 3, name: "Tech Meetup", date: "2024-11-20", location: "Chicago", description: "Network with tech enthusiasts.", image: "https://via.placeholder.com/300?text=Tech+Meetup" },
  ];

function App() {
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredEvents = mockData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Simulate loading with a timeout
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the duration here if needed
    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <div className={`app ${theme}`}>
      {loading ? (
        <div className="loading-spinner-fullscreen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} onSearch={handleSearch} />
          
          {/* Floating Elements for Background Animation */}
          <div className="floating-elements">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>

          <div className="events-container">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>

          {selectedEvent && (
            <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
