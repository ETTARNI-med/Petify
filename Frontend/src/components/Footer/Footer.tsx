import React from 'react';
// import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='Footer-section'>
      <div>
        <div className='flex justify-between border-slate-950'>
          <div className='font-sans'>
            <h4>Follow Us</h4>
            <a href="/instagram">
              <p>Instagram</p>
            </a>
            <a href="/Facebook">
              <p>Facebook</p>
            </a>
            <a href="/TikTok">
              <p>TikTok</p>
            </a>
            <a href="/Twitter">
              <p>Twitter</p>
            </a>
          </div>
          <div>
            <h4>About Petify</h4>
            <a href="Who-we-are">
              <p>Who we are ?</p>
            </a>
            <a href="/Privacy-policy">
              <p>Privacy Policy</p>
            </a>
            <a href="/Terms-of-use">
              <p>Terms Of Use</p>
            </a>
            <a href="/Cookie-notice">
              <p>Cookie Notice</p>
            </a>
          </div>
          <div>
            <h4 className='underline'>Subscribe to our newsletter</h4>
            <p>Stay updated on new releases and features, guides, and Products.</p>
            <div className="input">
              <input placeholder="Your Email" type="text" className='w-64 rounded-full text-white px-3' />
              <br />
              <br />
              <button className="w-48 bg-cyan-500 hover:bg-cyan-600 rounded-full">Subscribe</button>
            </div>
          </div>
          <div>
            <h4>Other</h4>
            <a href="/Help">
              <p>Help</p>
            </a>
            <a href="/Contact">
              <p>Contact</p>
            </a>
            <a href="/About-us">
              <p>About us</p>
            </a>
          </div>
        </div>
        <div className='mt-8 tracking-widest border-t-2 border-slate-950'>
          <p>All rights reserved to © Petify 2023</p>
        </div>
      </div>
    </div>
  );
}
