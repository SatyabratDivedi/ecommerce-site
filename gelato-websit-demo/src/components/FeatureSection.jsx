const FeatureSection = () => {
  return (
    <>
      {/* Why choose Gelato section */}

      <div className="bg-white text-black py-12 xl:px-12">
        <div className="  px-2 sm:px-6 lg:px-8 text-center lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className=" text-2xl md:text-4xl font-extrabold mb-8">Why choose Gelato</h2>
          <div className="grid md:grid-cols-2">
            {/* Left Section: Image */}
            <div className=" flex items-center justify-center">
              <div className=" w-full flex items-center justify-center">
                <img src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/" alt="Graphic Design"
                 className="md:w-[75%] lg:w-[85%] xl:w-[100%]" />
              </div>
            </div>

            {/* Right Section: Text */}
            <div className="text-left space-y-5 text-xl md:text-2xl px-4 md:flex md:flex-col md:justify-center">
              <div className="flex items-center space-x-2">
                <span>▻</span>
                <p className="font-semibold tracking-wider"> World's largest print-on-demand network</p>
              </div>
              <p className="text-base">140+ print partners in 32 countries. Gelato is a truly global service.</p>

              <div className="flex items-center space-x-3">
                <span>▻</span>
                <p className="font-semibold">Sell globally, produce locally</p>
              </div>
              <p className="text-base">Your products are produced close to your customers, wherever they are.</p>

              <div className="flex items-center space-x-3">
                <span>▻</span>
                <p className="font-semibold">100% free editing tools</p>
              </div>
              <p className="text-base">
                Create your custom products using our suite of <span className="underline">free tools.</span>
              </p>

              <div className="flex items-center space-x-3">
                <span>▻</span>
                <p className="font-semibold">60+ logistics partners</p>
              </div>
              <p className="text-base">Our global network of logistics partners ensures your products are delivered fast.</p>

              <div className="flex items-center space-x-3">
                <span>▻</span>
                <p className="font-semibold">High-quality products</p>
              </div>
              <p className="text-base">We partner with the world's leading brands to ensure the best quality products.</p>

              <div className="flex items-center space-x-3">
                <span>▻</span>
                <p className="font-semibold">Endless creativity with Shutterstock Images</p>
              </div>
              <p className="text-base">Access millions of images and graphics to create unique products you can sell in your store.</p>

              <div className="flex items-center space-x-3">
                <span>▻</span>
                <p className="font-semibold">1-click integration to the leading ecommerce platforms</p>
              </div>
              <p className="text-base">
                Connect your store to Gelato using <span className="underline">our integrations</span> with <span className="underline">Shopify, Etsy.</span> and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BusinessGrowthSection */}

      <div className="bg-[#f9f4ef] pb-5 px-2 md:px-12 lg:24 grid md:grid-cols-2 mx-auto xl:px-20">
        {/* Left Section */}
        <div className=" px-5 order-2 md:flex md:flex-col items-start justify-center  ">
          <h4 className="text-[1.25rem] text-gray-600 mb-2 font-semibold tracking-wider">For print on demand sellers</h4>
          <h1 className=" text-xl md:text-3xl lg:text-6xl lg:font-extrabold font-bold text-gray-900 mb-4 tracking-wide">Accelerate business growth with innovative design tools and apps</h1>
          <p className=" text-sm md:text-xl font-bold text-gray-700 mb-6 tracking-wider pr-20">See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
          <button className="bg-black pb-2 text-white px-4 hover:text-gray-300 font-semibold text-sm  py-1 rounded-3xl">Get Started</button>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:order-2 ">
          <div className=" md:p-4">
            <img src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/" alt="Business Growth Img"
             className="object-contain md:w-[80%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
