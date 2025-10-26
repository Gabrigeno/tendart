import ElectricButton from '@/components/ElectricButton';
import { Marquee } from '@/components/Marquee';
import { TypeAnimation } from 'react-type-animation';

export default function Landing() {
  return (
    <div className="w-full min-h-screen bg-[#00f5d4] text-black relative overflow-hidden">
      {/* pattern geometrico di fondo */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 ">
        <div className="bg-[#ff0054] col-span-2 row-span-3 border-2 border-black"></div>
        <div className="bg-[#fffb00] col-start-5 row-start-2 row-span-4 border-2 border-black"></div>
      </div>
      {/* Wrapper verticale per testo + bottone */}
      <div className="flex flex-col h-screen justify-center md:justify-center md:items-start items-center md:pl-24 gap-6">
        <div className=' flex flex-wrap '>
        <TypeAnimation
          sequence={[
            'Benvenuto nel sito di Tendart',
            1000,
            'Benvenuto nel sito di FuoriRotta',
            1000,
            'Benvenuto nel sito di dei Grandi',
            1000,
            'Benvenuto nel sito di FuoriRottaZine',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '3em' }}
          repeat={Infinity}
          className="text-white text-center text-sora md:text-left font-extrabold z-10"
          />
        </div>
        {/* Bottone */}
        <div className='mt-12 z-10 !text-sora'>
          <ElectricButton buttonText='Vai alle Fanzine!' />
        </div>
      </div>
        <Marquee span1="IL SITO È ANCORA IN ALLESTIMENTO " span2="ASPETTANDO LE GRAFICHE " span3="DI @fuckingmodifiè "/>
        <div className='flex justify-center content-center z-[100] relative'>
          <img src="landing.png" />
        </div>
        <footer className=" relative z-[100] bg-white m-4 dark:bg-gray-800 border-4 border-black  text-sora">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Tendart</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://instagram.com/_tendart_/?hl=it" className="hover:underline me-4 md:me-6">Insta!</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@TendArtLab" className="hover:underline me-4 md:me-6">YouTube</a>
                </li>
                <li>
                    <a href="https://soundcloud.com/tendart" className="hover:underline me-4 md:me-6">SoundCloud</a>
                </li>
                <li>
                    <a href="mailto:tendart01@gmail.com" className="hover:underline">Contattaci</a>
                </li>
            </ul>
            </div>
        </footer>
    </div>
  );
}
