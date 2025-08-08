import React from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Nav from "./assets/component/Nav.jsx";
import {  BadgeAlert } from "./assets/component/BadgeAlert.js"; 


import {  BadgeCheck } from "./assets/component/BadgeCheck.js"; 
import { AppWindowMac } from "./assets/component/AppWindowMac.js";
import { Bolt } from "./assets/component/Bolt.js";
// import {  BadgeAlert } from "./assets/component/ BadgeAlert.js"; 

const App = () => {
  const position = [22.5726, 88.3639]; // Example: Kolkata

  return (
    <>
   <Nav/>
    <div className="app-container">
      <aside className="sidebar">
        <nav>
          <ul>
         <li><a href="#dashboard">Dashboard</a> < AppWindowMac/> </li>
            <li><a href="#status">Status</a><BadgeCheck/></li>
            <li><a href="#alerts">Alerts</a><BadgeAlert/></li> 
            <li><a href="#settings">Settings</a><Bolt/></li>
          </ul>
        </nav>
      </aside>
 
      <main className="main">
        <div className="map-container ">
          <h2>Unauthorized Construction Map</h2>

          {/* ✅ MAP GOES HERE */}
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "300px", width: "100%", borderRadius: "8px", margin: "20px 0" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Marker position={position}>
              <Popup>Suspicious Construction<br /> Site flagged.</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="info-panels">
          <section className="alerts">
            <h3>Recent Alerts</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>04/10/2024</td>
                  <td>Unauthorized Construction</td>
                  <td><span className="badge new">New</span></td>
                </tr>
                <tr>
                  <td>04/09/2024</td>
                  <td>Unauthorized Construction</td>
                  <td><span className="badge verified">Verified</span></td>
                </tr>
                <tr>
                  <td>04/08/2024</td>
                  <td>Unauthorized Construction</td>
                  <td><span className="badge pending">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="locations">
            <h3>Flagged Locations</h3>
            <ul>
              <li>123 Main St</li>
              <li>456 Elm Ave</li>
              <li>789 Oak Rd</li>
            </ul>
          </section>

          <section className="comparison">
            <h3>Image Comparison</h3>
            <div className="images">
            <div className="before"> <h2>Before</h2>
              <img src="/image/before.png" alt="Before" /></div> 
             <div className="after"> <h2>After</h2>
              <img src="/image/after.png" alt="After" /></div>
            </div>
            <button>Mark as Verified</button>
          </section>
        </div>
      </main>
    </div>

</>
  );
};

export default App;
