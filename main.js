import React from 'react';
import ReactDOM from 'react-dom';

function EventList() {
  return (
    <div>
      <h2>Event List</h2>
      <p>No events available</p>
    </div>
  );
}

function EventDetails() {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Name:</p>
      <p>Description:</p>
      <p>Location:</p>
      <p>Date:</p>
      <p>Organizer:</p>
    </div>
  );
}

function EventCalendar() {
  return (
    <div>
      <h2>Event Calendar</h2>
      <p>Calendar goes here</p>
    </div>
  );
}

function Map() {
  return (
    <div>
      <h2>Map</h2>
      <p>Map goes here</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <EventList />
      <EventDetails />
      <EventCalendar />
      <Map />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
