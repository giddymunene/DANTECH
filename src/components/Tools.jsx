import React, { useState } from "react";

const Tools = () => {
  // Sample data for MPESA agents and bank Paybills
  const mpesaAgents = [
    { name: "Agent 1", agentNumber:"1234", storeNumber: "Store 001" },
    { name: "Agent 2", agentNumber:"1234", storeNumber: "Store 002" },
    { name: "Agent 3", agentNumber:"1234", storeNumber: "Store 003" },
  ];

  const bankPaybills = [
    { bank: "KCB Bank", paybill: "522522", description: "For account payments" },
    { bank: "Equity Bank", paybill: "247247", description: "For account deposits" },
    { bank: "Co-op Bank", paybill: "400200", description: "General deposits" },
  ];

  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedPaybill, setSelectedPaybill] = useState(null);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Tools Page</h1>

      {/* MPESA Agents Section */}
      <div className="mb-5">
        <h3>MPESA Agents</h3>
        <ul className="list-group">
          {mpesaAgents.map((agent, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
              onClick={() => setSelectedAgent(agent)}
              style={{ cursor: "pointer" }}
            >
              {agent.name}
              <span className="badge bg-primary">{agent.storeNumber}</span>
            </li>
          ))}
        </ul>
        {selectedAgent && (
          <div className="mt-3 alert alert-info">
            <h5>Selected MPESA Agent:</h5>
            <p>
              <strong>Name:</strong> {selectedAgent.name}
            </p>
            <p>
              <strong>Store Number:</strong> {selectedAgent.storeNumber}
            </p>
          </div>
        )}
      </div>

      {/* Bank Paybills Section */}
      <div>
        <h3>Bank Paybills</h3>
        <ul className="list-group">
          {bankPaybills.map((paybill, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
              onClick={() => setSelectedPaybill(paybill)}
              style={{ cursor: "pointer" }}
            >
              {paybill.bank}
              <span className="badge bg-success">{paybill.paybill}</span>
            </li>
          ))}
        </ul>
        {selectedPaybill && (
          <div className="mt-3 alert alert-info">
            <h5>Selected Paybill:</h5>
            <p>
              <strong>Bank:</strong> {selectedPaybill.bank}
            </p>
            <p>
              <strong>Paybill:</strong> {selectedPaybill.paybill}
            </p>
            <p>
              <strong>Description:</strong> {selectedPaybill.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
