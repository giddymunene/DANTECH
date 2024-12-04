import React from 'react';

const Testimonials = () => {
    const testimonials = [
        { name: 'Man Simo', location: 'Nairobi', feedback: 'Great Delivery and Trustworthy Cyber Café.' },
        { name: 'Caren', location: 'Kikuyu', feedback: 'I like it as a cyber café extension. I can design, print, and download documents easily.' },
    ];

    return (
        <section id="testimonials" className="bg-success-900 text-info py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <p className="italic">"{testimonial.feedback}"</p>
                            <h4 className="mt-4 text-xl font-semibold">{testimonial.name}, {testimonial.location}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
