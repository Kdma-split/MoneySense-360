import React from 'react';

const ReceiptShockAnimation = () => {
  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <svg 
        viewBox="0 0 400 400" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFDFC4" stopOpacity="1" />
            <stop offset="100%" stopColor="#F0C0A0" stopOpacity="1" />
          </linearGradient>
          
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/> 
            <feOffset dx="2" dy="2" result="offsetblur"/> 
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/> 
            </feComponentTransfer>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>

        {/* Background: Green as requested */}
        <rect width="100%" height="100%" fill="#2E7D32" />
        
        {/* Internal CSS for Animations */}
        <style>
          {`
            @keyframes jawDrop {
              0%, 10% { transform: scaleY(0.2); }
              40%, 100% { transform: scaleY(1); }
            }
            @keyframes eyesPop {
              0%, 10% { transform: scale(1); }
              40%, 100% { transform: scale(1.3); }
            }
            @keyframes shake {
              0%, 40% { transform: rotate(0deg); }
              45% { transform: rotate(-2deg); }
              50% { transform: rotate(2deg); }
              55% { transform: rotate(-2deg); }
              60% { transform: rotate(0deg); }
            }
            @keyframes receiptUnroll {
              0% { height: 0; opacity: 0; }
              20% { height: 0; opacity: 1; }
              50% { height: 160px; }
              100% { height: 160px; }
            }
            @keyframes flyAway {
              0% { transform: translate(0, 0) scale(1); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translate(50px, -100px) scale(0.5); opacity: 0; }
            }
            @keyframes sweatDrop {
              0%, 50% { opacity: 0; transform: translateY(-10px); }
              70% { opacity: 1; transform: translateY(0px); }
              100% { opacity: 0; transform: translateY(10px); }
            }
            
            .face-group { animation: shake 3s infinite ease-in-out; transform-origin: center bottom; }
            .mouth { animation: jawDrop 3s infinite ease-in-out; transform-origin: center top; }
            .eye-pupil { animation: eyesPop 3s infinite ease-in-out; transform-origin: center; }
            .receipt-paper { animation: receiptUnroll 3s infinite ease-out; }
            .money-wings { animation: flyAway 3s infinite linear; }
            .sweat { animation: sweatDrop 3s infinite ease-in; }
          `}
        </style>

        {/* Scene Container */}
        <g transform="translate(100, 80)">
          
          {/* Money Flying Away (The lost surplus) */}
          <g className="money-wings" transform="translate(180, 100)">
             <circle cx="0" cy="0" r="15" fill="#FFD700" stroke="#E65100" strokeWidth="2"/>
             <text x="-5" y="5" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#E65100">$</text>
             <path d="M-15,0 Q-25,-10 -25,-20 Q-15,-25 0,-15" fill="white" stroke="#333" strokeWidth="1"/>
             <path d="M15,0 Q25,-10 25,-20 Q15,-25 0,-15" fill="white" stroke="#333" strokeWidth="1"/>
          </g>

          {/* Character Body */}
          <path d="M50,180 Q100,220 150,180 L150,250 L50,250 Z" fill="#3F51B5" stroke="#1A237E" strokeWidth="3"/>
          
          {/* Character Head Group */}
          <g className="face-group">
            {/* Head */}
            <circle cx="100" cy="100" r="70" fill="url(#skinGrad)" stroke="#3E2723" strokeWidth="3" filter="url(#shadow)"/>
            
            {/* Hair */}
            <path d="M30,100 C30,50 60,20 100,20 C140,20 170,50 170,100" fill="#3E2723"/>
            
            {/* Eyes */}
            <g transform="translate(70, 90)">
              <circle cx="0" cy="0" r="18" fill="white" stroke="#333" strokeWidth="2"/>
              <circle className="eye-pupil" cx="0" cy="0" r="5" fill="black"/>
            </g>
            <g transform="translate(130, 90)">
              <circle cx="0" cy="0" r="18" fill="white" stroke="#333" strokeWidth="2"/>
              <circle className="eye-pupil" cx="0" cy="0" r="5" fill="black"/>
            </g>
            
            {/* Mouth (The shock element) */}
            <ellipse className="mouth" cx="100" cy="135" rx="15" ry="20" fill="#440000" stroke="black" strokeWidth="2"/>
            
            {/* Sweat Drop */}
            <path className="sweat" d="M160,80 Q165,70 170,80 Q175,90 160,100 Q145,90 150,80" fill="#4FC3F7" stroke="#0277BD" strokeWidth="1"/>
          </g>

          {/* Hand & Receipt */}
          <g transform="translate(160, 160)">
            {/* The Receipt */}
            <rect className="receipt-paper" x="-20" y="10" width="60" height="0" fill="#EEE" stroke="#999" strokeWidth="2" rx="2"/>
            
            {/* Text Lines on Receipt */}
            <g className="receipt-paper">
               <line x1="-10" y1="30" x2="30" y2="30" stroke="#777" strokeWidth="2" strokeDasharray="2,2"/>
               <line x1="-10" y1="50" x2="30" y2="50" stroke="#777" strokeWidth="2" strokeDasharray="2,2"/>
               <line x1="-10" y1="70" x2="30" y2="70" stroke="#F00" strokeWidth="2" strokeDasharray="2,2"/> {/* Red line for danger */}
               <line x1="-10" y1="90" x2="30" y2="90" stroke="#777" strokeWidth="2" strokeDasharray="2,2"/>
               <line x1="-10" y1="110" x2="30" y2="110" stroke="#F00" strokeWidth="2"/> {/* Total amount */}
            </g>
            
            {/* Hand holding it */}
            <circle cx="0" cy="0" r="15" fill="url(#skinGrad)" stroke="#3E2723" strokeWidth="3"/>
          </g>
          
        </g>
      </svg>
    </div>
  );
};

