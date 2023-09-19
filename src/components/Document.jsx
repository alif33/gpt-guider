export default function Document() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 px-6 lg:px-32 pt-7 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full">
          <img src="/images/docImg.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center pt-8 lg:pt-0">
          <h1 className="pb-6 text-4xl font-bold">DOCUMENT OCR AI:</h1>
          <div className="flex items-start gap-3">
            <img src="/images/pluginDot.svg" className="pt-2" alt="" />
            <span className="text-lg font-medium">
              converts scanned and handwritten texts into digital formats. high
              accuracy for both documents and handwritten content, streamlining
              data conversion and accessibility.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
