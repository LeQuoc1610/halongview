import Banner from './component/Banner/Banner';
import Slickimg from './component/slickimg/Slickimg';
import Halongone from './component/Halongone/Halongone';
import Halongtwo from './component/Halongtwo/Halongtwo';
import Intro from './component/Intro/Intro';
import Quymo from './component/Quymo/Quymo';
import Matbangduan from './component/Matbangduan/Matbangduan';
import CanhoMau from './component/CanhoMau/CanhoMau';
import InteriorGallery from './component/InteriorGallery/InteriorGallery';
import Tienich from './component/Tienich/Tienich';
import VideoSection from './component/VideoSection/VideoSection';
import ContactSection from './component/ContactSection/ContactSection';
import NewsSlider from './component/NewsSlider/NewsSlider';
import Testimonial from './component/Testimonial/Testimonial';
import Bottom from './component/Bottom/Bottom';
import FloatingButtons from './component/FloatingButtons/FloatingButtons';
import DowloadButtons from './component/DownloadButton/DownloadButton';

function App() {
  return (
    <div>
      <Banner />
      <main className='main-content'>
        <Slickimg />
        <Halongone />
        <Halongtwo />
        <Intro />
        <Quymo />
        <Matbangduan />
        <CanhoMau />
        <InteriorGallery />
        <Tienich />
        <VideoSection />
        <ContactSection />
        <NewsSlider />
        <Testimonial />
      </main>
      <Bottom />
      <FloatingButtons />
      <DowloadButtons />
    </div>
  );
}


export default App;
