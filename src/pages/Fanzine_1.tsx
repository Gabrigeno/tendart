import { ArrowBackIcon } from "@/components/ui/icons/akar-icons-arrow-back";
import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import { X } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Fanzine1() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 700 });
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const calculateDimensions = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      const padding = mobile ? 64 : 48;

      if (mobile) {
        const width = Math.min(window.innerWidth - padding, 320);
        const height = width * 1.4;
        setDimensions({ width, height });
        setShowModal(true);
      } else {
        const width = 500;
        const height = 700;
        setDimensions({ width, height });
      }
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#00f5d4] relative overflow-hidden px-4 py-8">
      {/* Modale Mobile */}
      {isMobile && showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            <div className="mt-2 !text-sora">
              <h3 className="text-lg font-semibold mb-3 text-black">Benvenuto/a!</h3>
              <p className="text-gray-700 leading-relaxed">
                Sempre col telefono in mano stai eh! <br/>
              </p>
                <p className="text-gray-700 leading-relaxed">
                Questo sito ti consigliamo di aprirlo da pc <br/>
                Su alcuni smartphone potrebbe dare dei problemi <br/>
                </p>

            </div>
          </div>
        </div>
      )}

      {/* Flipbook container */}
      <div className="flex justify-center items-center p-8 mt-8 md:mt-16 rounded-2xl shadow-lg">
        <Document
          file="/laprima.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p className="text-center p-4">Un secondo che carica...</p>}
        >
          {numPages && (
            <HTMLFlipBook
              width={dimensions.width}
              height={dimensions.height}
              showCover={false}
              usePortrait={false}
              drawShadow={true}
              flippingTime={900}
              className="flipbook-container"
              style={{
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              {...({} as any)}
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div
                  key={index}
                  className="page-wrapper flex justify-center items-center bg-white overflow-hidden"
                  style={{
                    width: dimensions.width,
                    height: dimensions.height,
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    width={dimensions.width}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="page-content"
                  />
                </div>
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      </div>

      <a href="/library">
        <div className="!rounded-none mt-6 md:mt-10 text-sora p-2 border border-black !bg-[#00f5d4] text-black transition-all duration-200 text-sm
          shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_rgba(0,0,0)]
          hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none !hover:border-black">
          <ArrowBackIcon />
        </div>
      </a>
    </div>
  );
}
