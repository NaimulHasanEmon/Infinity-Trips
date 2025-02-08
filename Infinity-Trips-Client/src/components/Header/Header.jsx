import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logo = "https://i.ibb.co.com/2069S7d2/26.png";

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to='/' className='hover:text-teal-500 hover:bg-white'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/allTouristSpot'
          className='hover:text-teal-500 hover:bg-white'
        >
          All Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/addTouristSpot'
          className='hover:text-teal-500 hover:bg-white'
        >
          Add Tourists Spot
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to='/myList' className='hover:text-teal-500 hover:bg-white'>
            My List
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className='navbar bg-base-100 border-b-2'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='text-xl nav-options menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              {navLinks}
            </ul>
          </div>
          <div className='flex items-center'>
            <div className='w-20 hidden md:flex'>
              <Link to='/'>
                <img src={logo} alt='Logo' />
              </Link>
            </div>
            <div>
              <Link to='/' className='text-2xl uppercase font-bold'>
                Infinity Trips
              </Link>
            </div>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='flex gap-6 px-1 nav-options text-[22px]'>
            {navLinks}
          </ul>
        </div>

        <div className='navbar-end flex gap-2'>
          <div
            title={`${
              user
                ? user.displayName
                  ? user.displayName
                  : user.name
                  ? user.name
                  : "Wolverine"
                : "User Not Logged In"
            }`}
          >
            {user ? (
              <>
                {user.photoURL ? (
                  <div>
                    <img
                      className='rounded-full h-11'
                      src={user.photoURL}
                      alt='user.displayName'
                    />
                  </div>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='50'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#ffca28'
                      d='M34,38.2V26H14v12.2c0,1.1-0.6,2-1.5,2.6C9.1,42.9,6,46,6,46h36c0,0-3.1-3.1-6.5-5.2 C34.6,40.3,34,39.3,34,38.2z'
                    ></path>
                    <path
                      fill='#ffb74d'
                      d='M24,4C12.3,4,13,14,13,14c0,3.7,0,13,0,13v6.6c0,0.9,0.4,1.7,1,2.3l6.1,5.4c0.5,0.5,1.2,0.7,2,0.7 H24h1.9c0.7,0,1.4-0.3,2-0.7l6.1-5.4c0.7-0.6,1-1.4,1-2.3V26c0,0,0-8.3,0-12C35,14,35.7,4,24,4z'
                    ></path>
                    <path
                      fill='#ffd600'
                      d='M36,16.2l-1,17.4c0,0.9-0.4,1.7-1,2.3l-3,2.6V27l2-2c-4.2,0.8-6.3,2.4-8,4h-1h-1 c-1.7-1.6-3.8-3.2-8-4l2,2v11.5l-3-2.6c-0.7-0.6-1-1.4-1-2.3l-1-17.4c0-2.1,0.2-3.9,0.7-5.4C12.7,10.9,15,3,24,3s11.3,7.9,11.3,7.9 C35.8,12.4,36,14.2,36,16.2z'
                    ></path>
                    <path
                      fill='#424242'
                      d='M37.5 22c-.7 1.5-1 3.2-1.1 4.8L36 33.6c0 .9-.4 1.7-1 2.3l-4 2.6V27l2-2c-4.2.8-6.3 2.4-8 4l.9-8.5c.1-.9.5-1.8 1.2-2.4 2-2 7.7-7.2 13-17C42.3 9.3 39.2 18.1 37.5 22zM10.5 22c.7 1.5 1 3.2 1.1 4.8l.4 6.9c0 .9.4 1.7 1 2.3l4 2.6V27l-2-2c4.2.8 6.3 2.4 8 4l-.9-8.5c-.1-.9-.5-1.8-1.2-2.4-2-2-7.7-7.2-13-17C5.8 9.3 8.8 18.1 10.5 22z'
                    ></path>
                    <path
                      fill='#3b3b3b'
                      d='M27.8,26.8c-1.1,0.6-1.9,1.3-2.7,2c0,0-0.1,0.1-0.1,0.1h-1l1.5-4.5L27.8,26.8z'
                    ></path>
                    <path
                      fill='#ffd600'
                      d='M24 23L25.5 24.5 25 29 24 29z'
                    ></path>
                    <path
                      fill='#fb8c00'
                      d='M20.4,34.7l-0.9-1.8c0.1,0,1.8-0.9,4.4-0.9c2.6,0,4.4,0.9,4.4,0.9l-0.9,1.8c0,0-1.4-0.7-3.6-0.7 C21.9,34,20.5,34.7,20.4,34.7z'
                    ></path>
                    <path
                      fill='#eee'
                      d='M26 24c0 0 1.3 0 3 0s3-.6 3-.7c0-.6-.3-1.3-2-1.3S26 24 26 24zM22 24c0 0-1.3 0-3 0s-3-.6-3-.7c0-.6.3-1.3 2-1.3S22 24 22 24z'
                    ></path>
                    <path
                      fill='#616161'
                      d='M20.2,26.8c1.1,0.6,1.9,1.3,2.7,2c0,0,0.1,0.1,0.1,0.1h1l-1.5-4.5L20.2,26.8z'
                    ></path>
                    <path
                      fill='#ffd600'
                      d='M24 23L22.5 24.5 23 29 24 29z'
                    ></path>
                    <path fill='#ffd600' d='M23 21H25V24H23z'></path>
                  </svg>
                )}
              </>
            ) : (
              <FaRegCircleUser className='text-4xl' />
            )}
          </div>

          {/* LogIn / LogOut Button */}
          <div>
            {user ? (
              <Link onClick={handleLogOut} to='/login'>
                <button className='button-login pb-2 pt-1 px-5'>
                  <span>LogOut</span>
                </button>
              </Link>
            ) : (
              <Link to='/login'>
                <button className='button-login pb-2 pt-1 px-5'>
                  <span>Login</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
