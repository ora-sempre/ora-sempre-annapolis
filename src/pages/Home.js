import Hero from '../components/Hero';
import SecondInformative from '../components/SecondInformative';
import TechnologySection from '../components/TechnologySection';
import FacialsComponent from '../components/FacialsComponent';
import VideoDr from '../components/VideoDr';

const Home = () => {
  return (
    <div>
      <Hero />
      <FacialsComponent />
      <VideoDr />
      <TechnologySection />
      <SecondInformative />
    </div>
  );
};

export default Home;
