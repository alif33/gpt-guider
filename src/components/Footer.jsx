export default function Footer() {
  return (
    <div className="bg-[url('/images/featuresBg.svg')] -mt-1 pt-14 lg:pt-28 lg:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 ps-10 lg:px-32">
        <div className="">
          <img src="/images/GPT Guider.svg" alt="" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">Home</span>
          <span className="py-6 text-base">Features</span>
          <span className="text-base">Pricing</span>
          <span className="pt-6 text-base">About us</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">Terms</span>
          <span className="text-base py-6">Privacy Policy</span>
          <span className="text-base">Terms and Conditions</span>
          <span className="text-base py-6">Copyright Policy</span>
          <span>Security</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">Support</span>
          <span className="py-6 text-base">FAQs</span>
          <span className="text-base">Contact us</span>
          <span className="pt-6 text-base">Help</span>
        </div>
        <div className="">
          <span className="text-lg font-bold">Follow us</span>
          <div className="flex gap-3 pt-6">
            <a href="">
              <img src="/images/Twitter.svg" alt="" />
            </a>
            <a href="">
              <img src="/images/facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="/images/Linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-5 lg:py-10 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1220"
          height="62"
          viewBox="0 0 1220 62"
          fill="none"
        >
          <g filter="url(#filter0_d_114_7647)">
            <path
              d="M30 27.0001L1190 27"
              stroke="white"
              strokeOpacity="0.3"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_114_7647"
              x="0"
              y="0.5"
              width="1220"
              height="61.0001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.305882 0 0 0 0 0.890196 0 0 0 0 0.615686 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_114_7647"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_114_7647"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="flex justify-center pb-4 lg:pb-0">
        <span className="text-sm font-normal">
          Copyright © 2023 GPT Guider All rights reserved
        </span>
      </div>
    </div>
  );
}
