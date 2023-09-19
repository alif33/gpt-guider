export default function Diagram() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 px-6 lg:px-32 pt-14 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="pb-3 text-4xl font-bold">Diagram plugin:</h1>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Enhanced Understanding:</span>
          </div>
          <p className="ps-7">
            Visual representation of information helps students understand
            complex topics and see the bigger picture.
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Efficient Study:</span>
          </div>
          <p className="ps-7 pr-4">
            Instead of manually creating mind maps, students can save time by
            letting the AI generate initial maps which they can then customize.
          </p>
          <div className="flex items-center gap-3 pt-6 pb-3">
            <img src="/images/pluginDot.svg" alt="" />
            <span className="text-lg font-bold">Memory Retention:</span>
          </div>
          <p className="ps-7 pr-4">
            Visual aids like mind maps and diagrams are known to improve memory
            retention, making it easier for students to recall information
            during exams.
          </p>
        </div>
        <div className="w-full pt-6 lg:pt-0 flex items-center">
          <img src="/images/diagramImg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
