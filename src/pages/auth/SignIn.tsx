// http://preview.themeforest.net/item/authfy-responsive-login-and-signup-page-template/full_screen_preview/23182208
import pix from "../../assets/slider2.webp";
import { BsFacebook, BsTwitter, BsGoogle, BsCamera } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { createUser } from "../../global/GlobalState";
import { signInUser } from "../../api/authAPIs";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { email, password } = data;

    signInUser({ email, password }).then((res: any) => {
      if (res) {
        Swal.fire({
          title: "Welcome back on the platform😊",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });

        navigate("/");
        dispatch(createUser(res));
      } else {
        Swal.fire({
          title: "Error occured while signing in",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          icon: "error",
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        navigate("/sign-in");
      }
    });
  });

  return (
    // container
    <div
      className="w-full h-[100vh] flex bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${pix})` }}
    >
      {/* cover */}
      <div className="w-full h-[100vh] bg-[#080707] bg-opacity-30 flex flex-col justify-center items-center">
        {/* Title */}
        <div className="m-5">
        <div className=" font-bold text-[20px] text-center leading-4 text-white">FRAKIES <br/> <span className="text-[18px] text-gray-300">bags</span></div>
        </div>

        {/* card */}
        <div className="">
          {/* top */}
          <div className="w-[580px] h-[31px] rounded-t-[10px] bg-[#737171] flex items-center">
            <div className="w-[13px] h-[13px] bg-orange-500 ml-3 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-blue-500 ml-1 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-rose-500 ml-1 rounded-[50%]"></div>
          </div>

          {/* Box */}
          <div className="w-[580px] flex">
            {/* left */}
            <div className="w-[40%] px-7 flex flex-col items-center justify-center bg-[dodgerblue] py-[20px]">
              {/* logo */}
              <div className="">
              <div className=" font-bold text-[20px] text-center leading-4 ">FRAKIES <br/> <span className="text-[18px] text-gray-300">bags</span></div>
              </div>
              {/* text  */}
              <div className="text-[12px] font-bold text-white mt-5 mb-3">
                Login using social media to get quick access
              </div>
              {/* social Buttons */}
              <div className=" flex items-center justify-center px-2 w-[100%] h-[36px] bg-gray-600 text-[12px] rounded-lg mt-3 text-white cursor-pointer">
                <div className="mr-2">
                  <BsFacebook />
                </div>
                Signin with facebook
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-green-700 text-[12px] rounded-lg mt-3 text-white cursor-pointer">
                <div className="mr-2">
                  <BsTwitter />
                </div>
                Signin with twitter
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-rose-600 text-[12px] rounded-lg mt-3 text-white cursor-pointer">
                <div className="mr-2">
                  <BsGoogle />
                </div>
                Signin with google
              </div>
            </div>

            {/* right */}
            <form
              className="w-[60%] flex flex-col items-center bg-white justify-center p-7"
              onSubmit={onHandleSubmit}
            >
              {/* title */}
              <div className="font-bold text-[18px] text-rose-600 mb-5">
                Sign Up for Free!
              </div>

              {/* inputs */}

              {/* email */}
              <div className="border-b-2 h-[40px] w-full mt-6">
                <input
                  className=" w-full outline-none placeholder: text-[13px]"
                  placeholder="Email Address"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <div className="text-[10px] text-rose-600 text-end">
                    error please input email!
                  </div>
                )}
              </div>
              {/* password */}
              <div className="border-b-2 h-[43px] w-full mt-6">
                {/* actual inputs */}
                <div className="flex">
                  <input
                    className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
                    placeholder="password"
                    {...register("password")}
                  />
                  <BsCamera className="text-rose-600 cursor-pointer" />
                </div>
                {/* error */}
                {errors.password?.message && (
                  <div className="text-[10px] text-rose-600 text-end mb-3">
                    error please input password!
                  </div>
                )}
              </div>

              {/* Button */}
              <button
                className="w-full bg-rose-700 h-[40px] rounded-md text-white text-[14px] cursor-pointer mt-4 "
                type="submit"
              >
                {" "}
                Sign In
              </button>

              {/* to Signin */}
              <Link to="/register">
                <div className=" text-rose-700 text-[13px] cursor-pointer mt-4 ">
                  Don't have an account?
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