// export default ReceiptShockAnimation;




// import React from "react";

// function MoneySenseHeroAnimation() {
//   return (
//     <svg
//       viewBox="0 0 1100 620"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-label="MoneySense 360 hero animation showing overspending shock"
//       style={{ width: "100%", height: "auto" }}
//     >
//       <defs>
//         {/* Background gradient */}
//         <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#145A32" />
//           <stop offset="100%" stopColor="#2ECC71" />
//         </linearGradient>

//         {/* Phone alert gradient */}
//         {/* <linearGradient id="alertGradient" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#ff6b6b" />
//           <stop offset="100%" stopColor="#c0392b" />
//         </linearGradient> */}
//       </defs>

//       <style>{`
//         .blob {
//           animation: blobBreath 9s ease-in-out infinite;
//           transform-origin: center;
//         }

//         .waveBack {
//           animation: waveMove 14s ease-in-out infinite;
//         }

//         .waveFront {
//           animation: waveMove 10s ease-in-out infinite reverse;
//         }

//         .character {
//           animation: leanBack 3.8s ease-in-out infinite;
//           transform-origin: center;
//         }

//         .head {
//           animation: headTilt 3.8s ease-in-out infinite;
//         }

//         .phoneScreen {
//           animation: phoneAlert 2.5s ease-in-out infinite;
//         }

//         .coin, .cash, .symbol {
//           animation: moneyFall 4.2s linear infinite;
//         }

//         .coin:nth-child(odd),
//         .cash:nth-child(even),
//         .symbol:nth-child(3n) {
//           animation-delay: 1.6s;
//         }

//         @keyframes blobBreath {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         @keyframes waveMove {
//           0%, 100% { transform: translateX(0); }
//           50% { transform: translateX(-30px); }
//         }

//         @keyframes leanBack {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(-2deg); }
//         }

//         @keyframes headTilt {
//           0%, 100% { transform: rotate(0deg); }
//           50% { transform: rotate(-4deg); }
//         }

//         @keyframes phoneAlert {
//           0%, 100% { fill: #2c3e50; }
//           50% { fill: url(#alertGradient); }
//         }

//         @keyframes moneyFall {
//           0% { transform: translateY(-80px); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translateY(520px); opacity: 0; }
//         }
//       `}</style>

//       {/* Organic Blob Background */}
//       <path
//         className="blob"
//         fill="url(#bgGradient)"
//         d="
//           M200,120
//           Q450,-40 760,120
//           Q980,220 860,380
//           Q720,560 440,540
//           Q180,520 120,360
//           Q60,220 200,120 Z
//         "
//       />

//       {/* Layered Waves */}
//       <path
//         className="waveBack"
//         fill="#1ABC9C"
//         opacity="0.35"
//         d="M0 360 Q300 330 550 360 T1100 360 V620 H0 Z"
//       />

//       <path
//         className="waveFront"
//         fill="#2ECC71"
//         opacity="0.4"
//         d="M0 400 Q300 380 550 400 T1100 400 V620 H0 Z"
//       />

