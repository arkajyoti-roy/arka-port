import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactss = () => {
  let [Name, setName] = useState();
  let [Email, setEmail] = useState();
  let [Message, setMEssage] = useState();

  const tola = () => {
    toast.success("Sending...");
  };

  const form = useRef();

  const sendEmail = (e) => {
    setName((Name = ""));
    setEmail((Email = ""));
    setMEssage((Message = ""));
    e.preventDefault();

    emailjs
      .sendForm("service_xe6b27f", "template_ylnukkx", form.current, {
        publicKey: "T09SthimcL6gsdPH3",
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast.success("Sent Successfully!");
        },
        (error) => {
          // console.log('FAILED...', error.text);
          toast.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>

                    <input
                    placeholder="Enter your Name"
                      value={Name}
                      type="text"
                      name="name"
                      className="w-full rounded-md border-2 py-1 px-3"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>

                    <input
                    placeholder="Enter your Email"
                      value={Email}
                      type="email"
                      name="email"
                      className="w-full rounded-md border-2 py-1 px-3"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>

                    <textarea
                    placeholder="Enter your Message"
                      value={Message}
                      name="message"
                      id="message"
                      className="w-full border-2 rounded-md h-32 text-base py-1 px-3 resize-none leading-6"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    onClick={tola}
                    type="submit"
                    className="flex mx-auto text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 font-semibold pt-2 rounded text-lg"
                  >
                    Submit
                  </button>
                  {/* <ToastContainer /> */}
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactss;
