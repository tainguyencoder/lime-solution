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

// meta data
import Head from 'next/head';

export default function Coworking() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Lime Solution" />
        <meta property="og:description" content="Lime Solution" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dy1aove6a/image/upload/v1722849747/limesolution_jn72ub.png"
        />
        <meta property="og:url" content="https://limesolutionco.com/" />
        <meta property="og:type" content="website" />
      </Head>

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
            <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text mt-10">
              Lime Solution
            </h3>
            <h3 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-4xl mb-5 text-white">
              Your Partner in Digital Evolution
            </h3>

            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Our IT software company transforms ideas into reality by
              delivering innovative solutions that empower businesses to achieve
              their digital goals and succeed in an ever-evolving technological
              landscape.
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
            </div>

            <div className="lg:me-8 order-2 md:order-1">
              <h4 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-4xl mb-5 text-black dark:text-white">
                Be{' '}
                <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-violet-600/20 relative bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
                  the change
                </span>{' '}
                <br />
                you{' '}
                <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-violet-600/20 relative bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
                  want
                </span>{' '}
                to see in the world
              </h4>
              <p className="text-slate-400">
                Lime Solution is an IT outsourcing Company in Vietnam that was
                founded on April 17th, 2016, with the vision of becoming one of
                the top IT service providers in Vietnam. We have always pursued
                the mission of elevating and connecting Vietnamese IT engineers
                to international clients, hence contributing to affirming
                Vietnam&apos;s position on the world&apos;s technology map.
                <br />
                Aiming at providing a comprehensive service offering system,
                Lime Solution brings more value and high-quality work to our
                customers. With Lime Solution, we specialize in providing
                software solutions & consulting, implementing digital
                transformation for a series of domestic and foreign businesses.
                <br />
                After 7 years of operation, with the spirit of ”challenge the
                challenges” and endless energy, Lime Solution has always been
                working tirelessly to expand our reach and our resources. We set
                the target of becoming a global IT firm with 1000 headcounts and
                a leading IT Company in the ASEAN region in 2030.
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
                <div className="md:me-6">
                  <h4 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-4xl mb-5 text-black dark:text-white">
                    Want to make
                    <br />
                    your{' '}
                    <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-violet-600/20 relative bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
                      life better
                    </span>{' '}
                    ?
                  </h4>
                </div>

                <p className="text-slate-400 max-w-xl mb-6">
                  Our mission is to achieve success for and inspire our partners
                  and customers by consistently and persistently doing things
                  the right way. As a visionary technology group, we believe
                  innovative technology can solve some of the greatest problems
                  of our time while creating the greatest value for those we
                  serve.
                  <br />
                  Lime Solution, we strive to become the lighthouse to start-ups
                  or emerging brands on the ocean of uncertainty by becoming
                  their business companion with unwavering loyalty. We will give
                  everything to create successful brand stories for our partners
                  and provide distinctive marketing solutions to drive
                  businesses to their full potential. Lime Solution, a global
                  market leader in software development, testing services, and
                  top-tier technology consulting offers an integrated suite of
                  cutting-edge solutions that help businesses accelerate product
                  speed-to-market. With a customer-centric approach, Lime
                  Solution aims to fuel innovation for organizations by helping
                  to modernize existing systems or bring new software visions to
                  life.
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
      <Footer />
      <Switcher />
    </>
  );
}
