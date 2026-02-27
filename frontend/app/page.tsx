
import TrendingMovies from './Components/home'
import Navbar from './Components/navbar/page'


function page() {
  return (
    <div className='flex flex-col gap-3 bg-[#151A24]'>
        <Navbar/>
        <TrendingMovies />
    </div>
  )
}

export default page