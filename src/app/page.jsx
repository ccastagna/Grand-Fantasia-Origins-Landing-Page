import Navbar from '../components/navbar';
import Home from '../components/home';
import News from '../components/news';
import Classes from '../components/classes';
import Features from '../components/features';
import Footer from '../components/footer';

export default function Main() {
  return (
    <main>
      <Navbar />
      <Home />
      <News />
      <Classes />
      <Features />
      <Footer />
    </main>
  );
}
