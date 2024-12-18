import React, { useState, useEffect } from 'react';
import './AdminLocation.css';

const AdminLocation = () => {
  const [locations, setLocations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filters, setFilters] = useState({ state: '', district: '' });
  const [formData, setFormData] = useState({
    place: '',
    state: '',
    district: '',
    travelRate: '',
    foodRate: '',
    ticketRate: '',
    duration: '',
  });

  useEffect(() => {
    fetchLocations();
    fetchStates();
  }, []);

  const fetchLocations = () => {
    setLocations([
      { id: 1, place: 'Place A', state: 'State 1', district: 'District 1', travelRate: 100, foodRate: 50, ticketRate: 30, duration: '3 days', active: true },
      { id: 2, place: 'Place B', state: 'State 2', district: 'District 3', travelRate: 120, foodRate: 60, ticketRate: 40, duration: '4 days', active: false },
    ]);
  };

  const fetchStates = () => {
    setStates(['State 1', 'State 2', 'State 3']);
  };

  const fetchDistricts = (state) => {
    if (state === 'State 1') setDistricts(['District 1', 'District 2']);
    if (state === 'State 2') setDistricts(['District 3', 'District 4']);
    if (state === 'State 3') setDistricts(['District 5', 'District 6']);
  };

  const handleStateFilterChange = (state) => {
    setFilters({ state, district: '' });
    fetchDistricts(state);
  };

  const handleDistrictFilterChange = (district) => {
    setFilters({ ...filters, district });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = (location = null) => {
    setEditMode(location !== null);
    setCurrentLocation(location);
    setFormData({
      place: location ? location.place : '',
      state: location ? location.state : '',
      district: location ? location.district : '',
      travelRate: location ? location.travelRate : '',
      foodRate: location ? location.foodRate : '',
      ticketRate: location ? location.ticketRate : '',
      duration: location ? location.duration : '',
    });
    if (location) fetchDistricts(location.state);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      console.log('Updating location:', formData);
    } else {
      console.log('Adding new location:', formData);
    }
    setIsModalOpen(false);
  };

  const handleToggleActive = (id) => {
    setLocations(
      locations.map((location) =>
        location.id === id ? { ...location, active: !location.active } : location
      )
    );
  };

  const filteredLocations = locations.filter((location) => {
    const matchesState = !filters.state || location.state === filters.state;
    const matchesDistrict = !filters.district || location.district === filters.district;
    return matchesState && matchesDistrict;
  });

  return (
    <div className="admin-location">
      <div className="header">
        <h2>Location Management</h2>
        <button className="plus-btn" onClick={() => openModal()}>+</button>
      </div>

      <div className="filters">
        <select
          value={filters.state}
          onChange={(e) => handleStateFilterChange(e.target.value)}
        >
          <option value="">All States</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          value={filters.district}
          onChange={(e) => handleDistrictFilterChange(e.target.value)}
          disabled={!filters.state}
        >
          <option value="">All Districts</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      <table className="location-table">
        <thead>
          <tr>
            <th>Place</th>
            <th>State</th>
            <th>District</th>
            <th>Travel Rate</th>
            <th>Food Rate</th>
            <th>Ticket Rate</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLocations.map((location) => (
            <tr
              key={location.id}
              className={!location.active ? 'inactive' : ''}
            >
              <td>{location.place}</td>
              <td>{location.state}</td>
              <td>{location.district}</td>
              <td>{location.travelRate}</td>
              <td>{location.foodRate}</td>
              <td>{location.ticketRate}</td>
              <td>{location.duration}</td>
              <td>
                <button onClick={() => openModal(location)}>Edit</button>
                <button onClick={() => handleToggleActive(location.id)}>
                  {location.active ? 'Inactive' : 'Active'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>X</button>
            <h3>{editMode ? 'Edit Location' : 'Add Location'}</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Place:
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <div className="modal-row">
                <label>
                  State:
                  <select
                    name="state"
                    value={formData.state}
                    onChange={(e) => {
                      handleInputChange(e);
                      fetchDistricts(e.target.value);
                    }}
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
                    onChange={handleInputChange}
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
              </div>
              <label>
                Travel Rate:
                <input
                  type="number"
                  name="travelRate"
                  value={formData.travelRate}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Food Rate:
                <input
                  type="number"
                  name="foodRate"
                  value={formData.foodRate}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Ticket Rate:
                <input
                  type="number"
                  name="ticketRate"
                  value={formData.ticketRate}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Duration:
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <div className="modal-buttons">
                <button type="submit">{editMode ? 'Update Location' : 'Add Location'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLocation;
