import React from 'react';
import { motion } from 'framer-motion';
import '../styles/EventCard.css';

function EventCard({ event, onClick }) {
  return (
    <motion.div
      className="event-card"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <img src={event.image} alt={event.name} />
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </motion.div>
  );
}

export default EventCard;
