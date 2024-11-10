// pages/index.tsx
import ResumeBuilder from './components/ResumeBuilder';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <ResumeBuilder />
    </div>
  );
};

export default Home;
