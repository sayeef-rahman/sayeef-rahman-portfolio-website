import React from 'react';
import emailjs from 'emailjs-com'

const ContactUs = () => {
    function sendEmail(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const mobile = e.target.mobile.value;
        const message = e.target.message.value;

        console.log(name, mobile, email, message);
        
        emailjs.sendForm('service_g8sbfh5',
            'template_dxr1ktu',
            e.target,
            '4kVPFcUi8ScF-1AY6'
            ).then(res =>{
                console.log(res);
            }).catch(error =>{
                console.log(error);
            })
    }
    return (
        <div className="hero bg-blend-lighten lg:w-3/4 mx-auto mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:pl-20">
                    <h1 className="text-5xl font-bold">Contact US</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile</span>
                                </label>
                                <input type="number" placeholder="Your Mobile Numebr" name='mobile' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-info" placeholder="Your Message" name='message'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary text-white" type="submit" value='SEND MESSAGE' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;