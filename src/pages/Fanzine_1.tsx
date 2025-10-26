import { ArrowBackIcon } from "@/components/ui/icons/akar-icons-arrow-back";
import { useState} from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
// import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Fanzine1() {
  const [numPages, setNumPages] = useState<number | null>(null);
//    const book = useRef<HTMLDivElement | null>(null);

  const PAGE_WIDTH = 500;
  const PAGE_HEIGHT = 700;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#00f5d4] relative overflow-hidden">
      {/* Flipbook container */}
      <div className="flex justify-center items-center mt-16 p-6 rounded-2xl shadow-lg">
        <Document
          file="/laprima.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Hey dacci il tempo!...</p>}
        >
          {numPages && (
            <HTMLFlipBook
              width={PAGE_WIDTH}
              height={PAGE_HEIGHT}
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
                    width: PAGE_WIDTH,
                    height: PAGE_HEIGHT,
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    width={PAGE_WIDTH}
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
      <a href="/">
      <div className="!rounded-none mt-10 text-sora p-0.5 border border-black !bg-[#00f5d4] text-black transition-all duration-200 text-sm
        shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_rgba(0,0,0)]
        hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none !hover:border-black">
        <ArrowBackIcon />
      </div>
      </a>
    </div>
  );
}
