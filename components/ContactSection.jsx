import { Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import { BsChatTextFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiUser } from "react-icons/hi";
import BannerLayout from "./Common/BannerLayout";

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 from-MidNightBlack">
      <h1 className="text-2xl md:text-3xl text-Snow text-center my-16">CONTACT INFORMATION</h1>
      <div className="w-full my-6 text-Snow flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-50 p-4 text-base card_stylings flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="md:text-base">Country:</span>
            <span className="text-LightGray md:text-base">Bangladesh</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="md:text-base">City:</span>
            <span className="text-LightGray md:text-base">Dhaka</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="md:text-base">Company:</span>
            <span className="text-LightGray md:text-base">
              Adventure Dhaka Limited
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="md:text-base">Email:</span>
            <span className="text-LightGray text-base">sayeef.cse@gmail.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="md:text-base">Linkedin:</span>
            <span className="text-LightGray text-base">sayeef-rahman</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="md:text-base">Phone:</span>
            <span className="text-LightGray text-base">+8801780540576</span>
          </div>
          {/* <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4"></div> */}
        </div>
        <div className="w-full lg:w-50 text-Snow">
          <div className="p-4 bg-EveningBlack rounded-xl text-base">
            <h1 className="text-lg font-bold mb-4">Get In Touch</h1>
            <div>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-4">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-4">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-4">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    className="input_stylings"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button
                // onClick={() => setIsOpen(true)}
                className="button rounded-lg"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* meaage section */}

      {/* Online links */}
      <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
        <Link
          className="hover:scale-125 ease-in-out duration-700"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <HiMail />
        </Link>
        <Link
          className="hover:scale-125 ease-in-out duration-700"
          href="https://github.com/sayeef-rahman"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          className="hover:scale-125 ease-in-out duration-700"
          href="https://www.linkedin.com/in/sayeef-rahman/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="hover:scale-125 ease-in-out duration-700"
          href="https://x.com/sayeef_rahmaan"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </Link>
        {/* <Link
            className="hover:scale-125 ease-in-out duration-700 hidden sm:block"
            href="https://www.fiverr.com/codeworthy"
            target="_blank"
            rel="noreferrer"
          >
            <Fiverr_Icon />
          </Link> */}
        {/* <Link
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork />
          </Link> */}
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          <a
            className="underline text-Snow"
            target="_blank"
            href="https://github.com/sayeef-rahman"
            rel="noreferrer"
          >
            Be the one to integrate this!
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default ContactSection;
