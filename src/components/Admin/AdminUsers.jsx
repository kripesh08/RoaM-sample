import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminUsers.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [states, setStates] = useState(['State 1', 'State 2', 'State 3']);
  const [districts, setDistricts] = useState([]);
  const [filters, setFilters] = useState({ state: '', district: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        phone: '1234567890',
        address: '123 Street, City',
        district: 'District 1',
        state: 'State 1',
        email: 'john@example.com',
        trips: [
          {
            name: 'Trip to Mountains',
            locations: [
              { name: 'Peak A', ticketRate: 100, duration: '2 days' },
              { name: 'Lake B', ticketRate: 50, duration: '1 day' },
            ],
            foodCost: 200,
            totalCost: 350,
            guide: 'Guide John',
          },
        ],
      },
      {
        id: 2,
        name: 'Jane Doe',
        phone: '0987654321',
        address: '456 Avenue, City',
        district: 'District 3',
        state: 'State 2',
        email: 'jane@example.com',
        trips: [
          {
            name: 'Beachside Adventure',
            locations: [
              { name: 'Beach A', ticketRate: 150, duration: '1 day' },
              { name: 'Resort B', ticketRate: 200, duration: '2 days' },
            ],
            foodCost: 300,
            totalCost: 600,
            guide: 'Guide Jane',
          },
        ],
      },
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  };

  const fetchDistricts = (state) => {
    if (state === 'State 1') {
      setDistricts(['District 1', 'District 2']);
    } else if (state === 'State 2') {
      setDistricts(['District 3', 'District 4']);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));

    if (name === 'state') {
      fetchDistricts(value);
      setFilters((prevFilters) => ({ ...prevFilters, district: '' }));
    }
  };

  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesState = !filters.state || user.state === filters.state;
      const matchesDistrict = !filters.district || user.district === filters.district;
      return matchesState && matchesDistrict;
    });
    setFilteredUsers(filtered);
  }, [filters, users]);

  const handleViewTrips = (user) => {
    navigate(`/Admin/UserTrips/${user.id}`, { state: { user } });
  };

  return (
    <div className="admin-users">
      <div className="header">
        <h2>User Management</h2>
      </div>

      <div className="filters">
        <select name="state" value={filters.state} onChange={handleFilterChange}>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select name="district" value={filters.district} onChange={handleFilterChange} disabled={!filters.state}>
          <option value="">Select District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Address</th>
            <th>District</th>
            <th>State</th>
            <th>Email</th>
            <th>Booked Trips</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.district}</td>
              <td>{user.state}</td>
              <td>{user.email}</td>
              <td>{user.trips.length}</td>
              <td>
                <button onClick={() => handleViewTrips(user)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
