import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formData,
            'YOUR_PUBLIC_KEY'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
                // Add success notification
            })
            .catch((err) => {
                console.log('FAILED...', err)
                // Add error notification
            })
    }

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 font-semibold">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                placeholder='Enter your name'
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">Email</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                placeholder='Enter your email'
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">Subject</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                placeholder='Typpe your messages here'
                            />
                        </div>
                        {/* Add more form fields */}
                        <button type="submit" className="w-full bg-violet-50 text-white py-3 rounded-lg font-semibold hover:bg-violet-100">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
