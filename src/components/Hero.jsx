const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-transparent overflow-hidden py-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-8">
            <div className="text-center md:text-left">
              <h1 className="pb-16 text-4xl tracking-tight lg:mt-10 lg:text-8xl">
                Willkommen auf meiner Portfolio Website
              </h1>
              <p className="text-4xl tracking-tight">
                Hier findest du wichtige Information und Projekte von mir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
