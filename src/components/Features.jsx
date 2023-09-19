export default function Features() {
  const featuresItem = [
    {
      img: "/images/f1.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f2.svg",
      starImg: "/images/star.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f3.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f4.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f5.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f6.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f7.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f8.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
    {
      img: "/images/f9.svg",
      title: "Browsing Plugin",
      description:
        "Search and summarize the web. Gain immediate and updated knowledge.",
    },
  ];

  return (
    <div className="bg-[url('/images/featuresBg.svg')] px-3 lg:px-32">
      <h1 className="text-4xl font-bold text-center py-28">Features</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {featuresItem.map((f, i) => (
          <div className="card rounded-3xl" key={i}>
            <div className="flex justify-center">
              <img src={f.img} alt="" />
            </div>
            <div className="">
              <h1 className="flex gap-3 items-center justify-center text-2xl font-bold">
                {f.title}
                <img src={f.starImg} alt="" />
              </h1>
              <p className="pt-6 text-base ps-10 pb-11">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