//       {/* Falling Money */}
//                  <g className="money-item medium delay-2" transform="translate(20, 100)">
//               <rect width="70" height="35" fill="#81C784" stroke="#1B5E20" strokeWidth="1" rx="2" />
//               <text x="18" y="22" fontSize="12" fill="#004d40" fontWeight="bold">DEBT</text
//            </g>

//            {/* Floating Bill 2 */}
//            <g className="money-item fast" transform="translate(50, -10)">
//               <rect width="70" height="35" fill="#81C784" stroke="#1B5E20" strokeWidth="1" rx="2" />
//               <text x="10" y="22" fontSize="12" fill="#004d40" fontWeight="bold">SPENDS</text>
//            </g>

//            {/* Gold Coin Large */}
//            <g className="money-item slow" transform="translate(40, 80)">
//              <circle cx="0" cy="0" r="18" fill="url(#goldCoin)" stroke="#F57F17" strokeWidth="1" />
//              <text x="-5" y="5" fontSize="14" fill="#E65100" fontWeight="bold">$</text>

//       {/* <g fill="#F1C40F">
//         <circle className="coin" cx="180" cy="20" r="7" />
//         <circle className="coin" cx="420" cy="40" r="6" />
//         <circle className="coin" cx="760" cy="30" r="7" />
//       </g>

//       <g fill="#A9DFBF">
//         <rect className="cash" x="300" y="0" width="28" height="14" rx="3" />
//         <rect className="cash" x="620" y="10" width="28" height="14" rx="3" />
//       </g>

//       <g fill="#ECF0F1">
//         <text className="symbol" x="520" y="0" fontSize="16">$</text>
//         <text className="symbol" x="680" y="20" fontSize="16">₹</text> */}
//       </g>

//       {/* Character */}
//       {/* <g className="character" transform="translate(550 210) scale(2)"> */}
//         {/* Head */}
//         {/* <g className="head">
//           <circle cx="0" cy="30" r="28" fill="#FAD7A0" /> */}

//           {/* Eyes */}
//           {/* <circle cx="-8" cy="30" r="3.5" fill="#2C3E50" />
//           <circle cx="10" cy="30" r="4.5" fill="#2C3E50" /> */}

//           {/* Eyebrows */}
//           {/* <path d="M-18 22 q10 -6 20 0" stroke="#2C3E50" strokeWidth="2" fill="none" />
//           <path d="M2 18 q12 -10 22 0" stroke="#2C3E50" strokeWidth="2" fill="none" /> */}

//           {/* Mouth */}
//           {/* <path
//             d="M-12 42 h24"
//             stroke="#2C3E50"
//             strokeWidth="3"
//             strokeLinecap="round"
//           /> */}
//         {/* </g> */}

//         {/* Neck */}
//         {/* <rect x="-5" y="58" width="10" height="12" rx="5" fill="#F1C27D" /> */}

//         {/* Body */}
//         {/* <rect x="-22" y="70" width="44" height="80" rx="20" fill="#34495E" /> */}

//         {/* Arms */}
//         {/* <rect x="-48" y="76" width="26" height="68" rx="14" fill="#FAD7A0" /> */}
//         {/* <rect x="22" y="76" width="26" height="68" rx="14" fill="#FAD7A0" /> */}

//         {/* Phone */}
//         {/* <rect */}
//           {/* className="phoneScreen"
//           x="28"
//           y="90"
//           width="18"
//           height="30"
//           rx="4"
//         /> */}
//       {/* </g> */}
//     </svg>
//   );
// }










