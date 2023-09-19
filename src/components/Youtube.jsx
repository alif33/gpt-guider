export default function Youtube() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 px-6 lg:px-32 pt-10 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full">
          <img src="/images/youtubeImg.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center pt-5 lg:pt-0">
          <h1 className="pb-6 text-4xl font-bold">
            YouTube video Transcription and summarizing:
          </h1>
          <div className="flex items-start gap-3">
            <img src="/images/pluginDot.svg" className="pt-2" alt="" />
            <span className="text-lg font-medium">
              Transcribe and summarize you tube videos just by provide URL of
              video.
            </span>
          </div>
          <div className="flex items-start gap-3 py-6">
            <img src="/images/pluginDot.svg" className="pt-2" alt="" />
            <span className="text-lg font-medium">
              Save your time and effort and say good bye to manual transcription
              and time-consuming video content analysis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
