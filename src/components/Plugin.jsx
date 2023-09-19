export default function Plugin() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] px-6 lg:px-32 pt-5 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full">
          <img src="/images/pluginImg.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="pb-6 text-4xl font-bold">Browsing Plugin:</h1>
          <div className="flex items-center gap-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-medium">
              Search and summarize the web .
            </span>
          </div>
          <div className="flex items-center gap-3 py-6">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-medium">
              Gain immediate and updated knowledge .
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-medium">
              Generate articles, from one or more URLs .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
