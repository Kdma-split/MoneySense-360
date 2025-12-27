import React from 'react';
import Login from '../../Login';
import { UserContext } from '../../../contexts/user.context.jsx'
import UploadFile from '../../UploadFile.jsx';

export default function Home() {
    const [loginReq, setLoginReq] = React.useState()
    const {user} = UserContext()

    return (
        // Main Container: Deep Green Background, Centered Content, No Scroll
        <div className={`${loginReq && "z-0"} min-h-full w-full bg-deepGreen relative flex items-center justify-center overflow-hidden font-sans selection:bg-accentGreen selection:text-deepGreen bg-green-200`}> 
            {
                loginReq 
                    && (
                        <div className="absolute z-10 flex w-screen h-screen backdrop-blur-3xl">
                        <Login setLoginReq={setLoginReq} />
                        </div>
                    )
            }
    
            {/* --- Background Animation Layer (Blobs) --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Blob 1 */}
                <div className="absolute top-0 left-20 w-120 h-106 bg-[#057705] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
                {/* Blob 2 (Animation delay added via style for variance) */}
                <div className="absolute top-0 right-50 w-100 h-100 bg-[#088a08] rounded-full mix-blend-multiply filter blur-[70px] opacity-60 animate-blob animation-delay-1000" style={{ animationDelay: '2s' }}></div>
                {/* Blob 3 */}
                <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-[#088a08] rounded-full mix-blend-multiply filter blur-[80px] opacity-80 animate-blob animation-delay-2000" style={{ animationDelay: '4s' }}></div>
              </div>
              {/* --- Content Wrapper (Glassmorphism) --- */}
              <div className="relative z-8 max-w-10/12 min-w-2xl mx-4 p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl text-center">
                {/* App Name [cite: 1] */}
                <h3 className="text-accentGreen tracking-[0.2em] uppercase font-bold text-sm mb-4 mt-4">
                  MoneySense 360
                </h3>
                {/* Hero Title */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#56cd56] to-[#088a08]">
                  From Chaos to Clarity.<br />
                  From Spends to Wealth.
                </h1>
                {/* Tagline / Problem Statement & Solution [cite: 2, 4, 17] */}
                <p className="text-emerald-800 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                  We transform your unstructured bank statements into clear insights. 
                  Identify hidden surplus, cut unnecessary costs, and get a personalized 
                  investment plan tailored to your risk appetite.
                </p>
                {/* CTA Button */}
                { user
                ? ( 
                    <UploadFile />
                ) : (
                <button 
                  onClick={() => setLoginReq(true)}
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-deepGreen transition-all duration-200 bg-accentGreen rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentGreen hover:bg-[#2aa12a] hover:shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                  >
                  <span className="mr-2">Get Started</span>
                  {/* Arrow Icon with hover animation */}
                  <svg 
                    className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                )}
              </div>
            </div>    
        )
    }