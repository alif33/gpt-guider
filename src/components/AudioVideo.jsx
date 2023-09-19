export default function AudioVideo() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 px-6 lg:px-32 pt-10 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full">
          <img src="/images/mediaImg.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center pt-5 lg:pt-0">
          <h1 className="pb-6 text-4xl font-bold">
            Audio & video Transcription and summarizing:
          </h1>
          <div className="flex items-start gap-3">
            <img src="/images/pluginDot.svg" className="pt-2" alt="" />
            <span className="text-lg font-medium">
              upload an audio or Mp4 file and get the transcribed text with a
              summary.
            </span>
          </div>
          <div className="flex items-start gap-3 py-6">
            <img src="/images/pluginDot.svg" className="pt-2" alt="" />
            <span className="text-lg font-medium">
              Upload a video and get the transcribed text with a summary.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
