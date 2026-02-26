
import Image from 'next/image';
import Link from 'next/link';
import sitelogo from './Logo.webp'
export default function Navbar(){
  return (
    <nav className="z-50 flex items-center justify-between px-8 py-2 bg-transparent text-white h-16.25 w-full">
      <div className="flex items-center gap-2 cursor-pointer">
        <Link href="/"><Image src={sitelogo} alt='Logo' width="110" height="30"></Image></Link>
        
        
      </div>

      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 cursor-pointer justify-center">
        <p className=' hover:text-white'>Genre</p>
        <p className=' hover:text-white'>Country</p>
        <p className=' hover:text-white'>Movies</p>
        <p className=' hover:text-white'>TV-Series</p>
        <p className=' hover:text-white'>Top IMDb</p>
      </div>

      
      <div className="flex items-center gap-6">
        <Link href="/Search" className="hover:text-white transition"> Search</Link>
      </div>
    </nav>
  );
};

