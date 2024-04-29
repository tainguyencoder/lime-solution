import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../componets/Navbar/navbar';
import JobFooter from '../componets/jobFooter';
import Switcher from '../componets/switcher';

import { jobData } from '../Data/data';

import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  GoClock,
  AiOutlineDollar,
} from '../assets/icons/icons';

export default function Careers() {
  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/job/job.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Job Listings
            </h3>

            <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                <Link href="/">Limesolution</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <MdKeyboardArrowRight className="text-xl" />
              </li>
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                <Link href="/index-job">Job</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <MdKeyboardArrowRight className="text-xl" />
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                aria-current="page"
              >
                All Jobs
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {jobData.map((item, index) => {
              return (
                <div
                  className="rounded-md shadow dark:shadow-gray-800"
                  key={index}
                >
                  <div className="p-6">
                    <Link
                      href="/contact"
                      className="title h5 text-lg font-semibold hover:text-indigo-600"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-2 flex items-center">
                      <GoClock className="me-1 text-indigo-600" />
                      {item.posted}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">
                        {item.jobTitle}
                      </span>

                      <p className="text-slate-400 flex">
                        <AiOutlineDollar className="me-1 text-lg text-indigo-600" />
                        {item.package}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                    <Image
                      src={item.image}
                      width={48}
                      height={48}
                      className="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900"
                      alt=""
                    />

                    <div className="ms-3">
                      <h6 className="mb-0 font-semibold text-base">
                        {item.name}
                      </h6>
                      <span className="text-slate-400 text-sm">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <JobFooter />
      <Switcher />
    </>
  );
}
