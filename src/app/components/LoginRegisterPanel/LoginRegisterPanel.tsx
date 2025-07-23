'use client';

import { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function LoginRegisterPanel() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`relative w-[768px] max-w-full min-h-[480px] rounded-[30px] overflow-hidden shadow-lg bg-white transition-all duration-500 ${isActive ? 'signin-active' : ''}`}>
      {/* Sign Up Form */}
      <div className={`absolute top-0 w-1/2 h-full transition-transform duration-500 ${isActive ? 'translate-x-full z-10 opacity-100' : 'z-0 opacity-0'}`}>
        <form className="flex flex-col items-center justify-center h-full px-10 bg-white">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <div className="flex my-5 gap-3">
            <SocialIcon Icon={FaGooglePlusG} />
            <SocialIcon Icon={FaFacebookF} />
            <SocialIcon Icon={FaGithub} />
            <SocialIcon Icon={FaLinkedinIn} />
          </div>
          <span className="text-sm text-gray-500 mb-2">or use your email for registration</span>
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button className="btn mt-4">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className={`absolute top-0 left-0 w-1/2 h-full z-10 transition-transform duration-500 ${isActive ? 'translate-x-full' : ''}`}>
        <form className="flex flex-col items-center justify-center h-full px-10 bg-white">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <div className="flex my-5 gap-3">
            <SocialIcon Icon={FaGooglePlusG} />
            <SocialIcon Icon={FaFacebookF} />
            <SocialIcon Icon={FaGithub} />
            <SocialIcon Icon={FaLinkedinIn} />
          </div>
          <span className="text-sm text-gray-500 mb-2">or use your email password</span>
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <a href="#" className="text-sm text-gray-600 mt-2">Forget Your Password?</a>
          <button className="btn mt-4">Sign In</button>
        </form>
      </div>

      {/* Toggle Panel */}
      <div className={`absolute top-0 left-1/2 w-1/2 h-full z-20 overflow-hidden transition-all duration-500 ${isActive ? '-translate-x-full rounded-l-[150px]' : 'rounded-r-[150px]'}`}>
        <div className="w-[200%] h-full flex text-white bg-gradient-to-r from-indigo-400 to-indigo-700 transition-transform duration-500" style={{ transform: isActive ? 'translateX(50%)' : 'translateX(0)' }}>
          <div className="w-1/2 flex flex-col items-center justify-center px-8 text-center">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-sm my-4">Enter your personal details to use all of site features</p>
            <button className="btn bg-transparent border-white" onClick={() => setIsActive(false)}>Sign In</button>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center px-8 text-center">
            <h1 className="text-2xl font-bold">Hello, Friend!</h1>
            <p className="text-sm my-4">Register with your personal details to use all of site features</p>
            <button className="btn bg-transparent border-white" onClick={() => setIsActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <a href="#" className="border border-gray-300 w-10 h-10 flex items-center justify-center rounded-md text-gray-600 hover:text-indigo-600 transition">
      <Icon />
    </a>
  );
}
