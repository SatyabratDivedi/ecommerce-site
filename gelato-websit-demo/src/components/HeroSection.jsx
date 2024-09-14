import {MdOutlineStar} from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <section className=" px-5 md:px-10 md:py-10 pb-5 xl:px-24 bg-[#faf6ef] md:bg-white">
        <div className=" mx-auto flex flex-col-reverse md:flex-row items-center max-w-[1500px]">
          <div>
            <h1 className="  font-extrabold text-2xl md:text-4xl mt-5 xl:text-6xl">Print on demand for your ecommerce business</h1>
            <p className=" text-[1rem] md:text-[1.5rem] font-semibold tracking-wider my-6">Sign up for free and only pay for what you sell.</p>
            <p className="text-base">
              Turn your passion into profit with the world’s largest <span className="underline">print on demand</span> network.
            </p>
            <div className="space-x-4 my-6 flex ">
              <button className="bg-black pb-2 text-white px-4 hover:text-gray-300 font-semibold text-[.6rem] md:text-sm  py-1 rounded-3xl">Get started for free</button>
              <button className="border pb-2 border-black hover:bg-gray-200  px-4 font-semibold text-[.6rem] md:text-sm py-1 rounded-3xl">See our products</button>
            </div>
            <div className="flex flex-col gap-2 ">
              <img className="w-28" src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg" />
              <div className="flex">
                <MdOutlineStar className="text-[#46b99e] text-xl" />
                <MdOutlineStar className="text-[#46b99e] text-xl" />
                <MdOutlineStar className="text-[#46b99e] text-xl" />
                <MdOutlineStar className="text-[#46b99e] text-xl" />
                <MdOutlineStar className="text-[#46b99e] text-xl" /> <p className=" ml-3">4.8 / 5</p>
              </div>
              <p>based on 887 reviews</p>
            </div>
          </div>
          <div className=" w-full h-full mt-2">
            <img src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/" alt="Products" className="w-full h-auto hidden md:block" />
            <img src="https://a.storyblok.com/f/165154/1280x720/5ed0187b38/02_hp_top-banner_1280x720-white-version-1.jpg/m/" className="w-full h-auto md:hidden" />
          </div>
        </div>
      </section>
      <section className="bg-[#faf6ef] py-12 hidden md:block ">
        <div className="  container mx-auto md:flex bg-[#faf6ef] justify-between text-center md:text-left">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold">90%</h3>
            <p className="lg:text-2xl font-bold px-12 text-center">of all orders are produced locally</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold">90%</h3>
            <p className="lg:text-2xl font-bold px-12 text-center">of orders arrive within 5 days of ordering</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold">140+</h3>
            <p className="lg:text-2xl font-bold px-12 text-center">print providers across 32 countries</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
