import { LuPlane } from "react-icons/lu";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiCheckShield } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";

const Guaranty = () => {
  return (
    <div className="w-full h-[120px] bg-black flex justify-center items-center text-white">
      <div className="w-[90%] flex justify-between items-center uppercase">
        <div className="flex justify-center items-center gap-4">
          <div>
            <LuPlane className="text-[45px]" />
          </div>
          <div className="text-[18px]">
            world wide <br />
            free shipping
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 meduim:hidden">
          <div>
            <AiOutlineLoading3Quarters className="text-[45px] " />
          </div>
          <div className="text-[18px]">
            free returns <br />
            assured <br />
            reimbursement
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <div>
            <VscSettingsGear className="text-[45px]" />
          </div>
          <div className="text-[18px]">
            24 months waranty <br />
            for leather
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 meduim:hidden">
          <div>
            <BiCheckShield className="text-[45px]" />
          </div>
          <div className="text-[18px]">
            100% safe & secure <br />
            checkout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guaranty;
