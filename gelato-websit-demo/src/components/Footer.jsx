import {useState} from "react";
import {FaAngleRight} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa";
import {IoLogoYoutube} from "react-icons/io5";
import {FaChevronDown} from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState({
    openDemand: false,
    openIntegration: false,
    openSelling: false,
    openCompany: false,
  });
  const {openDemand, openIntegration, openSelling, openCompany} = open;

  const handleOpen = (section) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [section]: !prevOpen[section],
    }));
  };

  return (
    <footer className="bg-black text-white ">
      <div className="max-w-screen-xl mx-auto px-9 py-12 grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="space-y-3">
          <img src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg" alt="" />
          <p className="text-sm">
            Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
          </p>
          <button className="border pb-2 bg-white text-black hover:bg-gray-200  px-4 font-bold text-sm  py-1 rounded-3xl">Get Started</button>
          <p className="md:block hidden">Get the app</p>
          <div className="md:flex gap-2 mt-2 hidden">
            <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" alt="app-store-img" className="cursor-pointer" />
            <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" alt="play-store-img" className="cursor-pointer" />
          </div>
        </div>
        <div className="hidden lg:block w-[65vw] -translate-y-6  ">
          <div className="mt-5 md:-ml-20 flex justify-end gap-9">
            <p>Find Gelato on:</p>
            <div className="flex justify-between gap-9">
              <FaInstagram className="cursor-pointer text-[1.6rem]" />
              <FaFacebookF className="cursor-pointer text-2xl" />
              <FaTiktok className="cursor-pointer text-2xl" />
              <FaLinkedinIn className="cursor-pointer text-[1.7rem]" />
              <IoLogoYoutube className="cursor-pointer text-3xl" />
            </div>
          </div>
          <div className=" hidden lg:flex justify-between space-y-4 md:ml-5 md:w-full xl:pr-40">
            <div></div>
            <div>
              <h2 className="font-bold flex items-center gap-1">Print on demand</h2>
              <div className="text-[.7rem] flex flex-col gap-1 my-2">
                <span className=" cursor-pointer hover:text-gray-400 ">What is print on demand?</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Shipping and delivery</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Product catalog</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Dropshipping products</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Pro sellers</span>
                <span className=" cursor-pointer hover:text-gray-400 ">White label products</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Returns policy</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Global, yet local</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Sustainability</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Support</span>
              </div>
            </div>
            <div>
              <h2 className="font-bold flex items-center gap-1">Integration</h2>
              <div className="text-[.7rem] flex flex-col gap-1 my-2">
                <span className=" cursor-pointer hover:text-gray-400 ">Shopify</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Etsy</span>
                <span className=" cursor-pointer hover:text-gray-400 ">WooCommerce</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Wix</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Squarespace</span>
                <span className=" cursor-pointer hover:text-gray-400 ">BigCommerce</span>
                <span className=" cursor-pointer hover:text-gray-400 ">API</span>
              </div>
            </div>
            <div>
              <h2 className="font-bold flex items-center gap-1">Start Selling</h2>
              <div className="text-[.7rem] flex flex-col gap-1 my-2">
                <span className=" cursor-pointer hover:text-gray-400 ">What is print on demand?</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Product catalog</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Shipping and delivery</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Dropshipping products</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Pro sellers</span>
                <span className=" cursor-pointer hover:text-gray-400 ">White label products</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Shipping and delivery</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Dropshipping products</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Pro sellers</span>
                <span className=" cursor-pointer hover:text-gray-400 ">White label products</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Returns policy</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Global, yet local</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Sustainability</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Support</span>
              </div>
            </div>
            <div>
              <h2 className=" font-bold flex items-center gap-1 ">Company</h2>
              <div className="text-[.7rem] flex flex-col gap-1 my-2">
                <span className=" cursor-pointer hover:text-gray-400 ">Pro sellers</span>
                <span className=" cursor-pointer hover:text-gray-400 ">White label products</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Returns policy</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Global, yet local</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Sustainability</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Support</span>
                <span className=" cursor-pointer hover:text-gray-400 ">What is print on demand?</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Product catalog</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Shipping and delivery</span>
                <span className=" cursor-pointer hover:text-gray-400 ">Dropshipping products</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:hidden space-y-4 md:ml-5 md:w-full">
          <div>
            <h2 onClick={() => handleOpen("openDemand")} className="font-extrabold text-xl flex items-center gap-1 hover:text-gray-400 cursor-pointer">
              {!openDemand ? <FaAngleRight /> : <FaChevronDown />}
              Print on demand
            </h2>
            {openDemand ? (
              <div className="text-sm flex flex-col pl-5 gap-1 my-2">
                <span>What is print on demand?</span>
                <span>Product catalog</span>
                <span>Shipping and delivery</span>
                <span>Dropshipping products</span>
                <span>Pro sellers</span>
                <span>White label products</span>
                <span>Returns policy</span>
                <span>Global, yet local</span>
                <span>Sustainability</span>
                <span>Support</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <h2 onClick={() => handleOpen("openIntegration")} className="font-extrabold text-xl flex items-center gap-1 hover:text-gray-400 cursor-pointer">
              {!openIntegration ? <FaAngleRight /> : <FaChevronDown />}
              Integration
            </h2>
            {openIntegration ? (
              <div className="text-sm flex flex-col pl-5 gap-1 my-2">
                <span>Shopify</span>
                <span>Etsy</span>
                <span>WooCommerce</span>
                <span>Wix</span>
                <span>Squarespace</span>
                <span>BigCommerce</span>
                <span>API</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <h2 onClick={() => handleOpen("openSelling")} className="font-extrabold text-xl flex items-center gap-1 hover:text-gray-400 cursor-pointer">
              {!openSelling ? <FaAngleRight /> : <FaChevronDown />}
              Start Selling
            </h2>
            {openSelling ? (
              <div className="text-sm flex flex-col pl-5 gap-1 my-2">
                <span>What is print on demand?</span>
                <span>Product catalog</span>
                <span>Shipping and delivery</span>
                <span>Dropshipping products</span>
                <span>Pro sellers</span>
                <span>White label products</span>
                <span>Returns policy</span>
                <span>Global, yet local</span>
                <span>Sustainability</span>
                <span>Support</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <h2 onClick={() => handleOpen("openCompany")} className="font-extrabold text-xl flex items-center gap-1 hover:text-gray-400 cursor-pointer">
              {!openCompany ? <FaAngleRight /> : <FaChevronDown />}
              Print on demand
            </h2>
            {openCompany ? (
              <div className="text-sm flex flex-col pl-5 gap-1 my-2">
                <span>Pro sellers</span>
                <span>White label products</span>
                <span>Returns policy</span>
                <span>Global, yet local</span>
                <span>Sustainability</span>
                <span>Support</span>
                <span>What is print on demand?</span>
                <span>Product catalog</span>
                <span>Shipping and delivery</span>
                <span>Dropshipping products</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <p className="block gap-2 mt-2 md:hidden">Get the app</p>
          <div className="flex gap-2 mt-2 md:hidden">
            <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" alt="app-store-img" className="cursor-pointer" />
            <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" alt="play-store-img" className="cursor-pointer" />
          </div>
        </div>
        <div className=" lg:hidden space-y-6 mt-5 md:-ml-20 md:w-full">
          <p>Find Gelato on:</p>
          <div className="flex justify-between text-4xl">
            <FaInstagram className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaTiktok className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <IoLogoYoutube className="cursor-pointer" />
          </div>
          <div></div>
        </div>
        <div className=" lg:hidden p-[8px] border-2 w-[200px] max-h-[40px] lg:w-[300] mt-5">
          <select className="bg-black w-full outline-none" id="language" name="language">
            <option className="bg-transparent flex justify-between" value="en">
              English (India)
            </option>
            <option className="bg-transparent" value="es">
              Spanish
            </option>
            <option>English (Canada)</option>
            <option>English (United Kingdom)</option>
            <option>English (Australia)</option>
            <option>French</option>
            <option>German</option>
            <option>Chinese</option>
            <option>Dansk</option>
            <option>Norsk</option>
            <option>Chinese</option>
          </select>
        </div>

        <div className="space-y-3 lg:hidden md:ml-9 md:w-screen md:flex md: items-center md:gap-3">
          <div></div>
          <div>Contact us</div>
          <div>Legal</div>
          <div>Privacy policy</div>
          <div>Cookie policy</div>
          <div>API terms</div>
          <div>Sitemap</div>
        </div>
      </div>
      <div className="flex justify-between px-20 -translate-y-5">
        <div className="space-y-3 text-[.8rem] hidden lg:flex lg:items-center gap-3 px-7 ">
          <div></div>
          <div className="flex items-center gap-3">
            Contact us <p className="h-4 w-[1px] bg-white"></p>
          </div>
          <div className="flex items-center gap-3">
            Legal<p className="h-4 w-[1px] bg-white"></p>
          </div>
          <div className="flex items-center gap-3">
            Privacy policy<p className="h-4 w-[1px] bg-white"></p>
          </div>
          <div className="flex items-center gap-3">
            Cookie policy<p className="h-4 w-[1px] bg-white"></p>
          </div>
          <div className="flex items-center gap-3">
            API terms<p className="h-4 w-[1px] bg-white"></p>
          </div>
          <div className="flex items-center gap-3">
            Sitemap
          </div>
        </div>
        <div className=" hidden lg:block p-[8px] border-2 w-[200px] max-h-[40px] lg:w-[300] mt-5">
          <select className="bg-black w-full outline-none" id="language" name="language">
            <option className="bg-transparent flex justify-between" value="en">
              English (India)
            </option>
            <option className="bg-transparent" value="es">
              Spanish
            </option>
            <option value="zh">English (Canada)</option>
            <option value="zh">English (United Kingdom)</option>
            <option value="zh">English (Australia)</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="zh">Dansk</option>
            <option value="zh">Norsk</option>
            <option value="zh">Chinese</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
