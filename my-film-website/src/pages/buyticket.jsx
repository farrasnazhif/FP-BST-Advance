import Navbar from '../components/Organisms/Navbar'
import { useLocation } from 'react-router-dom'
import Button from '../components/Atoms/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlices.js';
import MovieList from '../components/Organisms/MovieList.jsx';

const BuyTicketPage = () => {
  const location = useLocation();
  const { moviePath, movieTitle, movieDescription } = location.state || {};
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    dispatch (addToCart({
      qty: 1,
      movieTitle: movieTitle
    }));
  }

  return (
    <main className='min-h-screen bg-brandDark'>
       <Navbar />
       <div className="container grid grid-cols-1 md:grid-cols-2
         min-h-[400px] mt-12">
          <div className="flex flex-col justify-center
          pt-14 md:py-0 xl:max-w-[500px] items-center mt-8">
            {/* movie */}
              {moviePath ? (
              <img src={`https://image.tmdb.org/t/p/w500${moviePath}`} alt="Selected" className='w-[300px] mb-4'/>
            ) : (
              <p>No image selected</p>
            )}
            <div className='flex justify-between gap-4 items-center'>
            <h2 className="text-white">
              $20
            </h2>
            <Button 
            classname="bg-cyan-800 w-[200px]" 
            type="submit"
            onClick={handleAddToCart}
            >
            
                Buy Ticket
            </Button>
            </div>
          </div>
          <div className="flex flex-col mt-8 items-center ">
            <h1 className="text-2xl lg:text-3xl font-bold text-cyan-500">
              {movieTitle}
            </h1>
            <p className='text-sm mt-2 text-brandWhite text-center'>
              {movieDescription}
            </p>
            <div className='w-full mt-16 text-brandWhite flex flex-col justify-start'>
            <h3 className='text-xl mt-2 text-cyan-500 font-semibold'>TICKET:</h3>
              {Array.isArray(carts) && carts.length > 0 ? (
                carts.map((cart) => (
                  <div key={cart.movieTitle} className='grid grid-cols-2'>
                    <h4>{cart.movieTitle},</h4>
                    <p>Qty: {cart.qty}</p>
                  </div>
                ))
              ) : (
                <p>No tickets in the cart</p>
              )}
            </div>
          </div>
        </div>
    </main>
  )
}

export default BuyTicketPage;
