import React, { useEffect, useState } from "react";
import "./AdminHome.css";

const AdminHome = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchData = async () => {
      const data = [
        { label: "State", stateCount: 120, districtCount: 20 },
        { label: "Locations", count: 15 },
        { label: "Trips", count: 300 },
        { label: "Guides", count: 45 },
        { label: "Users", count: 200 },
        { label: "Trips booked", count: 500 },
      ];
      setBlocks(data);
    };

    fetchData();
  }, []);

  return (
    <div className="parent-container">
      <div className="admin-home">
        {blocks.map((block, index) => (
          <div className="block" key={index}>
            {block.label === "State" ? (
              <div className="state-block">
                <div className="state-part">
                  <p className="count">{block.stateCount}</p>
                  <p className="label">States</p>
                </div>
                <div className="district-part">
                  <p className="count">{block.districtCount}</p>
                  <p className="label">Districts</p>
                </div>
              </div>
            ) : (
              <>
                <h2>{block.label}</h2>
                <p>{block.count}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
