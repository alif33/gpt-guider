export default function Navbar() {
  return (
    <div className="flex justify-around items-center pb-10 lg:pb-28">
      <div className="">
        <img src="/images/GPT Guider.svg" alt="" />
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center text-base font-medium">
          <li>Home</li>
          <li className="ps-8">Features</li>
          <li className="ps-8">Pricing</li>
          <li className="ps-8">About us</li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-8">
        <button className="px-8 py-3 btn">Sign in</button>
        <button className="px-8 py-3 btn_gradient">Sign up</button>
      </div>
    </div>
  );
}
