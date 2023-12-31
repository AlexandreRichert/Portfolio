import React, { useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"


function Contact() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_xyqxzwk", "template_3fcf3qh", form.current, "33A2HIixF3PotwVlx").then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  
  
    return (
        <div id='contact' className="relative flex flex-col justify-center items-center h-screen bg-hero-pattern " >
          <form 
          ref={form} 
          onSubmit={sendEmail} 
          className='h-3/4 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100
 flex justify-center items-center w-11/12 max-w-xl'>
            <div className='h-full flex flex-col justify-center items-center px-14 w-full'>
              <h1 className='text-center text-white text-3xl mt-5'>Me contacter</h1>
              <label htmlFor='nom' >Nom</label>
              <input type="text" name="name" id="nom" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id='email' />
              <label htmlFor='objet'>Objet</label>
              <input type="text" name="objet" id='objet' />
              <label htmlFor='message'>Message</label>
              <textarea name="message" className='w-full h-28 text-base ' id='message' />
              <button type="submit" className='my-7 w-28 h-8 rounded-lg shadow-2xl bg-blue-300 hover:bg-[#EDB88B] ease-in-out duration-300'>Envoyer</button>
              {isSent && <p className='text-green-500 text-center'>Le mail a bien été envoyé !</p>}
            </div>
          </form>
          <footer className='flex flex-col gap-2 absolute inset-x-0 bottom-2  '>
            <div className='text-xl md:text-3xl text-white flex gap-4 justify-center items-center '>
              <a href="https://www.linkedin.com/in/alexandre-richert-9a452924a/"  target='_blank' rel="noopener noreferrer" aria-label="page Linkedin d'Alexandre Richert"><AiFillLinkedin className='hover:text-[#EDB88B] ease-in-out duration-300'></AiFillLinkedin></a>
              <a href="https://github.com/AlexandreRichert" target='_blank' rel="noopener noreferrer" aria-label="Github d'Alexandre Richert"><AiFillGithub className='hover:text-[#EDB88B] ease-in-out duration-300'></AiFillGithub></a>
            </div>
            <p className='text-white text-center text-[10px]'>2023| Richert Alexandre</p>
          </footer> 
        </div>    
        );
  };
  

export default Contact