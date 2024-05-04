'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import CompanyLogo from '../componets/companyLogo';
import KeyFeature from '../componets/keyFeatures';
import VideoModal from '../componets/videoModal/videoModal';
import Clients from '../componets/AboutUs/clients';
import Counter from '../componets/AboutUs/counter';

import * as Icon from 'react-feather';
import { MdKeyboardArrowRight, FaRegEnvelope } from '../assets/icons/icons';

import { teamData } from '../Data/data';
import { benefitData, referenceData } from '../Data/data';
import TextAnimation from '../componets/seo/textAnimation';
import { TypeAnimation } from 'react-type-animation';

export default function PageAboutUs() {
  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/company/aboutus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">
              About Us
            </h4>
            <TypeAnimation
              sequence={[
                'A satisfied customer is the best business strategy of all',
                1900,
                ' ',
                1900,
              ]}
              wrapper="span"
              speed={50}
              className="md:text-4xl text-3xl typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/about-us">Lime Solution</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              About us
            </li>
          </ul>
        </div>
      </section>

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
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
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <Image
                      src="/images/about/ab03.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="shadow rounded-md"
                      alt=""
                    />
                    <Image
                      src="/images/about/ab02.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <Image
                      src="/images/about/ab01.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-5">
                <Counter />
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text mb-5">
                  Who we are ?
                </h4>

                <p className="text-slate-400 max-w-xl">
                  Lime Solution, a global market leader in software development,
                  testing services, and top-tier technology consulting offers an
                  integrated suite of cutting-edge solutions that help
                  businesses accelerate product speed-to-market. With a
                  customer-centric approach, Lime Solution aims to fuel
                  innovation for organizations by helping to modernize existing
                  systems or bring new software visions to life.
                  <br />
                  The available talents, the open-minded culture, and the
                  advantageous framework conditions have convinced us to
                  establish a software development company in Vietnam and offer
                  development services to clients from all over the world.
                  <br />
                  We are happy to reserve a modern open-plan workspace, which
                  always has enough space for your software engineer teams, plus
                  several private offices and on-ready meeting rooms with
                  high-quality media systems; designed to encourage interactions
                  and direct communications between employees and clients.
                  <br />
                  Our dedicated, Vietnam-based offshore development teams
                  provide reliable, high-quality software development services—
                  all at a competitive cost.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                  >
                    <FaRegEnvelope className="me-2 text-sm" /> Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">
              Your benefits:
              <TypeAnimation
                sequence={[
                  ' Modern Culture',
                  2000,
                  ' Health & Wellness',
                  2000,
                  ' Friendly Environment',
                  2000,
                  ' Financial',
                  2000,
                  ' Where Talents Shine',
                  2000,
                  ' Learning & Growth',
                  2000,
                  ' Every Effort Is Well-merited',
                  2000,
                  ' Company Events',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"
                repeat={Infinity}
              />
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
            <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
              <div className="grid grid-cols-1 gap-[30px]">
                {benefitData.slice(0, 4).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group flex transition-all duration-500 ease-in-out xl:p-3"
                    >
                      <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                        <h4 className="mb-0 text-lg font-medium">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 mt-3">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-12 lg:mx-8 lg:order-2 order-1">
              <Image
                src="/images/benefits.png"
                width={0}
                height={10}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="mx-auto md:max-w-[300px]"
                alt=""
              />
            </div>

            <div className="lg:col-span-4 md:col-span-6 order-3">
              <div className="grid grid-cols-1 gap-[30px]">
                {benefitData.slice(4, 8).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group flex transition-all duration-500 ease-in-out xl:p-3"
                    >
                      <div className="flex-1 ms-4">
                        <h4 className="mb-0 text-lg font-medium">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 mt-3">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Reference
            </h3>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-[30px]">
            {referenceData.slice(2, 4).map((item, index) => {
              return (
                <div key={index} className="lg:col-span-6 md:col-span-6">
                  <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                    <Image
                      src={item.image}
                      width={96}
                      height={96}
                      className="size-24 rounded-full shadow-md dark:shadow-gray-800"
                      alt=""
                    />

                    <div className="content mt-4">
                      <Link
                        href="#"
                        className="text-lg font-medium hover:text-indigo-600 block"
                      >
                        {item.name}
                      </Link>
                      <span className="text-slate-400 block">{item.title}</span>

                      <p className="text-slate-400 mt-4">{item.desc}</p>

                      <ul className="list-none mt-4 space-x-1">
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Facebook className="size-4"></Icon.Facebook>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Instagram className="size-4"></Icon.Instagram>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Twitter className="size-4"></Icon.Twitter>
                          </Link>
                        </li>
                        <li className="inline">
                          <Link
                            href="#"
                            className="size-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                          >
                            <Icon.Linkedin className="size-4"></Icon.Linkedin>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
