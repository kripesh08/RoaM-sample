import React, { useState, useEffect } from 'react';
import './AdminGuide.css';

const AdminGuide = () => {
  const [guides, setGuides] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentGuide, setCurrentGuide] = useState(null);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filters, setFilters] = useState({ state: '', district: '' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    district: '',
  });

  useEffect(() => {
    fetchGuides();
    fetchStates();
  }, []);

  const fetchGuides = () => {
    setGuides([
      { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', state: 'State 1', district: 'District 1', disabled: false },
      { id: 2, name: 'Jane Doe', phone: '098-765-4321', email: 'jane@example.com', state: 'State 2', district: 'District 3', disabled: true },
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

  const openModal = (guide = null) => {
    setEditMode(guide !== null);
    setCurrentGuide(guide);
    setFormData({
      name: guide ? guide.name : '',
      phone: guide ? guide.phone : '',
      email: guide ? guide.email : '',
      state: guide ? guide.state : '',
      district: guide ? guide.district : '',
    });
    if (guide) fetchDistricts(guide.state);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      console.log('Updating guide:', formData);
    } else {
      console.log('Adding new guide:', formData);
    }
    setIsModalOpen(false);
  };

  const handleToggleDisable = (id) => {
    setGuides(
      guides.map((guide) =>
        guide.id === id ? { ...guide, disabled: !guide.disabled } : guide
      )
    );
  };

  const filteredGuides = guides.filter((guide) => {
    const matchesState = !filters.state || guide.state === filters.state;
    const matchesDistrict = !filters.district || guide.district === filters.district;
    return matchesState && matchesDistrict;
  });

  return (
    <div className="admin-guide">
      <div className="header">
        <h2>Guide Management</h2>
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

      <table className="guide-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>State</th>
            <th>District</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredGuides.map((guide) => (
            <tr
              key={guide.id}
              className={guide.disabled ? 'disabled' : ''}
            >
              <td>{guide.name}</td>
              <td>{guide.phone}</td>
              <td>{guide.email}</td>
              <td>{guide.state}</td>
              <td>{guide.district}</td>
              <td>
                <button onClick={() => openModal(guide)}>Edit</button>
                <button onClick={() => handleToggleDisable(guide.id)}>
                  {guide.disabled ? 'Enable' : 'Disable'}
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
            <h3>{editMode ? 'Edit Guide' : 'Add Guide'}</h3>
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
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                State:
                <select
                  name="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange(e)}
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
              <div className="modal-buttons">
                <button type="submit">{editMode ? 'Update Guide' : 'Add Guide'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGuide;
