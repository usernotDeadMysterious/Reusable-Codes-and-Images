#In React / Next Js 

#Copy ParticleBackground.js to components 

#Import on Main page directly to see the effect 

#for better experience copy this code and paste on the page where u want to use in your app 

#Make sure you import ParticleBackground as component

# e.g import ParticleBackground from "./components/ParticleBackground";


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


if error occurs use "use client"
