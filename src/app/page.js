import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from './componets/Navbar/navbar';
import Footer from './componets/Footer/footer';
import Switcher from './componets/switcher';
import CookieModal from './componets/cookieModal';
import ClientsOne from './componets/clientsOne';
import Blog from './componets/blog';
import VideoModal from './componets/videoModal/videoModal';
import Office from './componets/co-working/office';
import WorkingTab from './componets/co-working/workingTab';
import Contact from './componets/co-working/contact';

import * as Icon from 'react-feather';

import { MdKeyboardArrowRight, BsCheckCircle } from './assets/icons/icons';
import { coworkAbout } from './Data/dataThree';
import { referenceData } from './Data/data';

export default function Coworking() {
  return (
    <>
      <Navbar navClass="nav-light" />

      <section className="relative md:py-60 py-36 items-center">
        <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/JsNvHJsufhI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
            className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"
            title="Embedded YouTube Video"
          ></iframe>
        </div>
        <div
          className="absolute inset-0 opacity-20  bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/images/map.svg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <Image
              src="/images/logo-icon-64.png"
              width={82}
              height={80}
              className="block mx-auto animate-[spin_10s_linear_infinite]"
              alt=""
            />
            <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 mt-10 text-white">
              Lime Solution <br /> Vietnam&apos;s Leading Technology Partner
            </h3>

            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              One of the top IT firms in Vietnam, Lime Solution focuses on
              offering software solutions and consulting services for digital
              transformation to local enterprises in the retail, healthcare, and
              financial industries, as well as international.
            </p>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <Image
                src="/images/saas/classic03.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt=""
              />
              <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
            </div>

            <div className="lg:me-8 order-2 md:order-1">
              <h4 className="mb-4 text-2xl leading-normal font-medium">
                Be the change you want to see in the world
              </h4>
              <p className="text-slate-400">
                Lime Technologies Ltd is an IT outsourcing Company in VietNam
                that was founded on April 17th, 2016, with the vision of
                becoming one of the top IT service providers in Vietnam. We have
                always pursued the mission of elevating and connecting
                Vietnamese IT engineers to international clients, hence
                contributing to affirming Vietnam&apos;s position on the
                world&apos;s technology map.
                <br />
                Aiming at providing a comprehensive service offering system,
                Lime Technologies Ltd brings more value and high-quality work to
                our customers. With Lime Technologies Ltd, we specialize in
                providing software solutions & consulting, implementing digital
                transformation for a series of domestic and foreign businesses.
                <br />
                After 7 years of operation, with the spirit of ”challenge the
                challenges” and endless energy, Lime Technologies Ltd has always
                been working tirelessly to expand our reach and our resources.
                We set the target of becoming a global IT firm with 1000
                headcounts and a leading IT Company in the ASEAN region in 2030.
              </p>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6">
              <div className="lg:me-8">
                <Image
                  src="/images/shape-image.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt=""
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="lg:me-5">
                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                  Our Mission
                </h6>
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                  “Want to make <br /> your life better?”
                </h3>

                <p className="text-slate-400 max-w-xl mb-6">
                  We bring a very simple message. Customers trust us because we
                  are here to handle your technology needs and technology
                  solutions to ensure that you can focus your attention on the
                  needs of your business. Technology is advancing at a
                  phenomenal rate, our company is constantly researching and
                  developing new ideas and exploring innovative solutions to
                  make the impossible possible and ensure that business your
                  career can perform at its best.
                </p>

                <Link
                  href="/contact"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Our Services
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
            {coworkAbout.map((item, index) => {
              let Icons = item.icon;
              return (
                <div
                  key={index}
                  className="group relative lg:px-10 mt-4 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="size-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                      <Icons className="w-7 h-7" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-xl font-medium transition-all duration-500 ease-in-out hover:text-indigo-600"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              We provide Different types of office
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
        </div>
        <Office /> */}
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Reference
            </h3>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-[30px]">
            {referenceData.slice(0, 2).map((item, index) => {
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

      {/* <section className="realtive md:py-24 py-16">
        <WorkingTab />
      </section> */}

      <Footer />
      <Switcher />
    </>
  );
}
