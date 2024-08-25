import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 z-10 h-full w-full bg-gradient-to-br from-black to-blue-600"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-br from-black to-blue-600"></div>

      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />  
        <About />
      </div>
    </div>
  );
};
export default App;
