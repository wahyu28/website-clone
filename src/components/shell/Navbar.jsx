import React from "react";
import { Link } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

import ShellLogo from "../../assets/shell-logo.gif";

function Navbar() {
  return (
    <nav>
      <div className='w-full bg-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <ul className='flex justify-end items-center text-[14px]'>
            <li>
              <Link
                to={"/"}
                className='inline-block py-3 px-[10px] hover:bg-gray-200'
              >
                Inside Energy
              </Link>
            </li>
            <li>
              <Link to={"/"} className='inline-block py-3 px-[10px]'>
                About us
              </Link>
            </li>
            <li>
              <Link to={"/"} className='inline-block py-3 px-[10px]'>
                Media
              </Link>
            </li>
            <li>
              <Link to={"/"} className='inline-block py-3 px-[10px]'>
                Shell Energy
              </Link>
            </li>
            <li>
              <Link to={"/"} className='py-3 px-[10px] flex items-center gap-2'>
                <BsGlobe2 className='text-[20px]' />
                Inside Energy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='w-full bg-white border-b-2'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center justify-between pl-3'>
            <div>
              <Link className='flex items-center gap-2 py-3'>
                <img src={ShellLogo} className='w-[40px]' alt='' />
                <span className='text-[14px] font-semibold'>Shell Global</span>
              </Link>
            </div>

            <div className='hidden lg:flex items-center gap-4'>
              <div className='flex'>
                <a
                  href='#'
                  className='flex py-4 px-3 hover:bg-slate-300 transition-all font-semibold text-[14px]'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='flex py-4 px-3 hover:bg-slate-300 transition-all font-semibold text-[14px]'
                >
                  Our Strategy: Powering Progress
                </a>
                <a
                  href='#'
                  className='flex py-4 px-3 hover:bg-slate-300 transition-all font-semibold text-[14px]'
                >
                  Bussiness Customers
                </a>
                <a
                  href='#'
                  className='flex py-4 px-3 hover:bg-slate-300 transition-all font-semibold text-[14px]'
                >
                  Energy and Inovation
                </a>
                <a
                  href='#'
                  className='flex py-4 px-3 hover:bg-slate-300 transition-all font-semibold text-[14px]'
                >
                  Sustainability
                </a>
                <a
                  href='#'
                  className='flex py-4 px-3 hover:bg-slate-300 transition-all font-semibold text-[14px]'
                >
                  Investors
                </a>
                <a
                  href='#'
                  className='flex py-4 px-3 hover:bg-slate-300 transition-all font-semibold text-[14px]'
                >
                  Carrers at Shell
                </a>
              </div>
            </div>

            <div className='flex items-center'>
              <Link
                className='inline-block py-4 px-5 text-[26px] hover:bg-slate-300 transition-all'
                to='#'
              >
                <IoMdSearch />
              </Link>
              <Link
                className='inline-block py-4 px-5 text-[26px] hover:bg-yellow-500 lg:hidden transition-all'
                to='#'
              >
                <AiOutlineMenu />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
