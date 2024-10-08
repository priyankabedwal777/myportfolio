"use client";
import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gitimg from "../public/images/git.png";
import linkdinimg from "../public/images/linkdin.png";


const emailsection = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // const [status, setStatus] = useState('');

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus('Sending...');
    
  //   const response = await fetch('/api/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.ok) {
  //     setStatus('Message sent successfully!');
  //     setFormData({ email: '', subject: '', message: '' });
  //   } else {
  //     setStatus('Failed to send message.');
  //   }
  // };
    const [emailSubmitted, setEmailSubmitted] = useState(false);
     const handleSubmit = async (e) => {
       e.preventDefault();
       const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
       }; 
       const JSONdata = JSON.stringify(data);
       const endpoint = "/api/send";
       const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'applicationsjson'
       },
        body:JSONdata,
       }

       const response = await fetch(endpoint, options);
       const resData = await response.json();

       if (response.status === 200) {
        console.log('Message sent.');
        setEmailSubmitted(true);
       }
    };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
         <h5 className='text-xl font-bold text-white my-2'>Let's Connect WITH </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md '>I'm currently looking for a new opportunity, my inbox is always Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <div className='socials flex flex-row gap-2 '>
         <Link href="https://github.com/priyankabedwal777/">
            <Image src={gitimg} alt='Github Icon' className='w-10 h-10 mt-1.5'/>
         </Link>
         <Link href="http://linkedin.com/in/priyanka-bedwal-6a66a4281">
            <Image src={linkdinimg} alt='Linkdin Icon' className='w-14 h-14'/>
         </Link>
        </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className='mb-6'>
               <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                <input 
                 name='email'
                 type="email"
                 id='email' 
                 required 
                 placeholder='priyanka.berwal142@gmail.com'
                 className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                 />
                 </div>
                 <div className='mb-6'>
                  <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                <input 
                 name='subject'
                 type="text"
                 id='subject' 
                 required 
                 placeholder='Just Saying hi'
                 className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                 />
                 </div>
                 <div className='mb-6'>
                    <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                    Message 
                    </label>
                    <textarea
                    name='message'
                    id='message'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Let's talk about..."
                    />  
                 </div>
                 <button
                 type='submit'
                 className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
                 >
                 Send Message
                 </button>
                 {
                  emailSubmitted  && (
                    <p className='tect-green-500 text-sm mt-2'>
                        Email sent successfully!
                    </p>
                  ) 
                 }
            </form>
             {/* <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className='bg-red-600'>Send</button>
      </form>
      <p>{status}</p>
   ,          </div> */}
        </div>
        </section>
  )
}

export default emailsection