import { FcGoogle } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";

const LogIn = () => {
  const { logInWithEmail, logInWithGoogle, logInWithGithub } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // LogIn with email and password
    logInWithEmail(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // LogIn With Google
  const handleLogInWithGoogle = () => {
    logInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Login With GitHub
  const handleLogInWithGithub = () => {
    logInWithGithub()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='flex flex-col mb-10'>
      <div className='flex-shrink-0'></div>
      <div className='flex-grow flex items-center justify-center'>
        <div className='max-w-md mx-auto w-full bg-white shadow-xl rounded-3xl sm:p-10 p-6'>
          <div className='text-center mb-6'>
            <p className='text-3xl font-bold'>Please Login</p>
          </div>
          <hr className='mb-6' />
          <form onSubmit={handleLogIn}>
            <div>
              <label
                className='text-sm font-semibold text-gray-600'
                htmlFor='email'
              >
                E-mail
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='email'
                name='email'
                required
                placeholder='Enter your email address'
              />
            </div>
            <div className='mt-4'>
              <label
                className='text-sm font-semibold text-gray-600 mt-4'
                htmlFor='password'
              >
                Password
              </label>
              <div className='relative'>
                <input
                  className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                  type={showPass ? "text" : "password"}
                  name='password'
                  required
                  placeholder='Enter your password'
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className='absolute top-4 right-3 cursor-pointer'
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className='mt-6'>
              <button
                className='w-full button-login py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 cursor-pointer text-xl font-semibold'
                type='submit'
              >
                <span>Login</span>
              </button>
            </div>
          </form>
          <div className='flex items-center justify-center mt-6'>
            <p className='text-sm text-gray-500'>
              Don&apos;t have an account?
              <Link
                to='/register'
                className='text-red-500 font-medium ml-1 hover:underline'
              >
                Register
              </Link>
            </p>
          </div>

          {/* Other Login Options */}
          <div>
            <p className='flex justify-center text-xs text-slate-500 mt-5'>
              Or Login with
            </p>
            <div>
              <div className='flex gap-3'>
                {/* Login with google */}
                <button
                  onClick={handleLogInWithGoogle}
                  className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
                >
                  <FcGoogle className='text-xl' />
                </button>

                {/* Login with Github */}
                <button
                  onClick={() => handleLogInWithGithub()}
                  className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
                >
                  <DiGithubBadge className='text-2xl' />
                </button>

                {/* Login with X or Twitter */}
                <button
                  //   onClick={() => handleLogInWithFacebook()}
                  className='mt-2 w-full h-12 rounded-md flex justify-center items-center font-medium gap-2 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]'
                >
                  <RiTwitterXLine className='text-2xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