const DespairAnimation = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-900 p-4">
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', maxHeight: '600px', maxWidth: '800px' }}
      >
        <defs>
          {/* 1. Fintech Gradient (Teal to Emerald) */}
          <linearGradient id="fintechBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1abc9c" />
            <stop offset="100%" stopColor="#2ecc71" />
          </linearGradient>

          {/* 2. Character Gradients */}
          <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFDCB1" />
            <stop offset="100%" stopColor="#E2B98E" />
          </linearGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
          <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34495e" />
            <stop offset="100%" stopColor="#2c3e50" />
          </linearGradient>

          {/* 3. Gold Coin Gradient */}
          <radialGradient id="goldCoin" cx="40%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFEB3B" />
            <stop offset="100%" stopColor="#FBC02D" />
          </radialGradient>

          {/* Soft Shadow */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>
          {`
            @keyframes fall {
              0% { transform: translateY(-150px) rotate(0deg); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateY(750px) rotate(360deg); opacity: 0; }
            }
            @keyframes shockLean {
              0%, 10% { transform: rotate(0deg) scale(1); }
              15% { transform: rotate(-3deg) scale(0.98) translate(-5px, 10px); }
              40% { transform: rotate(-3deg) scale(0.98) translate(-5px, 10px); }
              100% { transform: rotate(0deg) scale(1); }
            }
            @keyframes screenFlash {
              0%, 85% { fill: #ecf0f1; }
              90% { fill: #e74c3c; }
              95% { fill: #ecf0f1; }
              100% { fill: #ecf0f1; }
            }
            @keyframes breathe {
              0%, 100% { transform: scale(1) translate(0,0); }
              50% { transform: scale(1.05) translate(-10px, -5px); }
            }
            @keyframes waveFlow {
              0% { transform: translateX(0); }
              50% { transform: translateX(-20px); }
              100% { transform: translateX(0); }
            }

            .money-item { animation: fall linear infinite; }
            .slow { animation-duration: 6s; }
            .medium { animation-duration: 4s; }
            .fast { animation-duration: 3s; }
            
            .delay-0 { animation-delay: 0s; }
            .delay-1 { animation-delay: 1s; }
            .delay-2 { animation-delay: 2s; }
            .delay-3 { animation-delay: 3s; }
            .delay-4 { animation-delay: 4.5s; }

            .character-group { animation: shockLean 4s infinite ease-out; transform-origin: center bottom; }
            .phone-screen { animation: screenFlash 4s infinite; }
            .blob { animation: breathe 8s infinite ease-in-out; transform-origin: center; }
            .wave { animation: waveFlow 6s infinite ease-in-out; }
          `}
        </style>

        {/* --- BACKGROUND LAYER --- */}
        <rect width="100%" height="100%" fill="url(#fintechBg)" />
        
        {/* Organic Blobs */}
        <g opacity="0.2">
          <circle className="blob" cx="100" cy="100" r="150" fill="#ffffff" />
          <circle className="blob" cx="700" cy="500" r="200" fill="#ffffff" style={{ animationDelay: '-4s' }} />
        </g>
        
        {/* Layered Waves */}
        <path className="wave" d="M0,500 C200,450 400,550 800,480 V600 H0 Z" fill="#0E6655" opacity="0.3" />
        <path className="wave" d="M0,550 C300,500 500,580 800,520 V600 H0 Z" fill="#0b5345" opacity="0.4" style={{ animationDelay: '-2s' }} />

        {/* --- LAYER 1: FALLING MONEY (BACKGROUND - Distant/Blurry) --- */}
        <g opacity="0.4">
          <circle className="money-item slow delay-0" cx="100" cy="-50" r="12" fill="url(#goldCoin)" />
          <rect className="money-item slow delay-1" x="700" y="-50" width="60" height="30" fill="#81C784" rx="2" />
          <circle className="money-item slow delay-2" cx="300" cy="-50" r="10" fill="url(#goldCoin)" />
          <rect className="money-item slow delay-3" x="500" y="-50" width="60" height="30" fill="#81C784" rx="2" />
          <text className="money-item slow delay-4" x="50" y="-50" fontSize="20" fill="#b2dfdb" fontWeight="bold">$</text>
        </g>

        {/* --- LAYER 2: CHARACTER (CENTERED) --- */}
        {/* Translate X: 300. The character's internal center is ~100. So 300+100 = 400 (Canvas Center) */}
        <g className="character-group" transform="translate(300, 160)">
          
          {/* Body */}
          <g filter="url(#dropShadow)">
             <path d="M-20,250 C-20,200 40,180 100,180 C160,180 220,200 220,250 V450 H-20 Z" fill="url(#blazerGrad)" />
             <path d="M100,180 L130,280 L100,320 L70,280 Z" fill="url(#shirtGrad)" />
             <path d="M100,320 L130,280 L160,350 Z" fill="#2c3e50" />
             <path d="M100,320 L70,280 L40,350 Z" fill="#2c3e50" />
          </g>

          {/* Neck */}
          <rect x="75" y="150" width="50" height="40" fill="url(#skinTone)" />

          {/* Head */}
          <g filter="url(#dropShadow)">
             <path d="M50,80 C50,20 150,20 150,80 C150,130 130,170 100,170 C70,170 50,130 50,80" fill="url(#skinTone)" />
             <path d="M45,70 C40,20 80,-10 130,10 C160,30 160,80 155,90 C155,90 140,50 100,50 C60,50 45,70 45,70" fill="#3E2723" />
          </g>

          {/* Facial Features */}
          <g transform="translate(100, 100)">
             {/* Eyes */}
             <g transform="translate(-25, -10)">
                <circle cx="0" cy="0" r="14" fill="white" />
                <circle cx="0" cy="0" r="4" fill="#333" />
             </g>
             <g transform="translate(25, -10)">
                <circle cx="0" cy="0" r="14" fill="white" />
                <circle cx="0" cy="0" r="4" fill="#333" />
             </g>

             {/* Eyebrows */}
             <path d="M-40,-35 Q-25,-50 -10,-35" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
             <path d="M10,-30 Q25,-35 40,-30" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />

             {/* Mouth (Grimace) */}
             <rect x="-15" y="25" width="30" height="12" rx="4" fill="white" stroke="#333" strokeWidth="1" />
             <line x1="-15" y1="31" x2="15" y2="31" stroke="#333" strokeWidth="1" />
             <line x1="0" y1="25" x2="0" y2="37" stroke="#333" strokeWidth="1" />
          </g>

          {/* Hand Holding Phone */}
          <g transform="translate(160, 200)">
             <path d="M40,50 L0,100" stroke="#34495e" strokeWidth="25" strokeLinecap="round" />
             <rect x="-10" y="-40" width="50" height="90" rx="4" fill="#2c3e50" transform="rotate(-10)" />
             <rect className="phone-screen" x="-6" y="-35" width="42" height="70" fill="#ecf0f1" transform="rotate(-10)" />
             <circle cx="0" cy="10" r="12" fill="url(#skinTone)" />
             <ellipse cx="10" cy="5" rx="12" ry="10" fill="url(#skinTone)" transform="rotate(-10)" />
             <ellipse cx="15" cy="-5" rx="12" ry="10" fill="url(#skinTone)" transform="rotate(-10)" />
          </g>
        </g>

        {/* --- LAYER 3: FALLING MONEY (FOREGROUND - Clear & Fast) --- */}
        <g>
           {/* Left Side */}
           <g className="money-item medium delay-0" transform="translate(150, -100)">
              <rect width="80" height="40" fill="#81C784" stroke="#1B5E20" strokeWidth="1" rx="2" />
              <text x="20" y="25" fontSize="14" fill="#004d40" fontWeight="bold">DEBT</text>
           </g>
           <circle className="money-item fast delay-1" cx="50" cy="-50" r="18" fill="url(#goldCoin)" stroke="#F57F17" strokeWidth="1" />
           
           {/* Center Area (Crossing Character) */}
           <g className="money-item fast delay-3" transform="translate(380, -150)">
              <rect width="80" height="40" fill="#66BB6A" stroke="#1B5E20" strokeWidth="1" rx="2" />
              <text x="12" y="25" fontSize="14" fill="#004d40" fontWeight="bold">LUXURY</text>
           </g>

           {/* Right Side */}
           <g className="money-item medium delay-2" transform="translate(650, -120)">
              <rect width="80" height="40" fill="#81C784" stroke="#1B5E20" strokeWidth="1" rx="2" />
              <text x="28" y="25" fontSize="14" fill="#004d40" fontWeight="bold">$$$</text>
           </g>
           <circle className="money-item fast delay-0" cx="750" cy="-50" r="15" fill="url(#goldCoin)" stroke="#F57F17" strokeWidth="1" />
           
           <g className="money-item slow delay-4" transform="translate(550, -80)">
             <circle cx="0" cy="0" r="20" fill="url(#goldCoin)" stroke="#F57F17" strokeWidth="1" />
             <text x="-6" y="6" fontSize="16" fill="#E65100" fontWeight="bold">$</text>
           </g>
        </g>

      </svg>
    </div>
  );
};








function Hero() {
  return (
    <div className="h-[90vh] w-screen flex">
        <div className="p-1 w-full h-full">
            <div className="bg-amber-500 h-full">
                <ReceiptShockAnimation />
            </div>
        </div>
        <div className="p-1 w-full h-full">
            <div className="bg-amber-500 h-full">
                <DespairAnimation />
                {/* <MoneySenseHeroAnimation /> */}
            </div>
        </div>
    </div>
  )
}

export default Hero