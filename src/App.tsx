import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LabSteps from './components/LabSteps';
import SourceCode from './components/SourceCode';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      <ParticleField />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LabSteps />
        <SourceCode />
        <Footer />
      </div>
    </div>
  );
}
