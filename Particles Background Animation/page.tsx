"use client";

import ParticleBackground from "./components/ParticleBackground";


export default function Home() {
  return (
    <>
      <div className="relative h-full w-full">
        {/* Background animation */}
        <div className="absolute inset-0 z-[-1]">
          <ParticleBackground />
        </div>

        {/* Content Container with Glass Effect */}
        <div className="relative z-10 mx-auto max-w-7xl  ">
          <div className="rounded-2xl bg-white/10 dark:bg-black/5 backdrop-blur-xs shadow-lg p-2 md:p-3 space-y-6">
            {/* Other Components or Main Page components starts here  */}
          </div>
        </div>
      </div>
    </>
  );
}
