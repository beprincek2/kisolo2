
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  

  

  return (
    <section className="c-space my-20" id="contact">
      

      <div className="relative flex items-center justify-center flex-col">

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <div className="flex gap-3 mt-5">
            <a href='https://wa.me/+256768333445'>
            <div className="social-icon">
          <img src="/assets/whatsapp.png" alt="whatsapp" className="w-1/2 h-1/2 filter invert" />
          </div>
            </a>
          <a href='https://github.com/beprincek2'>
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
          </a>
            <a href='https://x.com/Kisolobp'>
          <div className="social-icon">
            <img src="/assets/twit.png" alt="twitter" className="w-1/2 h-1/2" />
          </div>
            </a>
            <a href='https://www.instagram.com/kisolobenjaminprince/?next=%2F'>
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
              </a>
        </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
