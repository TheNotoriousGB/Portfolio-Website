import PROFILPIC from "../assets/20240823_135851000_iOS.jpg";

const Hero = () => {
return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Gabriel Bischof
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Informatikmittelschüler
                    </span>
                    <p>
                        <span className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            Ich bin ein Informatikmittelschüler aus der Schweiz und
                            begeistere mich für die Informatik und die Technologie. Ich bin
                            ein kreativer und leidenschaftlicher Entwickler, der sich
                            ständig weiterentwickelt und neue Technologien lernt.
                        </span>
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                    <img src={PROFILPIC} alt="Gabriel Bischof" className="h-60 w-60 lg:h-80 lg:w-80" />
                </div>
            </div>
        </div>
    </div>
);
};

export default Hero;
