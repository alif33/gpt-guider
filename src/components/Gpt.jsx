/* eslint-disable react/no-unescaped-entities */
export default function Gpt() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 px-6 lg:px-32 pt-14 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="pb-3 text-4xl font-bold">GPT Prof:</h1>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">
              Real Time, Interactive Conversations:
            </span>
          </div>
          <p className="ps-7">
            Experience a seamless and dynamic learning journey through real-time
            voice conversations with Chat GPT. It's like having a personal tutor
            at your fingertips.
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Accessibility for All:</span>
          </div>
          <p className="ps-7 pr-4">
            Our platform is designed with inclusivity in mind. Whether you
            prefer text-based or voice-based learning, our solution caters to
            your needs, making education accessible to all students.
          </p>
        </div>
        <div className="w-full pt-6 lg:pt-0">
          <img src="/images/gptImg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
