'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';

import * as Icon from 'react-feather';

import { MdKeyboardArrowRight } from '../assets/icons/icons';

import { contactData } from '../Data/dataTwo';

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    comments: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_esee8fp',
        'template_jfqelnt',
        {
          from_name: form.name,
          to_name: 'Lime Solution',
          from_email: form.email,
          to_email: 'hr@limesolutionco.com',
          subject: form.subject,
          message: form.message,
        },
        '5Mv2YTQoMBdyp5_Kn',
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        },
      );
  };
  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36  bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/company/aboutus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Contact Us
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
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
              Contact Us
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
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {contactData.map((item, index) => {
              let Icons = item.icon;
              return (
                <div key={index} className="text-center px-6 mt-6">
                  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <Icons className="w-7 h-7" />
                  </div>

                  <div className="content mt-7">
                    <h5 className="title h5 text-xl font-medium">
                      {item.title}
                    </h5>
                    <p className="text-slate-400 mt-3">{item.desc}</p>

                    <div className="mt-5">
                      <a
                        href={item.ref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        {item.contact}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                src="/images/contact.svg"
                alt=""
              />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">
                            Your Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Name :"
                              value={form.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="email" className="font-semibold">
                            Your Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="size-4 absolute top-3 start-4"></Icon.Mail>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Email :"
                              value={form.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="subject" className="font-semibold">
                            Your Question:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Book className="size-4 absolute top-3 start-4"></Icon.Book>
                            <input
                              name="subject"
                              id="subject"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Subject :"
                              value={form.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="comments" className="font-semibold">
                            Your Comment:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.MessageCircle className="size-4 absolute top-3 start-4"></Icon.MessageCircle>
                            <textarea
                              rows={7}
                              name="message"
                              id="message"
                              className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Message :"
                              value={form.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2427860200783!2d106.69140187655817!3d10.792707989357023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294f8901a4f5%3A0x308c9e4cbcc92102!2zNjIgxJAuIFRy4bqnbiBRdWFuZyBLaOG6o2ksIFBoxrDhu51uZyBUw6JuIMSQ4buLbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCA3MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1724995471192!5m2!1sen!2s"
              style={{ border: 0 }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
}
