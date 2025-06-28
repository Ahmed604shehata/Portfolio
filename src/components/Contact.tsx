import React from 'react';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import toast from 'react-hot-toast';
const Contact: React.FC = () => {

//   const form = useRef<HTMLFormElement | null>(null);

// const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//         .sendForm('service_jo6ze2b', 'template_3qvoa55', form.current, 'X_yFDfigN9B7vicjp')
        
//         .then(
//           () => {
//             toast.success('Email Was Sent Successfully')
//           },
//           () => {
//             toast.success('Email Was Sent Successfully ')
//           }
//         );
//     }
//   };
    return (
    <>
    <div id='contact' className="container contact_content w-[70%] mx-auto my-[300px]">
    <h1 className="header_title lg:text-4xl md:text-4xl font-bold my-10 mrs-2 pr-4 text-amber-300 text-center">Contact Me</h1>
        <form action=""  className="flex flex-col">
            {/* ref={form} onSubmit={sendEmail} */}
            <div className="lg:flex md:block gap-2">
                <input type="text" placeholder="Your Name" className="text-xl w-[100%] border-1 border-amber-300 my-3 h-15 pl-4  "/>
                <input type="email" placeholder="Your Phone Number" className="text-xl w-[100%] border-1 border-amber-300 my-3 h-15 pl-4 "/>
            </div>
            <textarea name="message" id="" placeholder="Send Message" className="text-xl border-1 border-amber-300 my-3 h-30 pl-4 py-2"></textarea>
            <button type='submit' className="text-xl lg:w-[400px] submit border-1 border-amber-300 my-3 h-12 pl-4 rounded-xl cursor-pointer  text-gray-500 bg-amber-300 ease-all hover:bg-transparent decoration-700">Send Message</button>
        </form>
    </div>
    </>
    );
};

export default Contact;