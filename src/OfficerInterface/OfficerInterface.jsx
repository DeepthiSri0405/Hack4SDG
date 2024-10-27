import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <header className="profile-header">
        <div className="profile-info">
          <div className="profile-image">
            <img src="https://via.placeholder.com/50" alt="Profile" />
          </div>
          <div className="profile-details">
            <p><strong>Name of the officer:</strong></p>
            <p><strong>Municipal Corporation Name:</strong></p>
          </div>
        </div>
        <div className="tickets-raised">TICKETS RAISED</div>
      </header>

      <div className="content">
        <div className="stats">
          <div className="total-issues">
            <h3>Total issues:</h3>
            <p>Solved: 0</p>
            <p>Unsolved: 0</p>
          </div>
          <div className="dashboard-chart">
            <h3>Dashboard:</h3>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
        </div>

        <div className="tasks">
          <div className="assigned-tasks">
            <h3>Assigned tasks</h3>
            <TaskCard issueId="101" workerName="Worker A" />
            <TaskCard issueId="102" workerName="Worker B" />
            <TaskCard issueId="103" workerName="Worker C" />
          </div>
          <div className="unassigned-tasks">
            <h3>Unassigned tasks</h3>
            <UnassignedTaskCard issueId="104" />
            <UnassignedTaskCard issueId="105" />
            <UnassignedTaskCard issueId="106" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskCard({ issueId, workerName }) {
  return (
    <div className="task-card assigned">
      <p>Issue ID: {issueId}</p>
      <p>Worker name: {workerName}</p>
    </div>
  );
}

function UnassignedTaskCard({ issueId }) {
  return (
    <div className="task-card unassigned">
      <p>Issue ID: {issueId}</p>
      <p>Details:</p>
      <button className="assign-button">Assign</button>
    </div>
  );
}

export default App;