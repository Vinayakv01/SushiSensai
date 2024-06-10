import React from "react";

const SignIn = ({ onClose }) => {
  const handleSignIn = () => {};

  return (
    <div className="fixed bg-black bg-opacity-25 z-50 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded shadow-md w-[80%] md:w-[50%] lg:w-[30%] xl:w-[20%] font-Poppins">
      <div class="relative backdrop-blur-md rounded-xl shadow bg-white text-black">
        <div class="flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-300">
          <h3 class="text-md font-medium md:text-lg lg:text-xl">
            Sign in to gsl
          </h3>
          <button
            type="button"
            class="end-2.5 rounded-full text-[#5B3DE2] bg-transparent hover:bg-black hover:text-white text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={onClose}
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="px-4 py-2 md:p-5">
          <form class="space-y-4" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium lg:text-lg"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 text-gray-900 text-sm rounded-lg w-full p-2 md:p-2.5 focus:outline-none border md:text-md lg:text-lg"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium lg:text-lg"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 text-gray-900 text-sm rounded-lg w-full p-2 md:p-2.5 focus:outline-none border md:text-md lg:text-lg"
                required
              />
            </div>
            <div class="flex flex-col justify-between space-y-1 md:flex-row md:space-y-0">
              <div class="flex items-center">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-xs font-medium text-gray-900 md:text-sm"
                >
                  Remember me
                </label>
              </div>
              <a href="#" class="text-xs hover:underline text-[#5B3DE2] md:text-sm">
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#5B3DE2] text-white md:text-md lg:text-lg"
            >
              Login to your account
            </button>
            <button
              // onClick={loginWithGoogle}
              class="w-full flex justify-center items-center bg-white rounded-lg text-sm font-medium text-gray-800 focus:outline-none px-5 py-2 border md:text-md lg:text-lg"
            >
              <svg
                class="h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                {" "}
                <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>

            <div class="text-xs md:text-sm font-medium m-0">
              Not registered?{" "}
              <a href="#" class="text-[#5B3DE2] hover:underline">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;