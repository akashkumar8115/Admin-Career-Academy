import React from 'react'

const Clients = () => {
    const clientList = [
        {
            name: "Tech Solutions Inc",
            industry: "IT Services",
            testimonial: "Admin Career Academy helped us find the perfect talent for our team."
        },
        // Add more client data
    ]

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-200 mt-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Our Clients</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clientList.map((client, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                            <p className="text-black-500 mb-2">{client.industry}</p>
                            <p className="italic">{client.testimonial}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
