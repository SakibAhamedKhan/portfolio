import Home from "./Pages/Home/Home";
import pexels from '../src/asset/pexels.mp4'
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
};

const particlesLoaded = (container) => {
    console.log(container);
};


  return (
    <div className="app" id="ripple">
        {/* <video className="" autoPlay loop muted>
          <source src={pexels}  type="video/mp4" />  
        </video>         */}
        
         <Home></Home>
         <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    
                    fpsLimit: 800,
                    interactivity: {
                        events: {
                            // onClick: {
                            //     enable: true,
                            //     mode: "push",
                            // },
                            onHover: {
                                enable: true,
                                mode: "snow",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#000000",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 10,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "triangle",
                        },
                        size: {
                            value: { min: 1, max: 7 },
                        },
                    },
                    detectRetina: false,
                }}
            />
    </div>
  );
}

export default App;
