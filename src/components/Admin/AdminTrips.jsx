import React, { useState, useEffect } from 'react';
import './AdminTrips.css';

const AdminTrips = () => {
  const [trips, setTrips] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTrip, setCurrentTrip] = useState(null);
  const [states, setStates] = useState(['State 1', 'State 2', 'State 3']);
  const [districts, setDistricts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [guides, setGuides] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    district: '',
    selectedLocations: [],
    guide: '',
    totalDays: '',
  });

  useEffect(() => {
    fetchTrips();
    fetchGuides();
  }, []);

  const fetchTrips = () => {
    setTrips([
      { id: 1, name: 'Trip 1', state: 'State 1', district: 'District 1', locations: ['Place A', 'Place B'], guide: 'John Doe', totalDays: 5 },
      { id: 2, name: 'Trip 2', state: 'State 2', district: 'District 3', locations: ['Place C'], guide: 'Jane Doe', totalDays: 3 },
    ]);
  };

  const fetchGuides = () => {
    setGuides([
      { id: 1, name: 'John Doe', state: 'State 1', district: 'District 1' },
      { id: 2, name: 'Jane Doe', state: 'State 2', district: 'District 3' },
    ]);
  };

  const fetchLocations = (state, district) => {
    if (state === 'State 1' && district === 'District 1') {
      setLocations(['Place A', 'Place B']);
    } else if (state === 'State 2' && district === 'District 3') {
      setLocations(['Place C']);
    }
  };

  const handleStateChange = (state) => {
    setFormData({ ...formData, state, district: '', selectedLocations: [] });
    setDistricts(state === 'State 1' ? ['District 1', 'District 2'] : ['District 3', 'District 4']);
  };

  const handleDistrictChange = (district) => {
    setFormData({ ...formData, district, selectedLocations: [] });
    fetchLocations(formData.state, district);
  };

  const handleLocationChange = (e, location) => {
    const updatedLocations = e.target.checked
      ? [...formData.selectedLocations, location]
      : formData.selectedLocations.filter((loc) => loc !== location);
    setFormData({ ...formData, selectedLocations: updatedLocations });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = (trip = null) => {
    setEditMode(trip !== null);
    setCurrentTrip(trip);
    setFormData({
      name: trip ? trip.name : '',
      state: trip ? trip.state : '',
      district: trip ? trip.district : '',
      selectedLocations: trip ? trip.locations : [],
      guide: trip ? trip.guide : '',
      totalDays: trip ? trip.totalDays : '',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      console.log('Updating trip:', formData);
    } else {
      console.log('Adding new trip:', formData);
    }
    setIsModalOpen(false);
  };

  const handleUpdateTrip = () => {
    console.log('Updated Trip:', formData);
    setIsModalOpen(false);
  };

  const filteredTrips = trips.filter((trip) => {
    const matchesState = !formData.state || trip.state === formData.state;
    const matchesDistrict = !formData.district || trip.district === formData.district;
    return matchesState && matchesDistrict;
  });

  return (
    <div className="admin-trips">
      <div className="header">
        <h2>Trip Management</h2>
        <button className="plus-btn" onClick={() => openModal()}>+</button>
      </div>

      <table className="trip-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>State</th>
            <th>District</th>
            <th>Locations</th>
            <th>Guide</th>
            <th>Total Days</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrips.map((trip, index) => (
            <tr key={trip.id}>
              <td>{index + 1}</td>
              <td>{trip.name}</td>
              <td>{trip.state}</td>
              <td>{trip.district}</td>
              <td>{trip.locations.join(', ')}</td>
              <td>{trip.guide}</td>
              <td>{trip.totalDays}</td>
              <td>
                <button onClick={() => openModal(trip)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>X</button>
            <h3>{editMode ? 'Edit Trip' : 'Create Trip'}</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                State:
                <select
                  name="state"
                  value={formData.state}
                  onChange={(e) => handleStateChange(e.target.value)}
                  required
                >
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                District:
                <select
                  name="district"
                  value={formData.district}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  required
                >
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Locations:
                {locations.map((location, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={formData.selectedLocations.includes(location)}
                      onChange={(e) => handleLocationChange(e, location)}
                    />
                    {location}
                  </div>
                ))}
              </label>
              <label>
                Guide:
                <select
                  name="guide"
                  value={formData.guide}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Guide</option>
                  {guides.map((guide, index) => (
                    <option key={index} value={guide.name}>
                      {guide.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Total Days:
                <input
                  type="number"
                  name="totalDays"
                  value={formData.totalDays}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <div className="modal-buttons">
                <button type="submit">{editMode ? 'Update Trip' : 'Create Trip'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTrips;
