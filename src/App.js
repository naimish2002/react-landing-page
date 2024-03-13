import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div>
      <div className='flex-wrap bg-white w-full shadow-md sticky top-0 z-[20]'>
        <Header />
      </div>

      <main className='flex flex-col gap-y-5'>
        <Home />
        <Body />
      </main>

      <div className='mt-8 md:mt-24'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
