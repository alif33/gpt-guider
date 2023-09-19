/* eslint-disable react/no-unescaped-entities */

export default function Chat() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 px-6 lg:px-32 pt-14 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="pb-3 text-4xl font-bold">Chat With PDF:</h1>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Education:</span>
          </div>
          <p className="ps-7">
            Summarize textbooks, clarify concepts, prepare for exams, ask
            questions based on your books, and answer (MCQs).
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Research:</span>
          </div>
          <p className="ps-7 pr-4">
            Upload scientific papers and academic articles to obtain the
            information you need for your research.
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Any language:</span>
          </div>
          <p className="ps-7">
            You can upload PDFs in any language and receive answers in your
            preferred language.
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Sources included:</span>
          </div>
          <p className="ps-7">
            Every answer will include the sources of the relevant pages.
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Simple and Secure:</span>
          </div>
          <p className="ps-7">
            Fast, easy, free and secure! Files are stored in a secure cloud
            storage and will never be shared.
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">
              OCR Feature: save your time and effort
            </span>
          </div>
          <p className="ps-7">
            Quickly extract text from images or scanned documents shared by
            users, reducing manual data entry.
          </p>
          <p className="ps-7 pt-3">
            No need to write long question just scan or take photo of your
            question and get answers quickly.
          </p>
        </div>
        <div className="w-full pt-6 lg:pt-0 flex items-center">
          <img src="/images/Chatbot.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
