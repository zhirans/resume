import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import data from './constants/resumeData.json';
import Header from './component/Header';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Header data={data.main} />
      <About data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      {/* <Testimonials data={data.testimonials} /> */}
      <Contact data={data.main} />
      <Footer />
    </div>
  );
}

export default App;
