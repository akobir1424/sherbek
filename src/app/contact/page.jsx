import Footer from "../../components/footer";
import "./contact.css";
export default function contact() {
  return (
    <div className="">
      <div className="mt-[100px] text-center">
        <button className="text-[#12F7D6] element bor border w-[400px] text-[32px] h-[70px] border-[#12F7D6]">
          Send me a message
        </button>
      </div>
      <div className="mt-[50px] ">
        <div className="justify-center gap-[30px] flex">
          <input
            className="border  outline-none w-[400px]  px-4 h-[40px] mt-[30px] text-white rounded-[8px] bg-inherit "
            type="text"
            placeholder="First name"
          />
          <input
            id="myInput"
            className="border outline-none w-[400px] px-4 h-[40px] mt-[30px] text-white rounded-[8px] bg-inherit "
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="justify-center gap-[30px] flex">
          <input
            className="border outline-none w-[400px] px-4 h-[40px] mt-[30px] text-white rounded-[8px] bg-inherit "
            type="text"
            placeholder="Enter your email address"
          />
          <input
            className="border outline-none  w-[400px] px-4 h-[40px] mt-[30px] text-white rounded-[8px] bg-inherit "
            type="text"
            placeholder="Give me a Fid-back"
          />
        </div>
      </div>
      <div className="w-[100%] h-[100px] flex justify-center mt-[200px] items-center border-t border-[#8f9190]">
        <Footer />
      </div>
    </div>
  );
}
