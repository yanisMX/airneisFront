import Slider from './components/Slider';
import Categories from './components/Categories';
const Home = () => {
  return (
    <>
   
        <Slider />
        <p className='text-2xl font-bold text-center pt-4'>Venant des hautes terres d'écosse <br/>
        Nos meubles sont immortels</p>
        <Categories />
    </>
  );
}

export default Home;