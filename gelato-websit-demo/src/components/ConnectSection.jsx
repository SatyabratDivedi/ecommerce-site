const ConnectSection = () => {
  return (
    <>
      {/* GelatoConnect */}

      <div className=" py-16 px-5 grid md:grid-cols-2  max-w-[1500px] mx-auto">
        {/* Left Section */}
        <div className="md:flex md:px-20 md:flex-col md:justify-center px-5 order-2 md:order-1">
          <h4 className="text-[1.25rem] text-gray-600 mb-2 font-semibold tracking-wider">For print producers</h4>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-wider">GelatoConnect</h1>
          <p className=" text-sm md:text-xl font-bold text-gray-700 mb-6 tracking-wider">Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
          <button className="bg-black pb-2 md:w-[110px] text-white px-4 hover:text-gray-300 font-semibold text-sm  py-1 rounded-3xl">Learn more</button>
        </div>

        {/* Right Section */}
        <div className="mt-8  items-center">
          <div className="flex items-center justify-center p-4">
            <img src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/" />
          </div>
        </div>
      </div>

      {/* Meet GelatoConnect */}

      <div className="bg-[#f9f4ef] py-16 px-5 grid md:grid-cols-2 xl:px-20 mx-auto">
        {/* Left Section */}
        <div className="md:flex md:px-20 md:flex-col md:justify-center px-5 order-2 md:order-1">
          <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-wider">Meet GelatoConnect at Printing United</h1>
          <p className="text-sm text-gray-700 mb-6 tracking-wider">
            Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for
            businesses like yours.
          </p>
          <button className="bg-black pb-2 md:w-[150px] text-white px-4 hover:text-gray-300 font-semibold text-sm  py-1 rounded-3xl">Book a meeting</button>
        </div>

        {/* Right Section */}
        <div className="mt-8  items-center md:order-2">
          <div className="flex items-center justify-center p-4">
            <img src="https://a.storyblok.com/f/165154/1280x720/5d47159829/gelato-printing-united-2024.png/m/800x0/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectSection;
