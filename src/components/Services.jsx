import React from 'react';

const Services = () => {
  const services = [
    { title: "Vehicle Search & NTSA Services", description: "Efficiently navigate NTSA services." },
    { title: "eCitizen Services", description: "Applications, edits, and registrations made easy." },
    { title: "Web & Graphic Design", description: "Professional design services tailored to your needs." }
  ];

  return (
    <div id="services" className="py-5 bg-success">
      <div className="container text-center">
        <h2 className="mb-4">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
