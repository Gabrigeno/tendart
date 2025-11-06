import { useEffect, useState } from "react";
import { ArrowBackIcon } from "@/components/ui/icons/akar-icons-arrow-back";
import EjectTwoToneIcon from '@mui/icons-material/EjectTwoTone';
import FlyingPosters from "@/components/FlyingPosters";

const items = [
  'carousel/resizezine.jpg',
  'carousel/resize1.jpg',
  'carousel/resizehallo.jpg',
];

const svgBackground = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='826' height='99.1' viewBox='0 0 1000 120'%3E%3Crect fill='%23FFEB3B' width='1000' height='120'/%3E%3Cg fill='none' stroke='%23000000' stroke-width='3.6'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E`;
export default function Library() {
  const [showHint, setShowHint] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-cover bg-center p-4 md:p-8"
      style={{
        backgroundImage: `url("${svgBackground}")`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full h-screen flex flex-col md:flex-row items-center justify-between p-4 md:p-8">

        {/* Testo a sinistra */}
        <div className="flex flex-col items-start gap-4 w-full max-w-xl p-6">
          <div className="relative  md:p-4 !text-sora flex flex-col w-full text-white font-bold text-2xl md:text-3xl z-10 bg-[#0078d7] border-2 border-black">
              BOMBERONE GUSTATI LE FANZINE! ➡️
          </div>
          <hr className="relative my-3 h-[2px] w-full bg-[#00f5d4] border-1 z-10" />
            <a href="/fanzine_1" className="group">
            <button className="!rounded-none text-sora border-2 border-black dark:border-white !bg-[#00f5d4] text-black transition-all duration-300
              shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_rgba(0,0,0)]
              hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none !hover:border-black">
              ◆ FuoriRottaZine vol 1 (Evento Solaio)
            </button>
            </a>
            <a href="/fanzine_2" className="group">
              <button className="!rounded-none text-sora border-2 border-black dark:border-white !bg-[#00f5d4] text-black transition-all duration-300
              shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_rgba(0,0,0)]
              hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none !hover:border-black">
                ◆ FuoriRottaZine vol 2 (Evento Nimbus)
              </button>
            </a>
            <a href="/fanzine_3" className="group">
            <button className="!rounded-none text-sora border-2 border-black dark:border-white !bg-[#00f5d4] text-black hover:!text-white transition-all duration-300 text-sm
              shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_rgba(0,0,0)]
              hover:translate-x-[4px] hover:translate-y-[4px] hover:!bg-[#000000] hover:shadow-none !hover:border-black">
              ◆ FuoriRottaZine: Viaggio nel Regno Del Terrore! <br /> (Speciale di Halloween🧛)
            </button>
            </a>
            <a href="/">
            <div className="!rounded-none text-sora p-2 border border-black !bg-[#00f5d4] text-black transition-all duration-200
              shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_rgba(0,0,0)]
              hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none !hover:border-black">
              <ArrowBackIcon />
            </div>
            </a>
            </div>


        {/* Posters a destra */}
        <div className="relative hidden md:flex w-full md:w-1/2 h-64 md:h-screen mt-6 md:mt-0 flex justify-center items-center">
          {showHint && (
            <div className="absolute top-10 md:top-20 z-[9999] text-sora p-4 text-black font-bold bg-[#00f5d4] opacity-75 border-2 border-black animate-pulse shadow-[3px_3px_0px_0px_black]">
              Scrolla un po'
              <EjectTwoToneIcon/>
            </div>
          )}
          <FlyingPosters items={items} distortion={0.6}/>
        </div>

      </div>
    </div>
  );
}
