import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import ClientsOne from '../componets/clientsOne';
import ProjectWork from '../componets/portfolio/projectWork';

import {
  FiPhone,
  FiAirplay,
  MdKeyboardArrowRight,
  MdApi,
  TbCameraPlus,
  PiFlowerLight,
  FaRegComment,
  FaArrowRight,
  BsCheckCircle,
} from '../assets/icons/icons';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';

import { servicesTwo } from '../Data/dataThree';
import { domainData } from '../Data/data';

export default function Services() {
  return (
    <>
      <Navbar navClass="nav-light" />
      <section
        className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/services.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h5 className="text-white/50 text-lg font-medium">
              What We Offer ?
            </h5>
            <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Our Services
            </h3>
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
              Services
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

      <section className="relative md:py-12 py-10">
        <div className="container relative">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-6 md:order-2 order-1">
              <div className="lg:ms-8">
                <Image
                  src="/images/hosting/2.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt=""
                />
              </div>
            </div>
            <div className="lg:col-span-6 md:order-1 order-2">
              <h4 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-4xl bg-gradient-to-tr from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text mb-4">
                Full product lifecycle
                <br />
                development from A-Z
              </h4>
              <p className="text-slate-400 max-w-xl">
                With our experts and experience, we can work with you during
                every software development step—from the idea, and design to
                production, from mobile, web, or desktop applications. This
                helps to cover the whole product lifecycle and ongoing
                evolution.
                <br />
                We have maintained a dignity for providing multi-platform
                applications and software solutions that have aided our clients
                to engage their customers and have enhanced their businesses.
                <br />
                With comprehensive knowledge of application and software
                development, combined with our professional technical expertise
                allow us to design and develop high-quality tailor-made software
                and integrated IT solutions, addressing the exact needs of our
                customers.
              </p>
              <ul className="text-slate-400 mt-4 list-outside">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 flex-shrink-0" />
                  <p className="text-slate-400 dark:text-gray-400 pl-3">
                    <strong>Our ethos:</strong> &ldquo;We walk our talk.&rdquo;
                  </p>
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 flex-shrink-0" />
                  <p className="text-slate-400 dark:text-gray-400 pl-3">
                    <strong>RELIABILITY</strong> is key to success in all
                    relationships
                  </p>
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 flex-shrink-0" />
                  <p className="text-slate-400 dark:text-gray-400 pl-3">
                    With <strong>TRANSPARENCY</strong> we build trust and work
                    together efficiently
                  </p>
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 flex-shrink-0" />
                  <p className="text-slate-400 dark:text-gray-400 pl-3">
                    <strong>HONESTY</strong> helps us form a long-term
                    relationship
                  </p>
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 flex-shrink-0" />
                  <p className="text-slate-400 dark:text-gray-400 pl-3">
                    With <strong>PASSION</strong>, we can raise the quality and
                    make us happy
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h4 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text">
              Our Services
            </h4>
            <ul className="list-none mb-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-transparent bg-clip-text text-xl space-x-1">
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px]">
            {servicesTwo.map((item, index) => {
              let Icons = item.icon;

              return (
                <div
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center"
                >
                  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <Icons className="w-7 h-7" />
                  </div>
                  <div className="content mt-7">
                    <Link
                      href="/services"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h4 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text">
              Domains
            </h4>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
            {domainData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden p-6 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center duration-500"
                >
                  <Image
                    src={item.image1}
                    width={64}
                    height={64}
                    className="size-16 mx-auto"
                    alt=""
                  />

                  <div className="content mt-7">
                    <h2 className="title text-xl font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-slate-400 mt-3">{item.desc}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 duration-500">
                    <div className="absolute inset-0">
                      <Image
                        src={item.image2}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt=""
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                    </div>

                    <div className="absolute bottom-0 start-0 end-0 mb-6">
                      <Link href="#" className="text-white text-xl font-bold">
                        {item.title}
                      </Link>
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
