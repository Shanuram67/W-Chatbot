import React, { useState, useEffect } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { motion } from 'framer-motion';
import { Trash2, Plus, X, Share2 } from 'lucide-react';

const LocationShare = () => {
  const [location, setLocation] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', number: '', email: '' });
  const [showAddContact, setShowAddContact] = useState(false);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default coordinates

  // Get user location with high accuracy
  useEffect(() => {
    if ('geolocation' in navigator) {
      const geoOptions = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
      };

      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          setMapCenter([latitude, longitude]); // Center map on user's live location
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Could not retrieve location. Please enable location services and ensure high accuracy.');
        },
        geoOptions
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.log('Geolocation is not available');
    }
  }, []);

  // Add contact to the list
  const addContact = () => {
    if (newContact.name && /^[a-zA-Z]+$/.test(newContact.name) && newContact.number.match(/^\d+$/) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newContact.email)) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: '', number: '', email: '' });
      setShowAddContact(false);
    } else {
      alert('Please fill out the name (letters only), a valid number, and a correct email format.');
    }
  };

  // Delete contact
  const deleteContact = (indexToDelete) => {
    setContacts(contacts.filter((_, index) => index !== indexToDelete));
  };

  // Construct WhatsApp link
  const getWhatsAppLink = (contactNumber) => {
    if (!location) {
      alert('Location data is missing.');
      return '#';
    }

    const mapUrl = `https://www.google.com/maps?q=${location.lat},${location.lon}`;
    const message = `I am here: ${mapUrl}`;

    return `https://api.whatsapp.com/send?phone=${contactNumber}&text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-500 to-blue-500 p-4">
      <h1 className="text-2xl font-bold mb-4">Share Your Location</h1>

      {location ? (
        <div className="mb-4">
          <p className="mb-2">Your current location:</p>
          <p>Latitude: {location.lat.toFixed(6)}</p>
          <p>Longitude: {location.lon.toFixed(6)}</p>
          <div className="h-64 mt-2">
            <Map center={mapCenter} zoom={13} height={250}>
              <Marker width={50} anchor={mapCenter} />
            </Map>
          </div>
        </div>
      ) : (
        <p className="mb-4">Loading location...</p>
      )}

      <h2 className="text-xl font-semibold mb-2">Your Contacts</h2>
      <div className="mb-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center bg-white p-2 rounded-lg mb-2 shadow-md">
            <motion.div className="flex-grow text-left">
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-gray-600">Phone: {contact.number}</p>
              <p className="text-sm text-gray-600">Email: {contact.email}</p>
            </motion.div>

            <motion.a
              href={getWhatsAppLink(contact.number)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-green-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="h-5 w-5" />
            </motion.a>

            <button className="ml-2 text-red-500" onClick={() => deleteContact(index)}>
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {showAddContact ? (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name (Alphabets only)"
            className="w-full p-2 border rounded-lg mb-2"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Number (Digits only)"
            className="w-full p-2 border rounded-lg mb-2"
            value={newContact.number}
            onChange={(e) => setNewContact({ ...newContact, number: e.target.value })}
            pattern="[0-9]*"
            inputMode="numeric"
          />
          <input
            type="email"
            placeholder="Email (Valid format)"
            className="w-full p-2 border rounded-lg mb-2"
            value={newContact.email}
            onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
          />
          <div className="flex justify-between">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={addContact}>
              <Plus className="inline mr-1" /> Add
            </button>
            <button className="bg-gray-300 py-2 px-4 rounded-lg" onClick={() => setShowAddContact(false)}>
              <X className="inline mr-1" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg" onClick={() => setShowAddContact(true)}>
          <Plus className="inline mr-1" /> Add New Contact
        </button>
      )}
    </div>
  );
};

export default LocationShare;
