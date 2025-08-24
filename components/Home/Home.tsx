import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Services from './Services/Services';

const Home = () => {
   return (
      <div className="overflow-hidden">
         <Hero />
         <Services />
         <Resume />
         <Projects />
      </div>
   );
};

export default Home;
