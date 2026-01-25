<template>
  <div class="bg-base-100" data-theme="corporate">
    <!-- Header -->
    <header
      class="bg-base-100 border-base-content/20 sticky top-0 z-50 w-full border-b"
    >
      <nav class="navbar mx-auto max-w-7xl bg-transparent px-4 sm:px-6 lg:px-8">
        <div
          class="w-full max-lg:my-1 lg:flex lg:h-16 lg:items-center lg:gap-2"
        >
          <div class="navbar-start items-center justify-between max-lg:w-full">
               <CommonAppLogo :variant="'black'" :size="'32'" class=""
                        :inNavbar="true" />
          
            <CommonLanguageSwitcher class="lg:hidden" />

          </div>

          <div class="navbar-end max-lg:hidden">

            <div class="flex items-center gap-24">
                <NuxtLink to="/login" class="btn btn-primary group rounded-full">
                  Apply for Investment
                  <i
                    class="icon-[tabler--arrow-right] size-5 transition-transform group-hover:translate-x-1"
                  ></i>
                </NuxtLink>
                <CommonLanguageSwitcher class="" />
            </div>

        </div>
        </div>
      </nav>
    </header>

    <main class="w-full flex-1 grow">
      <!-- Hero Section -->
      <section class="relative overflow-x-hidden">
        <div
          style="
            background-image: url('/img/hero-section.jpg');
            background-position: center center;
            background-size: cover;
          "
          class="relative size-auto overflow-hidden bg-cover bg-center bg-no-repeat py-8 sm:py-10 lg:py-24 lg:pt-14"
        >
          <div
            class="lg:py-16.5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pe-16"
          >
            <div class="grid gap-12 lg:grid-cols-2 xl:gap-24">
              <div>
                <span
                  class="badge badge-outline border-secondary-content text-secondary-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 mb-4 rounded-full"
                  >Over 45+ countries</span
                >
                <h4
                  class="text-primary-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-200 mb-1 text-2xl font-semibold sm:text-4xl xl:text-5xl"
                >
                  Empowering
                </h4>
                <h4
                  class="text-primary-content z-1 intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-400 mb-1 text-2xl font-semibold sm:text-4xl xl:text-5xl"
                >
                  Visionary Entrepreneurs
                </h4>
                <h4
                  class="text-primary-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-600 mb-5 text-2xl font-semibold sm:text-4xl xl:text-5xl"
                >
                  In Emerging Markets
                </h4>
                <NuxtLink
                  to="/login"
                  class="btn btn-lg text-primary z-1 hover:bg-base-100 intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-1000 group rounded-full [--btn-color:#FDFDFE]"
                >
                  Start your application
                  <i
                    class="icon-[tabler--arrow-right] rtl:group-hover:rotate-225 size-5 transition-all duration-300 group-hover:-rotate-45 rtl:rotate-180"
                  ></i>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="w-162.75 rounded-162.75 opacity-14 absolute -bottom-10 start-[35%] h-72 bg-black blur-3xl max-lg:hidden"
          ></div>
          <div
            class="w-162.75 rounded-162.75 opacity-14 absolute -end-[10%] top-[35%] h-72 bg-black blur-3xl max-lg:hidden"
          ></div>
        </div>
      </section>

      <!-- wo we are-->
      <section class="py-8 sm:py-10 lg:py-24">
        <div
          class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 md:space-y-14 lg:space-y-24 lg:px-8"
        >
          <div class="grid gap-6 sm:grid-cols-2 lg:gap-24">
            <div class="space-y-4">
              <p
                class="text-primary intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 text-sm font-medium uppercase"
              >
                About Crownhill-funding
              </p>
              <h2
                class="text-base-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-200 text-xl font-semibold md:text-2xl lg:text-4xl"
              >
                Strategic Investment Partnership for Sustainable Growth
              </h2>
            </div>
            <p
              class="intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-400 self-end lg:text-xl"
            >
              We are a purpose-driven family office committed to catalyzing
              economic transformation in developing nations. With over two
              decades of investment expertise and a portfolio spanning 45+
              countries, we partner with ambitious entrepreneurs who are
              building the future of emerging markets.
            </p>
          </div>
          <div class="flex gap-6">
            <div
              class="intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-300"
            >
              <img src="/img/about.png" alt="" class="rounded-box" />
            </div>
            <div
              class="max-lg:hidden intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500"
            >
              <img src="/img/about-2.png" alt="" class="rounded-box" />
            </div>
          </div>

          <div class="mx-auto">
            <div
              class="flex flex-col items-center justify-center gap-4 text-justify"
            >
              <p
                class="text-base-content/80 intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
              >
                Our investment philosophy is simple yet powerful: sustainable
                profitability creates lasting impact. We believe that private
                sector innovation, when properly supported, becomes the engine
                of economic development, job creation, and community prosperity.
              </p>
            </div>
          </div>

          <div
            class="flex flex-col justify-center items-center space-y-5 max-md:text-center lg:col-span-4 mx-auto"
          >
            <!-- Member Info -->
            <div class="space-y-4">
              <h2
                class="card-title intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-200 text-2xl lg:text-3xl xl:text-4xl"
              >
                Our Investment Focus
              </h2>
            </div>
            <!-- Member Expertise -->
            <h2
              class="intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-600 text-base-content mb-3.5 font-semibold md:text-lg xl:text-xl"
            >
              We invest in exceptional businesses that:
            </h2>
            <ul class="text-center space-y-3 text-primary">
              <li class="inline-flex items-center gap-2">
                <svg
                  class="max-lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Operate in high-growth emerging markets
                </p>
              </li>
              <li class="inline-flex items-center gap-2">
                <svg
                  class="max-lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Demonstrate strong management teams with proven track records
                </p>
              </li>
              <li class="inline-flex items-center gap-2">
                <svg
                  class="max-lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Show clear paths to profitability and scalability
                </p>
              </li>
              <li class="inline-flex items-center gap-2">
                <svg
                  class="max-lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Generate measurable social and economic benefits
                </p>
              </li>
              <li class="inline-flex items-center gap-2">
                <svg
                  class="max-lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Maintain environmental responsibility and ethical standards
                </p>
              </li>
              <li class="inline-flex items-center gap-2">
                <svg
                  class="max-lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                  />
                </svg>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Address real market needs with innovative solutions
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Sectors we champion -->
      <section id="perks">
        <div class="bg-base-200 pt-8 sm:pt-16 lg:pt-24">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Header section  -->
            <div class="mb-10 max-w-6xl space-y-4 text-center">
              <p
                class="text-primary intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-200 text-sm font-medium uppercase"
              >
                Sectors
              </p>
              <h2
                class="text-base-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-400 text-2xl font-semibold md:text-3xl lg:text-4xl capitalize"
              >
                Sectors we Champion
              </h2>
            </div>
            <!-- Perk Listing Section -->
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <!-- 1  -->
              <div
                class="card hover:bg-base-200 bg-primary text-white border-primary/20 intersect-once intersect:motion-preset-pop intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-600 group border shadow-none transition-all duration-300"
              >
                <div class="card-body">
                  <h3
                    class="hover:text-base-content group-hover:text-base-content text-2xl font-semibold transition-colors duration-300 pb-4 mb-4"
                  >
                    Manufacturing
                    <br />
                    & Industry
                  </h3>
                  <p
                    class="group-hover:text-base-content transition-colors duration-300"
                  >
                    Modernizing production capabilities and supply chains.
                  </p>
                </div>
              </div>
              <!-- 2 -->
              <div
                class="card hover:bg-base-200 bg-primary text-white border-primary/20 intersect-once intersect:motion-preset-pop intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-700 group border shadow-none transition-all duration-300"
              >
                <div class="card-body">
                  <h3
                    class="hover:text-base-content group-hover:text-base-content text-2xl font-semibold transition-colors duration-300 pb-4 mb-4"
                  >
                    Financial Services
                    <br />
                    &nbsp;
                  </h3>
                  <p
                    class="group-hover:text-base-content transition-colors duration-300"
                  >
                    Expanding access to capital for underserved communities.
                  </p>
                </div>
              </div>
              <!-- Collaborative Team Spirit  -->
              <div
                class="card hover:bg-base-200 bg-primary text-white border-primary/20 intersect-once intersect:motion-preset-pop intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-800 group border shadow-none transition-all duration-300"
              >
                <div class="card-body">
                  <h3
                    class="hover:text-base-content group-hover:text-base-content text-2xl font-semibold transition-colors duration-300 pb-4 mb-4"
                  >
                    Infrastructure
                    <br />
                    & Energy
                  </h3>
                  <p
                    class="group-hover:text-base-content transition-colors duration-300"
                  >
                    Building essential services and sustainable power solutions.
                  </p>
                </div>
              </div>
              <!-- Annual Trip  -->
              <div
                class="card hover:bg-base-200 bg-primary text-white border-primary/20 intersect-once intersect:motion-preset-pop intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-900 group border shadow-none transition-all duration-300"
              >
                <div class="card-body">
                  <h3
                    class="hover:text-base-content group-hover:text-base-content text-2xl font-semibold transition-colors duration-300 pb-4 mb-4"
                  >
                    Agribusiness
                    <br />
                    &nbsp;
                  </h3>
                  <p
                    class="group-hover:text-base-content transition-colors duration-300"
                  >
                    Transforming food security and rural livelihoods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Application process -->
      <section id="hiring-process">
        <div class="bg-base-200 py-8 sm:py-16 lg:py-24">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-12 space-y-4 text-center sm:mb-8 lg:mb-10">
              <p
                class="text-primary intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-200 text-sm font-medium uppercase"
              >
                Process
              </p>
              <h2
                class="text-base-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-0 intersect:motion-delay-400 text-2xl font-semibold md:text-3xl lg:text-4xl"
              >
                Application Process
              </h2>
            </div>

            <div class="mx-auto mb-4">
              <div
                class="flex flex-col items-center justify-center gap-4 text-center"
              >
                <p
                  class="text-base-content/80 intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Start now and complete our Investment Proposal Application
                  Form. Our team reviews all submissions and responds to
                  qualified applicants within 15 business days.
                </p>
              </div>
            </div>

            <ul class="relative flex w-full flex-col gap-2 md:flex-row">
              <!-- Item -->
              <li
                class="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0"
              >
                <div
                  class="min-h-7.5 min-w-7.5 flex flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap"
                >
                  <span
                    class="bg-primary text-base-100 size-9.5 intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-600 flex shrink-0 items-center justify-center rounded-full text-base font-medium"
                    >1</span
                  >
                  <div
                    class="bg-primary intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-900 mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"
                  ></div>
                </div>
                <div
                  class="intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-700 grow md:mt-2.5 md:grow-0"
                >
                  <span class="text-base-content max-md:mt-1.75 mb-0.5 block"
                    >Create an account</span
                  >
                  <p
                    class="text-base-content/80 max-w-64.5 text-sm max-md:w-full"
                  >
                    Create your account to access the funding platform.
                  </p>
                </div>
              </li>
              <!-- End Item -->
              <!-- Item -->
              <li
                class="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0"
              >
                <div
                  class="min-h-7.5 min-w-7.5 flex flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap"
                >
                  <span
                    class="bg-primary text-base-100 size-9.5 intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-delay-1100 intersect:motion-opacity-in-0 flex shrink-0 items-center justify-center rounded-full text-base font-medium"
                    >2</span
                  >
                  <div
                    class="bg-primary intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-1300 mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"
                  ></div>
                </div>
                <div
                  class="intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-delay-1200 intersect:motion-opacity-in-0 grow md:mt-2.5 md:grow-0"
                >
                  <span class="text-base-content max-md:mt-1.75 mb-0.5 block"
                    >Fill out the form</span
                  >
                  <p
                    class="text-base-content/80 max-w-64.5 text-sm max-md:w-full"
                  >
                    Provide detailed information about your project and funding
                    needs.
                  </p>
                </div>
              </li>
              <!-- End Item -->
              <!-- Item -->
              <li
                class="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0"
              >
                <div
                  class="min-h-7.5 min-w-7.5 flex flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap"
                >
                  <span
                    class="bg-primary text-base-100 size-9.5 intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-delay-1500 intersect:motion-opacity-in-0 flex shrink-0 items-center justify-center rounded-full text-base font-medium"
                    >3</span
                  >
                  <div
                    class="bg-primary intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-1800 mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"
                  ></div>
                </div>
                <div
                  class="intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-delay-1600 intersect:motion-opacity-in-0 grow md:mt-2.5 md:grow-0"
                >
                  <span class="text-base-content max-md:mt-1.75 mb-0.5 block"
                    >Upload Documents</span
                  >
                  <p
                    class="text-base-content/80 max-w-64.5 text-sm max-md:w-full"
                  >
                    Provide mandatory supporting documentation and evidence.
                  </p>
                </div>
              </li>
              <!-- End Item -->
              <!-- Item -->
              <li
                class="group flex flex-1 gap-x-2 md:block md:shrink md:basis-0"
              >
                <div
                  class="min-h-7.5 min-w-7.5 flex flex-col items-center align-middle text-sm md:inline-flex md:w-full md:flex-row md:flex-wrap"
                >
                  <span
                    class="bg-primary text-base-100 size-9.5 intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-delay-2000 intersect:motion-opacity-in-0 flex shrink-0 items-center justify-center rounded-full text-base font-medium"
                    >4</span
                  >
                  <div
                    class="bg-primary mt-2 h-full w-px group-last:hidden md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1"
                  ></div>
                </div>
                <div
                  class="intersect-once intersect:motion-preset-slide-right intersect:motion-duration-800 intersect:motion-delay-2100 intersect:motion-opacity-in-0 grow md:mt-2.5 md:grow-0"
                >
                  <span class="text-base-content max-md:mt-1.75 mb-0.5 block"
                    >Submit you application</span
                  >
                  <p
                    class="text-base-content/80 max-w-64.5 text-sm max-md:w-full"
                  >
                    Submit your completed application for official review and
                    processing.
                  </p>
                </div>
              </li>
              <!-- End Item -->
            </ul>
          </div>

          <!-- Call to Action -->
          <div class="py-8 lg:py-24 text-center">
            <NuxtLink
              to="/login"
              class="btn btn-primary btn-lg group rounded-full"
            >
              Start Your Application
              <i
                class="icon-[tabler--arrow-right] rtl:group-hover:rotate-225 size-5 transition-all duration-300 group-hover:-rotate-45 rtl:rotate-180"
              ></i>
            </NuxtLink>
          </div>

          <div
            class="flex flex-col justify-center text-center items-center space-y-5 lg:col-span-4 mx-auto"
          >
            <h2
              class="intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-600 text-base-content mb-3.5 font-semibold md:text-lg xl:text-xl"
            >
              After your submitting your invesment proposal
            </h2>
            <ul
              class="flex flex-col items-center text-center space-y-3 text-primary"
            >
              <li class="flex items-center justify-start gap-2">
                <p
                  class="text-base-content/80 intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  1. Our team conducts initial assessment
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <p
                  class="text-base-content/80 intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  2. Final evaluation and approval
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <p
                  class="text-base-content/80 intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  3. Deal documentation and funding
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <p
                  class="text-base-content/80 intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  4. Active engagement and growth acceleration
                </p>
              </li>
              <p
                class="text-base-content/80 intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
              >
                <strong class="text-primary"
                  >Average time from submission to funding: 3-6 months for
                  qualified projects</strong
                >
              </p>
            </ul>
          </div>
        </div>
      </section>

      <!-- what sets us appart-->
      <section
        class="from-primary/10 bg-gradient-to-b to-transparent pt-8 sm:pt-14 lg:pt-24"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="space-y-8 md:space-y-14 lg:space-y-24">
            <div class="space-y-4 text-center">
              <p
                class="text-primary intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 text-sm font-medium uppercase"
              >
                CHOOSING US
              </p>
              <h2
                class="text-base-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-200 text-xl font-semibold md:text-2xl lg:text-4xl"
              >
                What Sets Us Appart
              </h2>
              <p
                class="intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-400 mx-auto max-w-2xl lg:text-xl"
              >
                We're not just capital providers—we're long-term partners
                invested in your success. Our team brings operational expertise,
                strategic guidance, and global networks to accelerate your
                growth trajectory.
              </p>
              
            </div>
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div
                class="bg-base-200 border-primary/20 hover:bg-primary transition:color hover:text-base-100 rounded-box xl:mt-14.25 xl:h-121 intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-1000 group overflow-hidden border duration-300"
              >
                <div class="p-6 pb-0">
                  <h3
                    class="text-base-content transition:color group-hover:text-base-100 mb-2 text-2xl font-semibold duration-300"
                  >
                    Emerging Markets Expertise
                  </h3>
                  <p>
                    With boots on the ground across Africa, Asia, Latin America,
                    and Eastern Europe, we understand the unique challenges and
                    opportunities of developing economies. We speak your
                    language, literally and figuratively.
                  </p>
                </div>
                <img
                  src="/img/service-2.png"
                  alt="Service Icon"
                  class="rtl:rotate-y-180 ms-auto"
                />
              </div>
              <div
                class="bg-base-200 border-primary/20 hover:bg-primary transition:color hover:text-base-100 rounded-box xl:h-121 intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-1200 group overflow-hidden border duration-300"
              >
                <div class="p-6 pb-0">
                  <h3
                    class="text-base-content transition:color group-hover:text-base-100 mb-2 text-2xl font-semibold duration-300"
                  >
                    Speed & Flexibility
                  </h3>
                  <p>
                    Our streamlined decision-making process means faster
                    responses. We structure deals that align with your business
                    needs, not cookie-cutter templates.
                  </p>
                </div>
                <img
                  src="/img/service-3.png"
                  alt="Service Icon"
                  class="rtl:rotate-y-180 max-xl:mt-8.5 ms-auto xl:-mt-3.5"
                />
              </div>
              <div
                class="bg-base-200 border-primary/20 hover:bg-primary transition:color hover:text-base-100 rounded-box xl:mt-14.25 xl:h-121 intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-1400 group overflow-hidden border duration-300"
              >
                <div class="p-6 pb-0">
                  <h3
                    class="text-base-content transition:color group-hover:text-base-100 mb-2 text-2xl font-semibold duration-300"
                  >
                    Value Beyond Capital
                  </h3>
                  <p>
                    Access our extensive network of industry experts, potential
                    customers, strategic partners, and follow-on investors. We
                    open doors that accelerate growth.
                  </p>
                </div>
                <img
                  src="/img/service-4.png"
                  alt="Service Icon"
                  class="rtl:rotate-y-180 ms-auto"
                />
              </div>
              <div
                class="bg-base-200 border-primary/20 hover:bg-primary transition:color hover:text-base-100 rounded-box xl:h-121 intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-800 group overflow-hidden border duration-300"
              >
                <div class="p-6 pb-0">
                  <h3
                    class="text-base-content transition:color group-hover:text-base-100 mb-2 text-2xl font-semibold duration-300"
                  >
                    Impact Measurement
                  </h3>
                  <p>
                    Every investment is tracked not just for financial returns,
                    but for job creation, technology transfer, skills
                    development, and community benefit.
                  </p>
                </div>
                <img
                  src="/img/service-1.png"
                  alt="Service Icon"
                  class="rtl:rotate-y-180 ms-auto max-xl:mt-2.5"
                />
              </div>
            </div>
          </div>

          <div
            class="flex flex-col justify-center text-center items-center space-y-5 lg:col-span-4 mx-auto py-12 lg:py-24"
          >
            <div class="space-y-4">
              <h2
                class="card-title intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-200 text-2xl lg:text-3xl xl:text-4xl"
              >
                Our Investment Criteria
              </h2>
            </div>
            <h2
              class="intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-600 text-base-content mb-3.5 font-semibold md:text-lg xl:text-xl"
            >
              We invest in exceptional businesses that:
            </h2>
            <ul
              class="flex flex-col max-lg:items-start max-lg:text-start lg:items-center lg:text-center space-y-3 text-primary"
            >
              <li class="flex lg:items-center items-start justify-start gap-2">
                <i
                  class="icon-[tabler--circle-check] size-4.5 text-primary mt-1 shrink-0"
                ></i>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Operate in high-growth emerging markets
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <i
                  class="icon-[tabler--circle-check] size-4.5 text-primary lg:mt-1 shrink-0 -mt-2"
                ></i>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Demonstrate strong management teams with proven track records
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <i
                  class="icon-[tabler--circle-check] size-4.5 text-primary lg:mt-1 shrink-0 -mt-2"
                ></i>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Show clear paths to profitability and scalability
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <i
                  class="icon-[tabler--circle-check] size-4.5 text-primary lg:mt-1 shrink-0 -mt-2"
                ></i>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Generate measurable social and economic benefits
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <i
                  class="icon-[tabler--circle-check] size-4.5 text-primary lg:mt-1 shrink-0 -mt-2"
                ></i>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Maintain environmental responsibility and ethical standards
                </p>
              </li>
              <li class="flex items-center justify-start gap-2">
                <i
                  class="icon-[tabler--circle-check] size-4.5 text-primary lg:mt-1 shrink-0 -mt-2"
                ></i>
                <p
                  class="text-base-content/80 text-primary intersect-once intersect:motion-preset-slide-down-md intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-500 max-w-5xl xl:text-xl"
                >
                  Address real market needs with innovative solutions
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- success stories -->
      <section class="py-8 sm:py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <!-- Header Section -->
          <div class="mb-16 flex items-center justify-center md:mb-24">
            <div class="space-y-4 text-center">
              <p
                class="text-primary intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 rounded-full text-sm font-medium uppercase"
              >
                Real Customers
              </p>
              <h2
                class="text-base-content intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-delay-300 text-2xl font-semibold md:text-3xl lg:text-4xl"
              >
                Success Stories.
              </h2>
              <p
                class="text-base-content/80 intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-delay-500 md:text-xl"
              >
                Check out what our awesome clients are saying about us!
              </p>
            </div>
          </div>
          <div
            id="testimonial-carousel"
            data-carousel='{
          "loadingClasses": "opacity-0",
          "dotsItemClasses": "carousel-dot size-2.5 carousel-active:bg-primary",
          "slidesQty": { "xs": 1, "sm": 2, "lg": 3, "xl": 3 },
          "isInfinite": true
        }'
            class="relative mb-20 w-full lg:mb-36"
          >
            <div>
              <!-- Testimonial Cards Grid -->
              <div class="carousel">
                <div class="carousel-body opacity-0">
                  <!-- Testimonial Card 1 -->
                  <div
                    class="carousel-slide intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-delay-700 p-8 sm:p-2"
                  >
                    <div
                      class="card bg-error/10 rounded-box h-full border-0 shadow-none sm:rotate-[-2deg]"
                    >
                      <div class="card-body gap-4 py-12">
                        <!-- Avatar -->
                        <div class="flex items-center gap-2">
                          <div class="avatar">
                            <div class="size-10 rounded-full bg-base-300">
                            </div>
                          </div>
                          <div>
                            <h4 class="text-base-content font-medium">
                              AgriTech Solutions, Kenya
                            </h4>
                            <p class="text-base-content/80 text-sm">
                              CEO & Founder
                            </p>
                          </div>
                        </div>
                        <!-- Testimonial Quote -->
                        <blockquote class="text-base-content/80">
                          $12M investment | 2,500+ jobs created | 50,000
                          smallholder farmers connected "The partnership
                          transformed our vision into reality, scaling from 3
                          counties to nationwide coverage in just 4 years."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <!-- Testimonial Card 2 -->
                  <div
                    class="carousel-slide intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-down intersect:motion-duration-800 intersect:motion-delay-900 p-8 sm:p-2"
                  >
                    <div
                      class="card bg-warning/10 rounded-box h-full border-0 shadow-none sm:rotate-[2deg]"
                    >
                      <div class="card-body gap-4 py-8">
                        <!-- Avatar -->
                        <div class="flex items-center gap-2">
                          <div class="avatar">
                            <div class="size-10 rounded-full bg-base-300">
                            </div>
                          </div>
                          <div>
                            <h4 class="text-base-content font-medium">
                              Digital Finance Platform, Indonesia
                            </h4>
                            <p class="text-base-content/80 text-sm">
                              Co Founder at
                            </p>
                          </div>
                        </div>
                        <!-- Testimonial Quote -->
                        <blockquote class="text-base-content/80">
                          $15M investment | 20,000+ MSMEs served | $50M+ in
                          loans facilitated "Beyond capital, they brought
                          strategic insight that helped us navigate regulatory
                          challenges and achieve profitability 18 months ahead
                          of plan."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <!-- Testimonial Card 3 -->
                  <div
                    class="carousel-slide intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-delay-1100 p-8 sm:p-2"
                  >
                    <div
                      class="card bg-info/10 rounded-box h-full border-0 shadow-none sm:rotate-[-2deg]"
                    >
                      <div class="card-body gap-4 py-12">
                        <!-- Avatar -->
                        <div class="flex items-center gap-2">
                          <div class="avatar">
                            <div class="size-10 rounded-full bg-base-300">
                            </div>
                          </div>
                          <div>
                            <h4 class="text-base-content font-medium">
                              Renewable Energy Corp, Zambia
                            </h4>
                            <p class="text-base-content/80 text-sm">
                              Chairman
                            </p>
                          </div>
                        </div>
                        <!-- Testimonial Quote -->
                        <blockquote class="text-base-content/80">
                          $18M investment | 100MW capacity | 250,000 households
                          powered "Their patient capital and technical support
                          made sustainable energy accessible to communities
                          previously off-grid."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <!-- Testimonial Card 1 -->
                  <div
                    class="carousel-slide intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-delay-700 p-8 sm:p-2"
                  >
                    <div
                      class="card bg-error/10 rounded-box h-full border-0 shadow-none sm:rotate-[-2deg]"
                    >
                      <div class="card-body gap-4 py-12">
                        <!-- Avatar -->
                        <div class="flex items-center gap-2">
                          <div class="avatar">
                            <div class="size-10 rounded-full bg-base-300">
                            </div>
                          </div>
                          <div>
                            <h4 class="text-base-content font-medium">
                              AgriTech Solutions, Kenya
                            </h4>
                            <p class="text-base-content/80 text-sm">
                              CEO & Founder
                            </p>
                          </div>
                        </div>
                        <!-- Testimonial Quote -->
                        <blockquote class="text-base-content/80">
                          $12M investment | 2,500+ jobs created | 50,000
                          smallholder farmers connected "The partnership
                          transformed our vision into reality, scaling from 3
                          counties to nationwide coverage in just 4 years."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <!-- Testimonial Card 2 -->
                  <div
                    class="carousel-slide intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-down intersect:motion-duration-800 intersect:motion-delay-900 p-8 sm:p-2"
                  >
                    <div
                      class="card bg-warning/10 rounded-box h-full border-0 shadow-none sm:rotate-[2deg]"
                    >
                      <div class="card-body gap-4 py-8">
                        <!-- Avatar -->
                        <div class="flex items-center gap-2">
                          <div class="avatar">
                            <div class="size-10 rounded-full bg-base-300">
                            </div>
                          </div>
                          <div>
                            <h4 class="text-base-content font-medium">
                              Digital Finance Platform, Indonesia
                            </h4>
                            <p class="text-base-content/80 text-sm">
                              Co Founder at
                            </p>
                          </div>
                        </div>
                        <!-- Testimonial Quote -->
                        <blockquote class="text-base-content/80">
                          $15M investment | 20,000+ MSMEs served | $50M+ in
                          loans facilitated "Beyond capital, they brought
                          strategic insight that helped us navigate regulatory
                          challenges and achieve profitability 18 months ahead
                          of plan."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <!-- Testimonial Card 3 -->
                  <div
                    class="carousel-slide intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-delay-1100 p-8 sm:p-2"
                  >
                    <div
                      class="card bg-info/10 rounded-box h-full border-0 shadow-none sm:rotate-[-2deg]"
                    >
                      <div class="card-body gap-4 py-12">
                        <!-- Avatar -->
                        <div class="flex items-center gap-2">
                          <div class="avatar">
                            <div class="size-10 rounded-full bg-base-300">
                            </div>
                          </div>
                          <div>
                            <h4 class="text-base-content font-medium">
                              Renewable Energy Corp, Zambia
                            </h4>
                            <p class="text-base-content/80 text-sm">
                              Chairman
                            </p>
                          </div>
                        </div>
                        <!-- Testimonial Quote -->
                        <blockquote class="text-base-content/80">
                          $18M investment | 100MW capacity | 250,000 households
                          powered "Their patient capital and technical support
                          made sustainable energy accessible to communities
                          previously off-grid."
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Navigation Controls -->
              <button
                class="btn btn-circle carousel-prev btn-primary carousel-disabled:btn-soft carousel-disabled:opacity-100 hover:text-primary-content disabled -start-2 max-sm:start-3"
                disabled="disabled"
              >
                <span class="icon-[tabler--arrow-left] size-5.5"></span>
              </button>
              <button
                class="btn btn-circle carousel-next btn-primary carousel-disabled:btn-soft carousel-disabled:opacity-100 hover:text-primary-content -end-2 max-sm:end-3"
              >
                <span class="icon-[tabler--arrow-right] size-5.5"></span>
              </button>
            </div>
            <!-- Pagination Dots -->
            <div
              class="carousel-pagination absolute -bottom-12 end-0 start-0 flex justify-center gap-2"
            ></div>
          </div>
        </div>
      </section>

      <!-- Contact us Section -->
      <section class="py-8 sm:py-16 lg:py-24" id="contact-us">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
            <p
              class="text-primary intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 text-sm font-medium uppercase"
            >
              Contact Us
            </p>
            <h2
              class="lg:text-base-content intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-200 text-2xl font-semibold md:text-3xl lg:text-4xl"
            >
              Stay Connected with Us
            </h2>
            <p
              class="text-base-content/80 intersect-once intersect:motion-opacity-in-0 intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-delay-500 md:text-xl"
            >
              Reach out for inquiries, support, or collaboration—we'd love to
              hear from you!
            </p>
          </div>
          <!-- Contact Form and Map Grid -->
          <div
            class="card intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-600 shadow-none"
          >
            <div class="card-body grid gap-8">
              <!-- Form Section -->
              <form
                class="lg:w-150 lg:mx-auto intersect-once intersect:motion-preset-slide-up intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-800 space-y-6"
                onsubmit="return false;"
              >
                <div>
                  <label class="label-text" for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    class="input input-lg w-full"
                    placeholder="Enter your name here..."
                  />
                </div>
                <div>
                  <label class="label-text" for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    class="input input-lg w-full"
                    placeholder="Enter your Email here..."
                  />
                </div>
                <div>
                  <label class="label-text" for="message">Message</label>
                  <textarea
                    id="message"
                    class="textarea h-28 w-full"
                    placeholder="Type here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary w-full rounded-full py-8"
                >
                  Send Message
                  <span class="icon-[tabler--send] size-5"></span>
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </section>
    </main>

     <footer class="bg-base-300 py-1">
         <p class="text-white text-center">
            © 2026 CrowdHill Funding. All rights reserved.
          </p>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>