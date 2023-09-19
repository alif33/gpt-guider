export default function Qna() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 px-6 lg:px-32 pt-14 lg:pt-28 lg:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="pb-3 text-4xl font-bold">
            Questions & Answers Generator:
          </h1>
          <div className="flex items-start gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" className="pt-2" alt="" />
            <span className="text-lg font-medium">
              generates diverse test questions for self-assessment purposes.
              These questions cover various topics, ensuring comprehensive
              understanding and preparation for exams or assessments.:
            </span>
          </div>
        </div>
        <div className="w-full pt-6 lg:pt-0">
          <img src="/images/QNA.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
