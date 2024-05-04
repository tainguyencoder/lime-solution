'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../componets/Navbar/navbar';
import JobFooter from '../componets/jobFooter';
import Switcher from '../componets/switcher';

import { jobOpeningData } from '../Data/dataTwo';

import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  GoClock,
  AiOutlineDollar,
  BsCheckCircle,
} from '../assets/icons/icons';

export default function Careers() {
  let [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover background-effect overflow-hidden "
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
                <Link href="/">Lime Solution</Link>
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

        <div className="absolute inset-0 bg-indigo-600/5"></div>
        <ul className="circles p-0 mb-0">
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/shree-logo.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/skype.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/snapchat.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/spotify.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/telegram.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/whatsapp.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/android.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/facebook-logo-2019.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/linkedin.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/client/google-logo.png"
              className="w-9 h-9"
              alt=""
            />
          </li>
        </ul>
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

      <section className="relative md:py-20 py-12">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-3 text-center">
            <h3 className="md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Job Openings
            </h3>
          </div>

          <div className="lg:flex justify-center ">
            <div className="lg:w-3/4">
              <div
                id="accordion-collapse"
                data-accordion="collapse"
                className="grid grid-cols-1 mt-8 md:gap-[30px]"
              >
                <div>
                  {jobOpeningData.map((item, index) => (
                    <div
                      key={index}
                      className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                    >
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          onClick={() => toggleAccordion(item.id)}
                          className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                            activeIndex === item.id
                              ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600'
                              : ''
                          }`}
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>{item.title}</span>
                          <svg
                            data-accordion-icon
                            className={`${
                              activeIndex === item.id
                                ? 'rotate-180'
                                : 'rotate-270'
                            } size-4 shrink-01`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      {activeIndex === item.id && (
                        <div>
                          <p className="text-slate-400 dark:text-gray-400 pl-4 pt-4 md:pt-3">
                            Responsibilities:
                          </p>
                          <ul className="ml-6">
                            {item.responsibilities.map(
                              (responsibilities, index) => (
                                <li
                                  key={index}
                                  className="mb-1 flex items-center"
                                >
                                  <BsCheckCircle
                                    className="text-indigo-600 me-2 w-[1em] h-[1em]"
                                  />{' '}
                                  <p className="text-slate-400 dark:text-gray-400 pl-4 pt-2 md:pt-1">
                                    {responsibilities}
                                  </p>
                                </li>
                              ),
                            )}
                          </ul>
                          <p className="text-slate-400 dark:text-gray-400 pl-4 pt-4 md:pt-3">
                            Preferred skills and Qualifications:
                          </p>
                          <ul className="list-outside ml-6">
                            {item.skills.map((skills, index) => (
                              <li
                                key={index}
                                className="mb-1 flex items-center"
                              >
                                <BsCheckCircle
                                  className="text-indigo-600 text-base me-2"
                                  style={{ width: '1rem', height: '1rem' }}
                                />{' '}
                                <p className="text-slate-400 dark:text-gray-400 pl-4 pt-2 md:pt-1">
                                  {skills}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JobFooter />
      <Switcher />
    </>
  );
}
