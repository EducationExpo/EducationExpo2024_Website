/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useMediaQuery } from 'react-responsive';
import SpeakersLink from "../components/SpeakerLink";
import EventSchedule from "../components/EventSchedule";
import SpeakersSection from "../components/SpeakerSection";

const slides = [
  {
    desktopImage: 'url("assets/img/header/banner-bg-1.jpg")',
    mobileImage: 'url("assets/img/header/banner-bg-1-min.jpg")',
    videoUrl: "https://www.youtube.com/watch?v=0RuxVKKbE9U&ab_channel=AurangabadEducationExpos",
  },
  {
    desktopImage: 'url("assets/img/header/banner-bg-2.jpg")',
    mobileImage: 'url("assets/img/header/banner-bg-2-min.jpg")',
    videoUrl: "https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s",
  },
  {
    desktopImage: 'url("assets/img/header/banner-bg-3.jpg")',
    mobileImage: 'url("assets/img/header/banner-bg-3-min.jpg")',
    videoUrl: "https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s",
  },
];

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <main>
      {/* BANNER SECTION START */}
      <section className="et-banner relative bg-etBlue">
        <div className="et-banner-slider swiper">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <div
                  style={{ backgroundImage: isMobile ? slide.mobileImage : slide.desktopImage }}
                  className="bg-no-repeat bg-cover bg-center pt-[clamp(150px,17.3vw,333px)] pb-[clamp(120px,22vw,422px)] text-white relative overflow-hidden z-[1] before:content-normal before:absolute before:inset-0 before:bg-etBlue/40 before:-z-[1]"
                >
                  <div className="mx-[15.5em] xxxl:mx-[10em] xxl:mx-[40px] xs:mx-[12px]">
                    <div className="flex md:flex-col items-center justify-between gap-x-[30px] gap-y-[30px] md:grid-cols-1">
                      <div className="left relative z-[20] w-[55%] md:w-full">
                        <h6 className="font-kalam font-bold text-[2.4rem] mb-[3px] anim-text">
                          MARATHWARA LEVEL
                        </h6>
                        <h1 className="text-[clamp(42px,6.25vw,12rem)] font-semibold leading-[1.1] mb-[36px] md:mb-[36px] anim-text">
                          Aurangabad Education Expo <span className="font-normal tracking-tighter"> 2024</span>
                        </h1>
                        {/* vectors */}
                        <div className="et-banner-vectors">
                          <div className="absolute left-[457px] bottom-[calc(100%+40px)]">
                            <img src="assets/img/banner-vector.png" alt="decorative vector" className="w-[45px] h-[45px]" />
                          </div>
                          <div className="absolute bottom-0 right-[6px]">
                            <img src="assets/img/banner-vector.png" alt="decorative vector" className="w-[21px] h-[21px]" />
                          </div>
                        </div>
                      </div>
                   
                    </div>
                  </div>
                  {/* bottom title */}
                  <span className="et-banner-bottom-title text-[clamp(30px,13vw,250px)] font-bold text-white/10 text-center block absolute bottom-[40px] left-0 w-full">
                    EDUCATION EXPO
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="et-banner-slider-dots absolute flex flex-col right-[40px] xxs:right-[15px] !left-auto z-[1] !top-[50%] -translate-y-[50%] !w-auto" />
        </div>
      </section>
      {/* BANNER SECTION END */}
      {/* ABOUT SECTION START */}
      <section className="et-about pt-[60px] pb-[130px] xl:pb-[80px] md:pb-[60px] overflow-hidden relative">
        <div className="container mx-auto max-w-[calc(100%-39.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full">
          <div className="flex items-center md:flex-wrap gap-x-[60px] xxl:gap-x-[40px] lg:gap-x-[30px] gap-y-[40px] sm:gap-y-[40px] lg:justify-center">
            {/* left */}
            <div className="et-about-img relative z-[1] md:w-auto shrink-0 max-w-full mr-[70px] md:mr-0 ml-[28px] xxxl:ml-[47px] md:ml-0 xs:w-[70%] xxs:w-[90%] xxs:ml-[47px]">
              <img src="assets/img/about-img.jpg" alt="image" className="shrink-0 rounded-[10px]" />
              <img src="assets/img/about-img-3.jpg" alt="image" className="et-about-floating-img absolute top-[45px] -right-[70px] shrink-0 rounded-[20px] border-white border-[10px] xs:hidden" />
              {/* vectors */}
              <div className="et-about-vectors xs:hidden">
                <img src="assets/img/about-img-vector-1.png" alt="vector" className="et-about-vector-1 absolute -left-[47px] top-[20px] -z-[1]" />
                <img src="assets/img/about-img-vector-2.png" alt="vector" className="et-about-vector-2 absolute -left-[27px] top-[41px] -z-[1]" />
                <img src="assets/img/about-img-vector-3.png" alt="vector" className="et-about-vector absolute -right-[24px] bottom-[34px] -z-[1]" />
              </div>
              {/* video btn */}
              <div className="absolute bottom-[50px] -left-[47px] lg:-left-[27px] md:-left-[47px] w-[180px] lg:w-[160px] aspect-square bg-[url('assets/img/about-video-btn-bg.jpg')] text-center text-[22px] text-white z-[1] flex items-center justify-center before:absolute before:bg-etBlue/80 before:-z-[1] before:inset-0 after:bg-etBlack after:w-[47px] after:h-[30px] after:absolute after:top-[100%] after:left-0 after:-z-[2] after:skew-y-[30deg] after:-translate-y-[17px]">
                <a href="https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s" data-fslightbox="about-video" className="w-[107px] aspect-square rounded-full border border-white/20 flex justify-center items-center text-etBlue relative z-[1] text-[18px] before:absolute before:w-[56px] before:h-[56px] before:bg-white before:rounded-full before:-z-[1] hover:text-black"><i className="fa-solid fa-play" /></a>
              </div>
            </div>
            {/* right */}
            <div className="et-about__txt">
              <h6 className="et-section-sub-title anim-text">About us</h6>
              <h2 className="et-section-title mb-[24px] md:mb-[19px] anim-text">Know More About Education Expo 2024 </h2>
              <p className="mb-[30px] text-[16px] font-light text-etGray md:mb-[30px] rev-slide-up">
                The Aurangabad Education Expo is a premier event organized by the Minds in Motion Foundation, a pioneering organization dedicated to fostering educational excellence and innovation. Established with the vision of creating a dynamic platform for learning, the Foundation is committed to nurturing the intellectual and creative potential of students, educators, and communities.
              </p>
              <div className="flex xxs:flex-wrap items-center gap-[20px] pt-[30px] border-t border-[#D9D9D9] mb-[50px] xxs:mb-[30px] rev-slide-up">
                <div className="shrink-0 h-[80px] w-[80px] rounded-[6px] shadow-[0_4px_50px_10px_rgba(18,96,254,0.10)] flex items-center justify-center">
                  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6038_295)">
                      <path d="M35.4168 33.3346H28.4501C27.7601 33.3346 27.2001 32.7746 27.2001 32.0846C27.2001 31.3946 27.7601 30.8346 28.4501 30.8346H34.5401L36.9651 24.168H3.03343L5.45843 30.8346H11.5501C12.2401 30.8346 12.8001 31.3946 12.8001 32.0846C12.8001 32.7746 12.2401 33.3346 11.5501 33.3346H4.58343C4.05843 33.3346 3.58843 33.0063 3.40843 32.5113L0.0751012 23.3446C-0.0632322 22.9613 -0.00823216 22.5346 0.226768 22.1996C0.460101 21.8663 0.841768 21.668 1.2501 21.668H38.7501C39.1584 21.668 39.5401 21.8663 39.7734 22.2013C40.0084 22.5346 40.0634 22.963 39.9251 23.3463L36.5918 32.513C36.4118 33.0063 35.9418 33.3346 35.4168 33.3346Z" fill="#1260FE" />
                      <path d="M27.0849 40.0013C27.0216 40.0013 26.9583 39.9963 26.8933 39.9863C26.2116 39.8813 25.7433 39.243 25.8483 38.5613L27.2933 29.168H12.7066L14.1516 38.5613C14.2566 39.2446 13.7883 39.8813 13.1066 39.9863C12.4249 40.098 11.7849 39.6246 11.6816 38.9413L10.0149 28.108C9.95994 27.748 10.0633 27.3796 10.3016 27.103C10.5399 26.8263 10.8849 26.668 11.2499 26.668H28.7499C29.1149 26.668 29.4616 26.828 29.6983 27.1046C29.9349 27.3813 30.0399 27.748 29.9849 28.1096L28.3183 38.943C28.2249 39.5596 27.6916 40.0013 27.0849 40.0013Z" fill="#1260FE" />
                      <path d="M37.5 23.7498C36.81 23.7498 36.25 23.1898 36.25 22.4998C36.25 19.2015 34.4866 16.0798 31.6483 14.3515C31.0583 13.9915 30.8716 13.2232 31.2316 12.6332C31.5916 12.0432 32.36 11.8565 32.95 12.2165C36.5266 14.3965 38.7483 18.3365 38.7483 22.4998C38.75 23.1898 38.19 23.7498 37.5 23.7498Z" fill="#1260FE" />
                      <path d="M30.8333 15C32.214 15 33.3333 13.8807 33.3333 12.5C33.3333 11.1193 32.214 10 30.8333 10C29.4525 10 28.3333 11.1193 28.3333 12.5C28.3333 13.8807 29.4525 15 30.8333 15Z" fill="#1260FE" />
                      <path d="M19.9999 13.3333C16.3233 13.3333 13.3333 10.3433 13.3333 6.66667C13.3333 2.99 16.3233 0 19.9999 0C23.6766 0 26.6666 2.99 26.6666 6.66667C26.6666 10.3433 23.6766 13.3333 19.9999 13.3333ZM19.9999 2.5C17.7016 2.5 15.8333 4.37 15.8333 6.66667C15.8333 8.96333 17.7016 10.8333 19.9999 10.8333C22.2983 10.8333 24.1666 8.96333 24.1666 6.66667C24.1666 4.37 22.2983 2.5 19.9999 2.5Z" fill="#1260FE" />
                      <path d="M32.5 24.1667C31.81 24.1667 31.25 23.6067 31.25 22.9167C31.25 19.93 28.82 17.5 25.8333 17.5H14.1667C11.18 17.5 8.75 19.93 8.75 22.9167C8.75 23.6067 8.19 24.1667 7.5 24.1667C6.81 24.1667 6.25 23.6067 6.25 22.9167C6.25 18.5517 9.80167 15 14.1667 15H25.8333C30.1983 15 33.75 18.5517 33.75 22.9167C33.75 23.6067 33.19 24.1667 32.5 24.1667Z" fill="#1260FE" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6038_295">
                        <rect width={40} height={40} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* txt */}
                <div>
                  <h6 className="font-medium text-[18px] text-black mb-[8px]">Speakers at the Education Expo 2024</h6>
                  <p className="text-[16px] font-light text-etGray">The Aurangabad Education Expo 2024 will feature a stellar lineup of speakers, including renowned educational leaders, innovative thinkers, and industry experts.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-[30px] gap-y-[16px] rev-slide-up">
                <a href="#" className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full hover:!bg-black hover:!text-white">Register Now</a>
                <div className="flex items-center gap-[10px]">
                <SpeakersLink />
                  <span className="uppercase font-semibold text-etBlue text-[16px]">Speakers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* vectors */}
        <div className="xs:hidden">
          <img src="assets/img/about-vector-1.png" alt="vector" className="pointer-events-none absolute top-[340px] left-[90px] -z-[1]" />
          <img src="assets/img/about-vector-2.png" alt="vector" className="pointer-events-none absolute top-[153px] right-0 -z-[1]" />
        </div>
      </section>
      {/* ABOUT SECTION END */}
      {/* COUNTDOWN SECTION START */}
      <div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full rev-slide-up relative z-[2]">
        <div className="bg-etBlue relative z-[1] p-[60px] sm:p-[40px] xs:px-[20px] rounded-[20px] overflow-hidden -mb-[114px] shadow-[0_4px_50px_rgba(18,96,254,0.2)] after:absolute after:inset-0 after:-z-[1] after:bg-[url(../assets/img/et-counter-bg.jpg)] after:bg-cover after:bg-no-repeat after:mix-blend-screen flex items-center md:flex-wrap gap-y-[20px]">
          <div className="pr-[54px] border-r md:border-r-0 border-white/20 md:text-center md:pr-0 md:w-full">
            <h2 className="et-section-title !text-white mb-[28px] anim-text">Count Every Second Until Event.</h2>
            <a href="#" className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full border-white border hover:!bg-white hover:!text-etBlue">Buy Ticket</a>
          </div>
          {/* counter */}
          <div className="et-countdown flex sm:flex-wrap justify-center gap-y-[10px] md:w-full *:border-r *:sm:border-r-0 *:border-white/20 *:px-[46px] *:sm:px-[26px] *:xs:px-[16px] font-medium text-white text-[16px] text-center">
            <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
              <span className="days number block" />
              <span>Days</span>
            </div>
            <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
              <span className="hours number block" />
              <span>Hours</span>
            </div>
            <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
              <span className="minutes number block" />
              <span>Minutes</span>
            </div>
            <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
              <span className="seconds number block" />
              <span>Seconds</span>
            </div>
          </div>
          {/* vectors */}
          <div className="sm:hidden">
            <img src="assets/img/counter-vector.png" alt="vector" className="pointer-events-none absolute top-[26px] left-[53%]" />
            <img src="assets/img/counter-vector.png" alt="vector" className="pointer-events-none absolute bottom-[33px] right-[90px]" />
          </div>
        </div>
      </div>
      {/* COUNTDOWN SECTION END */}
      {/* FEATURES SECTION STAR */}
      <div className="bg-[#EEF4FF] relative z-[1] after:absolute after:inset-0 after:bg-[url(../assets/img/features-bg.png)] after:bg-no-repeat after:bg-cover after:-z-[2] after:mix-blend-multiply after:pointer-events-none pb-[130px] xl:pb-[80px] md:pb-[60px] pt-[244px] xl:pt-[194px] md:pt-[174px]">
        <div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full rev-slide-up">
          {/* heading */}
          <div className="text-center mb-[52px]">
            <h6 className="et-section-sub-title anim-text">Event Features</h6>
            <h2 className="et-section-title anim-text">Unifying For A Better World for both students and educators.</h2>
          </div>
          {/* cards */}
          <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
            {/* single card */}
            <div className="rounded-[20px] bg-white overflow-hidden group">
              {/* icon */}
              <div className="w-[146px] aspect-square border-[20px] bg-etBlue border-[#EDF3FE] rounded-full rounded-tr-none ml-auto flex items-center justify-center">
                <img src="assets/img/feature-1.png" alt="Feature icon" className="transition duration-[0.4s] group-hover:-scale-x-100" />
              </div>
              {/* text */}
              <div className="px-[30px] xxl:px-[20px] py-[23px] xxl:py-[18px]">
                <h5 className="font-medium text-[22px] text-etBlack mb-[8px]"><a href="/" className="hover:text-etBlue">Speaker Lineup</a></h5>
                <p className="font-light text-etGray text-[16px]">Hear from renowned educators, industry experts, and thought leaders shaping the future of education.</p>
              </div>
            </div>
            {/* single card */}
            <div className="rounded-[20px] bg-white overflow-hidden group">
              {/* icon */}
              <div className="w-[146px] aspect-square border-[20px] bg-etBlue border-[#EDF3FE] rounded-full rounded-tr-none ml-auto flex items-center justify-center">
                <img src="assets/img/feature-2.png" alt="Feature icon" className="transition duration-[0.4s] group-hover:-scale-x-100" />
              </div>
              {/* text */}
              <div className="px-[30px] xxl:px-[20px] py-[23px] xxl:py-[18px]">
                <h5 className="font-medium text-[22px] text-etBlack mb-[8px]"><a href="/" className="hover:text-etBlue">Networking People</a></h5>
                <p className="font-light text-etGray text-[16px]">Participate in the Marathwada Level Job Fair, linking students and graduates with potential employers.</p>
              </div>
            </div>
            {/* single card */}
            <div className="rounded-[20px] bg-white overflow-hidden group">
              {/* icon */}
              <div className="w-[146px] aspect-square border-[20px] bg-etBlue border-[#EDF3FE] rounded-full rounded-tr-none ml-auto flex items-center justify-center">
                <img src="assets/img/feature-3.png" alt="Feature icon" className="transition duration-[0.4s] group-hover:-scale-x-100" />
              </div>
              {/* text */}
              <div className="px-[30px] xxl:px-[20px] py-[23px] xxl:py-[18px]">
                <h5 className="font-medium text-[22px] text-etBlack mb-[8px]"><a href="/" className="hover:text-etBlue">Innovative Exhibits</a></h5>
                <p className="font-light text-etGray text-[16px]">Learn from international thought leaders and institutions sharing best practices and educational innovations.</p>
              </div>
            </div>
            {/* single card */}
            <div className="rounded-[20px] bg-white overflow-hidden group">
              {/* icon */}
              <div className="w-[146px] aspect-square border-[20px] bg-etBlue border-[#EDF3FE] rounded-full rounded-tr-none ml-auto flex items-center justify-center">
                <img src="assets/img/feature-4.png" alt="Feature icon" className="transition duration-[0.4s] group-hover:-scale-x-100" />
              </div>
              {/* text */}
              <div className="px-[30px] xxl:px-[20px] py-[23px] xxl:py-[18px]">
                <h5 className="font-medium text-[22px] text-etBlack mb-[8px]"><a href="/" className="hover:text-etBlue">Exhibition Space</a></h5>
                <p className="font-light text-etGray text-[16px]">Explore cutting-edge educational technologies and resources from leading exhibitors worldwide.</p>
              </div>
            </div>
          </div>
        </div>
        {/* vectors */}
        <div className="md:hidden">
          <img src="assets/img/features-vector-1.png" alt="vector" className="pointer-events-none absolute bottom-[130px] left-[40px] -z-[1]" />
          <img src="assets/img/features-vector-2.png" alt="vector" className="pointer-events-none absolute top-[222px] right-[180px] -z-[1]" />
          <img src="assets/img/features-vector-3.png" alt="vector" className="pointer-events-none absolute bottom-[138px] right-[106px] -z-[1]" />
        </div>
      </div>
      {/* FEATURES SECTION end */}
      {/* EVENT SCHEDULE SECTION START */}
      <EventSchedule />
      {/* EVENT SCHEDULE SECTION END */}
      {/* STATS SECTION START */}
      <section className="text-center py-[130px] xl:py-[80px] md:py-[60px] bg-[url(../assets/img/stats-bg.jpg)] bg-no-repeat bg-cover relative z-[1] before:absolute before:inset-0 before:bg-etBlue/85 before:-z-[1]">
        <div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full rev-slide-up">
          <div className="flex xs:flex-col gap-x-[77px] sm:gap-x-[57px] gap-y-[15px] justify-center border-b border-white/20 pb-[35px]">
            {/* single stat */}
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">5.8+</h5>
              <h6 className="font-medium text-[16px]">Total Footfall</h6>
            </div>
            {/* single stat */}
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">250+</h5>
              <h6 className="font-medium text-[16px]">School Involved</h6>
            </div>
            {/* single stat */}
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">60k+</h5>
              <h6 className="font-medium text-[16px]">Value of Books Sold</h6>
            </div>
          </div>
          <div className="flex xs:flex-col gap-x-[77px] sm:gap-x-[57px] gap-y-[15px] justify-center  pb-[35px]">
            {/* single stat */}
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">3.2+</h5>
              <h6 className="font-medium text-[16px]">Teacher Visited</h6>
            </div>
            {/* single stat */}
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">250+</h5>
              <h6 className="font-medium text-[16px]">School Involved</h6>
            </div>
            {/* single stat */}
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">55+</h5>
              <h6 className="font-medium text-[16px]">NGO's Participated</h6>
            </div>
            <div className="et-single-stat text-white">
              <h5 className="number font-semibold text-[55px]">50+</h5>
              <h6 className="font-medium text-[16px]">Guest Speakers</h6>
            </div>
          </div>

        </div>
        {/* vectors */}
        <div>
          <img src="assets/img/stats-vector-1.png" alt="vector" className="pointer-events-none absolute top-[150px] left-[105px] -z-[1] md:hidden" />
          <img src="assets/img/stats-vector-2.png" alt="vector" className="pointer-events-none absolute bottom-[63px] left-[63px] -z-[1] w-[80px] aspect-square opacity-10" />
          <img src="assets/img/stats-vector-2.png" alt="vector" className="pointer-events-none absolute top-[80px] right-[70px] -z-[1] opacity-10" />
          <img src="assets/img/stats-vector-3.png" alt="vector" className="pointer-events-none absolute bottom-[112px] right-[80px] -z-[1]" />
        </div>
      </section>
      {/* STATS SECTION END */}
      {/* SPEAKERS SECTION START */}
      <section className="et-speakers py-[130px] lg:py-[80px] md:py-[60px] relative overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
          {/* heading */}
          <div className="et-speakers-heading flex xs:flex-col justify-between items-center mb-[46px] xl:mb-[26px] lg:mb-[16px] gap-[15px]">
            <div className="left xs:text-center">
              <h6 className="et-section-sub-title anim-text">Event Speakers</h6>
              <h2 className="et-section-title anim-text">Meet Our Speakers</h2>
            </div>
            <div className="right">
              <div className="et-speakers-slider-nav flex gap-[16px] sm:gap-[12px]">
                <button className="prev border border-[#D9D9D9] rounded-full w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] text-[18px] text-etBlack hover:bg-etBlue hover:border-etbg-etBlue hover:text-white">
                  <i className="fa-solid fa-arrow-left-long" />
                </button>
                <button className="next border border-[#D9D9D9] rounded-full w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] text-[18px] text-etBlack hover:bg-etBlue hover:border-etbg-etBlue hover:text-white">
                  <i className="fa-solid fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="et-speakers-slider swiper">
            <div className="swiper-wrapper">
             
            <SpeakersSection />
            </div>
          </div>
        </div>
      </section>
      {/* SPEAKERS SECTION END */}
      {/* TESTIMONIAL SECTION START */}
      <section className="et-testimonial bg-[#EEF4FF] relative z-[1] overflow-hidden py-[130px] lg:py-[80px] md:py-[60px] before:absolute before:inset-0 before:-z-[1] before:bg-[url('assets/img/testimonial-bg.png')] before:bg-no-repeat before:bg-cover before:mix-blend-multiply before:opacity-[0.03] px-[12px]">
        {/* <div class="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full"> */}
        {/* slider */}
        <div className="et-testimonial-slider swiper overflow-visible">
          <div className="swiper-wrapper">
            {/* single testimony  */}
            <div className="swiper-slide even:mt-[80px] xs:even:mt-0">
              <div className="et-testimony p-[40px] lg:p-[30px] md:p-[20px] border border-[#256E56]/10 bg-white rounded-[16px]">
                <div className="ml-auto w-max max-w-full">
                  <svg width={46} height={32} viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.89997 20.8595C7.91 23.3494 6.35003 25.8094 4.26501 28.1795C3.60501 28.9295 3.51501 30.0094 4.055 30.8494C4.47504 31.5094 5.16498 31.8694 5.91498 31.8694C6.125 31.8694 6.33503 31.8545 6.54504 31.7794C10.955 30.4894 21.26 25.9145 21.545 11.2444C21.65 5.58947 17.51 0.72949 12.125 0.17449C9.14001 -0.125525 6.17004 0.849416 3.965 2.82943C1.76004 4.82446 0.5 7.67449 0.5 10.6445C0.5 15.5944 4.01004 19.9295 8.89997 20.8595Z" className="fill-etBlue" />
                    <path d="M36.065 0.17449C33.095 -0.125525 30.125 0.849416 27.92 2.82943C25.715 4.82446 24.455 7.67449 24.455 10.6445C24.455 15.5944 27.965 19.9295 32.855 20.8595C31.865 23.3494 30.305 25.8094 28.22 28.1795C27.56 28.9295 27.47 30.0094 28.01 30.8494C28.43 31.5094 29.12 31.8694 29.87 31.8694C30.08 31.8694 30.29 31.8545 30.5 31.7794C34.91 30.4894 45.215 25.9144 45.5 11.2444V11.0345C45.5 5.46944 41.405 0.72949 36.065 0.17449Z" className="fill-etBlue" />
                  </svg>
                </div>
                {/* rating stars */}
                <div className="flex gap-[9px] text-[#FFC532] text-[18px] mb-[12px]">
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                </div>
                {/* <h6 className="text-[18px] mb-[16px]">Eventek Special Event on Business</h6> */}
                <p className="text-etBlack/70 font-normal text-[16px] mb-[40px]">"Participating in the Aurangabad Education Expo 2023 was a truly inspiring experience. The Urdu Kitab Mela-2023 was a beautiful celebration of our rich literary heritage, and witnessing the enthusiasm of over 200,000 visitors was heartwarming. The vast collection of Urdu books brought our culture to life and rekindled a love for reading among the young generation."</p>
                {/* single testimonay bottom */}
                <div className="flex items-center gap-x-[16px] xxs:flex-col xxs:items-start gap-y-[10px">
                  <div className="img rounded-full overflow-hidden p-[7px] w-max max-w-full shrink-0">
                    <img src="assets/img/reviewer-1.png" alt="reviewer image" className="w-[48px] h-[48px]" />
                  </div>
                  <div className="txt">
                    <h5 className="text-etBlack font-normal text-[18px] mb-[3px]">Maulana Umrain M. Rahmani</h5>
                    <h6 className="text-etGray/70 font-normal text-[16px]">Reactor, Mahd-e-Millat, Malegaon</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* single testimony  */}
            <div className="swiper-slide even:mt-[80px] xs:even:mt-0">
              <div className="et-testimony p-[40px] lg:p-[30px] md:p-[20px] border border-[#256E56]/10 bg-white rounded-[16px]">
                <div className="ml-auto w-max max-w-full">
                  <svg width={46} height={32} viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.89997 20.8595C7.91 23.3494 6.35003 25.8094 4.26501 28.1795C3.60501 28.9295 3.51501 30.0094 4.055 30.8494C4.47504 31.5094 5.16498 31.8694 5.91498 31.8694C6.125 31.8694 6.33503 31.8545 6.54504 31.7794C10.955 30.4894 21.26 25.9145 21.545 11.2444C21.65 5.58947 17.51 0.72949 12.125 0.17449C9.14001 -0.125525 6.17004 0.849416 3.965 2.82943C1.76004 4.82446 0.5 7.67449 0.5 10.6445C0.5 15.5944 4.01004 19.9295 8.89997 20.8595Z" className="fill-etBlue" />
                    <path d="M36.065 0.17449C33.095 -0.125525 30.125 0.849416 27.92 2.82943C25.715 4.82446 24.455 7.67449 24.455 10.6445C24.455 15.5944 27.965 19.9295 32.855 20.8595C31.865 23.3494 30.305 25.8094 28.22 28.1795C27.56 28.9295 27.47 30.0094 28.01 30.8494C28.43 31.5094 29.12 31.8694 29.87 31.8694C30.08 31.8694 30.29 31.8545 30.5 31.7794C34.91 30.4894 45.215 25.9144 45.5 11.2444V11.0345C45.5 5.46944 41.405 0.72949 36.065 0.17449Z" className="fill-etBlue" />
                  </svg>
                </div>
                {/* rating stars */}
                <div className="flex gap-[9px] text-[#FFC532] text-[18px] mb-[12px]">
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                </div>
                {/* <h6 className="text-[18px] mb-[16px]">Eventek Special Event on Business</h6> */}
                <p className="text-etBlack/70 font-normal text-[16px] mb-[40px]">"The Aurangabad Education Expo 2023 was a beacon of hope and inspiration for all who attended. The NGO Conference was particularly moving, showcasing the incredible work being done by dedicated individuals and organizations. The collective energy and commitment to societal development were palpable and deeply inspiring.
                "</p>
                {/* single testimonay bottom */}
                <div className="flex items-center gap-x-[16px] xxs:flex-col xxs:items-start gap-y-[10px">
                  <div className="img rounded-full overflow-hidden p-[7px] w-max max-w-full shrink-0">
                    <img src="assets/img/reviewer-2.png" alt="reviewer image" className="w-[48px] h-[48px]" />
                  </div>
                  <div className="txt">
                    <h5 className="text-etBlack font-normal text-[18px] mb-[3px]">Mr. Aasif Mujtaba</h5>
                    <h6 className="text-etGray/70 font-normal text-[16px]">IITian, Founder & Director of Miles 2 Smile Foundation</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* single testimony  */}
            <div className="swiper-slide even:mt-[80px] xs:even:mt-0">
              <div className="et-testimony p-[40px] lg:p-[30px] md:p-[20px] border border-[#256E56]/10 bg-white rounded-[16px]">
                <div className="ml-auto w-max max-w-full">
                  <svg width={46} height={32} viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.89997 20.8595C7.91 23.3494 6.35003 25.8094 4.26501 28.1795C3.60501 28.9295 3.51501 30.0094 4.055 30.8494C4.47504 31.5094 5.16498 31.8694 5.91498 31.8694C6.125 31.8694 6.33503 31.8545 6.54504 31.7794C10.955 30.4894 21.26 25.9145 21.545 11.2444C21.65 5.58947 17.51 0.72949 12.125 0.17449C9.14001 -0.125525 6.17004 0.849416 3.965 2.82943C1.76004 4.82446 0.5 7.67449 0.5 10.6445C0.5 15.5944 4.01004 19.9295 8.89997 20.8595Z" className="fill-etBlue" />
                    <path d="M36.065 0.17449C33.095 -0.125525 30.125 0.849416 27.92 2.82943C25.715 4.82446 24.455 7.67449 24.455 10.6445C24.455 15.5944 27.965 19.9295 32.855 20.8595C31.865 23.3494 30.305 25.8094 28.22 28.1795C27.56 28.9295 27.47 30.0094 28.01 30.8494C28.43 31.5094 29.12 31.8694 29.87 31.8694C30.08 31.8694 30.29 31.8545 30.5 31.7794C34.91 30.4894 45.215 25.9144 45.5 11.2444V11.0345C45.5 5.46944 41.405 0.72949 36.065 0.17449Z" className="fill-etBlue" />
                  </svg>
                </div>
                {/* rating stars */}
                <div className="flex gap-[9px] text-[#FFC532] text-[18px] mb-[12px]">
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                </div>
                <p className="text-etBlack/70 font-normal text-[16px] mb-[40px]">"The Aurangabad Education Expo 2023 was an extraordinary event that truly embodied the spirit of learning and community. Witnessing the overwhelming participation and the diverse array of programs, I was deeply moved by the commitment to educational excellence displayed by everyone involved.
"</p>
                {/* single testimonay bottom */}
                <div className="flex items-center gap-x-[16px] xxs:flex-col xxs:items-start gap-y-[10px">
                  <div className="img rounded-full overflow-hidden p-[7px] w-max max-w-full shrink-0">
                    <img src="assets/img/reviewer-3.png" alt="reviewer image" className="w-[48px] h-[48px]" />
                  </div>
                  <div className="txt">
                    <h5 className="text-etBlack font-normal text-[18px] mb-[3px]">Adv. Faiz Syed  </h5>
                    <h6 className="text-etGray/70 font-normal text-[16px]">Founder & President of IRC</h6>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* TESTIMONIAL SECTION END */}
     
      {/* GALLERY SECTION START */}
      <section className="grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {/* single gallery item */}
        <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
          <img src="assets/img/gallery/1.jpg" alt="gallery image" />
          <a href="assets/img/gallery/1.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
            <i className="fa-plus fa-regular" />
          </a>
        </div>
        {/* single gallery item */}
        <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
          <img src="assets/img/gallery/2.jpg" alt="gallery image" />
          <a href="assets/img/gallery/2.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
            <i className="fa-plus fa-regular" />
          </a>
        </div>
        {/* single gallery item */}
        <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
          <img src="assets/img/gallery/3.jpg" alt="gallery image" />
          <a href="assets/img/gallery/3.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
            <i className="fa-plus fa-regular" />
          </a>
        </div>
        {/* single gallery item */}
        <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
          <img src="assets/img/gallery/4.jpg" alt="gallery image" />
          <a href="assets/img/gallery/4.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
            <i className="fa-plus fa-regular" />
          </a>
        </div>
        {/* single gallery item */}
        <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
          <img src="assets/img/gallery/5.jpg" alt="gallery image" />
          <a href="assets/img/gallery/5.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
            <i className="fa-plus fa-regular" />
          </a>
        </div>
        {/* single gallery item */}
        <div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
          <img src="assets/img/gallery/6.jpg" alt="gallery image" />
          <a href="assets/img/gallery/6.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
            <i className="fa-plus fa-regular" />
          </a>
        </div>
        {/* single gallery item */}
        <div className="bg-etBlue xxs:col-span-2 relative z-[1] flex items-center justify-center text-center before:absolute before:inset-0 before:bg-[url('assets/img/gallery-text-bg.jpg')] before:-z-[1] before:mix-blend-multiply p-[15px] xxs:pt-[25px] xxs:pb-[30px]">
          <div>
            <h6 className="et-section-sub-title !text-white before:!bg-white anim-text">Gallery</h6>
            <span className="block text-white font-semibold text-[100px] leading-[0.86] mb-[13px] xxl:text-[80px] xl:text-[60px] md:!text-[50px] xs:!text-[45px] xs:!mb-[10px] anim-text">2023</span>
            <h2 className="et-section-title !text-white !font-normal mb-[31px] xxl:!text-[40px] xl:!text-[35px] md:!text-[30px] md:mb-[21px] anim-text">Our Events Gallery</h2>
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-white text-[16px] h-[45px] px-[15px] text-white hover:bg-white hover:text-etBlue">View All Gallery</a>
          </div>
        </div>
        {/* single gallery item */}
        <div className="relative xxs:col-span-2 z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
          <img src="assets/img/gallery/7.jpg" alt="gallery image" />
          <a href="assets/img/gallery/7.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
            <i className="fa-plus fa-regular" />
          </a>
        </div>
      </section>
      {/* GALLERY SECTION END */}
      {/* SPONSORS & CTA SECTION START */}
      <section className="et-cta py-[130px] lg:py-[80px] md:py-[60px] relative z-[1]">
        <div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full">
          {/* sponsors */}
          {/* <div className="flex items-center md:flex-col gap-x-[42px] gap-y-[25px] border border-[#D9D9D9] rounded-[20px] py-[30px] xxs:py-[20px] px-[34px] xxs:px-[16px] mb-[130px] lg:mb-[80px] md:mb-[60px]">
        
            <div className="flex xxs:flex-wrap items-end gap-[40px] xxs:gap-x-[10px] gap-y-[10px] pr-[42px] md:pr-0 border-r md:border-r-0 border-[#D9D9D9] max-w-[230px] md:max-w-full shrink-0">
              <h5 className="font-medium text-[20px] text-etBlack anim-text">Trusted By Top sponsors</h5>
              <a href="/" className="inline-block mb-[8px] group">
                <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.4121L11.1668 2.24543H3.87542V0H15V11.1246H12.7546V3.8332L1.58789 15L0 13.4121Z" className="fill-etBlue group-hover:fill-etBlack transition duration-[400ms]" />
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-between md:justify-center gap-[30px] md:gap-[50px] w-full xxs:*:w-[40%]">
              <a href="/" className="group">
                <svg width={73} height={60} viewBox="0 0 73 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="xxs:mx-auto">
                  <path d="M40.2451 23.1693L37.7232 25.6913L42.032 30L23.5379 48.4937L5.04384 30L23.5379 11.5059L27.4781 15.4461L19.3866 23.5376L24.588 28.7389L27.1099 26.2169L24.4305 23.5376L30 17.968L32.6794 20.6474L35.2013 18.1255L32.5219 15.4461L42.9242 5.04383L45.6036 7.72323L48.1255 5.20131L42.9242 0L30 12.9242L23.5379 6.4621L0 30L23.5379 53.5376L47.0758 30L40.2451 23.1693Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M72.9242 30.0008L49.3867 6.46289L25.8488 30.0008L32.6794 36.8311L35.2013 34.3092L30.8926 30.0008L49.3867 11.5067L67.8804 30.0008L49.3867 48.4945L45.4465 44.5547L53.5379 36.4632L48.3366 31.2616L45.8147 33.7835L48.4944 36.4632L42.9246 42.0328L40.2452 39.353L37.7232 41.875L40.4026 44.5547L30.0004 54.957L27.3206 52.2776L24.7987 54.7995L30.0004 60.0008L42.9246 47.0766L49.3867 53.5383L72.9242 30.0008Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                </svg>
              </a>
              <a href="/" className="group">
                <svg width={59} height={60} viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="xxs:mx-auto">
                  <path d="M39.9089 31.8303H34.6058L53.1743 50.3985C48.7682 54.1842 43.2151 56.2491 37.3454 56.2491C30.8464 56.2491 24.7361 53.7181 20.1403 49.1229C15.3749 44.3568 13.006 38.09 13.0285 31.8303C13.0376 29.2954 13.4415 26.7628 14.236 24.3305C15.2011 21.3748 16.7409 18.5671 18.8654 16.0902L27.1056 24.3305H32.4088L18.8146 10.7363L17.4889 12.0624C13.96 15.5912 11.5755 19.8349 10.3214 24.3308C9.63792 26.7807 9.28737 29.3045 9.27956 31.8306C9.2571 39.0508 11.9921 46.2782 17.4886 51.775C22.7927 57.0784 29.8446 59.9993 37.345 59.9993C44.8455 59.9993 51.8974 57.0784 57.2009 51.7746L58.5265 50.4489L39.9089 31.8303Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M28.0808 3.75022C40.8664 3.75022 51.3802 13.6622 52.3404 26.206H15.6366C15.3143 27.4389 15.0976 28.6933 14.9875 29.9559H56.1616V28.0808C56.1616 12.5969 43.5647 0 28.0808 0C12.5969 0 0 12.5969 0 28.0808V29.9559H7.47571C7.55741 28.6992 7.71038 27.4461 7.94929 26.206H3.82118C4.78135 13.6622 15.2951 3.75022 28.0808 3.75022Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                </svg>
              </a>
              <a href="/" className="group">
                <svg width={72} height={60} viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="xxs:mx-auto">
                  <path d="M35.9032 38.8125C24.2204 38.8125 14.7151 48.3175 14.7151 60.0006H18.7796C18.7796 50.5585 26.4615 42.877 35.9032 42.877C45.3449 42.877 53.0268 50.5585 53.0268 60.0006H57.0913C57.0913 48.3175 47.586 38.8125 35.9032 38.8125Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M35.9032 45.9531C28.1577 45.9531 21.8567 52.2542 21.8567 59.9997H25.9212C25.9212 54.4956 30.3992 50.0176 35.9032 50.0176C41.4073 50.0176 45.8852 54.4956 45.8852 59.9997H49.9498C49.9498 52.2546 43.6487 45.9531 35.9032 45.9531Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M35.9032 21.1881C47.586 21.1881 57.0913 11.6832 57.0913 0H53.0268C53.0268 9.4421 45.3449 17.1236 35.9032 17.1236C26.4615 17.1236 18.7796 9.4421 18.7796 0H14.7151C14.7155 11.6835 24.2204 21.1881 35.9032 21.1881Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M14.4248 28.7546C15.6383 27.9178 16.9025 27.1515 18.2118 26.4582C9.68746 20.7391 4.06451 11.0157 4.06451 0.00195312H0C0 11.7514 5.67329 22.2006 14.4248 28.7546Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M42.9528 31.0425C40.6834 31.5578 38.3264 31.8388 35.9032 31.8388C33.4801 31.8388 31.1231 31.5578 28.8537 31.0425C26.6649 31.5756 24.5711 32.3503 22.6003 33.3378C26.7175 34.9867 31.2042 35.9033 35.9032 35.9033C40.6023 35.9033 45.089 34.9867 49.2062 33.3378C52.1397 32.1629 54.8882 30.6208 57.3818 28.753C66.1329 22.199 71.8066 11.7498 71.8066 0H67.742C67.742 11.0138 62.1191 20.7376 53.5948 26.4563C50.4068 28.5951 46.811 30.1668 42.9528 31.0425Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M35.9032 14.0469C43.6487 14.0469 49.9498 7.74549 49.9498 0H45.8852C45.8852 5.50442 41.4073 9.98239 35.9032 9.98239C30.3992 9.98239 25.9212 5.50442 25.9212 0H21.8567C21.8567 7.74549 28.1577 14.0469 35.9032 14.0469Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M57.3822 31.2461C56.1687 32.0829 54.9045 32.8492 53.5952 33.5428C62.1195 39.2619 67.7425 48.9853 67.7425 59.9991H71.807C71.8066 48.2493 66.1333 37.8001 57.3822 31.2461Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M28.8537 28.9565C31.1232 28.4412 33.4801 28.1602 35.9033 28.1602C38.3265 28.1602 40.6834 28.4412 42.9529 28.9565C45.1417 28.4234 47.2355 27.6487 49.2062 26.6613C45.0891 25.0123 40.6024 24.0957 35.9033 24.0957C31.2042 24.0957 26.7175 25.0123 22.6004 26.6613C19.6668 27.8361 16.9184 29.3783 14.4248 31.246C5.67367 37.8 0 48.2492 0 59.999H4.06451C4.06451 48.9852 9.68746 39.2614 18.2118 33.5427C21.3998 31.4039 24.9959 29.8326 28.8537 28.9565Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                </svg>
              </a>
              <a href="/" className="group">
                <svg width={48} height={60} viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="xxs:mx-auto">
                  <path d="M19.26 28.4096C17.0083 30.6617 13.3453 30.6599 11.0932 28.4093L3.91973 21.2383V9.46172L19.6787 25.22L22.4506 22.4503L0 0V40.1812L16.9788 57.16C18.8103 58.9915 21.2446 60 23.8346 60C26.4246 60 28.8589 58.9915 30.6897 57.16L47.4327 40.417V0.254956L19.26 28.4096ZM27.9189 54.3885C26.8281 55.4792 25.3775 56.0803 23.835 56.0803C22.2918 56.0803 20.8418 55.4792 19.7504 54.3885L3.91973 38.5579V26.7813L25.6392 48.5001L25.6399 48.5008C25.6406 48.5015 25.6413 48.5022 25.6423 48.5029C25.8583 48.7188 26.0849 48.9195 26.3168 49.1121C26.3796 49.1642 26.4444 49.2124 26.5083 49.2628C26.6891 49.4053 26.8735 49.5415 27.0625 49.6699C27.1249 49.7124 27.1877 49.7543 27.2508 49.795C27.4714 49.9376 27.6969 50.0709 27.9274 50.1943C27.954 50.2085 27.9799 50.2245 28.0068 50.2383C28.8242 50.6666 29.6993 50.972 30.6106 51.1507C30.6337 51.1553 30.6571 51.1592 30.6801 51.1638C30.8106 51.1883 30.9393 51.2177 31.0712 51.2372L27.9189 54.3885ZM43.5137 27.0175V38.794C43.5137 38.794 36.2909 45.9998 36.1409 46.1221C36.1232 46.1367 36.104 46.1487 36.0863 46.1629C34.1346 47.7171 31.4038 47.8253 29.3454 46.4856C29.3351 46.4789 29.3238 46.4735 29.3138 46.4664C29.1812 46.3789 29.0536 46.282 28.927 46.1824C28.9004 46.1615 28.8717 46.1434 28.8451 46.1218C28.7011 46.0044 28.5621 45.8778 28.4274 45.7445C28.422 45.7392 28.416 45.7345 28.4103 45.7292L25.259 42.5772C25.3576 42.5627 25.4537 42.54 25.5516 42.5226C25.6555 42.5042 25.7594 42.4861 25.8622 42.4645C26.0679 42.4208 26.2707 42.3687 26.4725 42.312C26.5505 42.29 26.6299 42.2723 26.7072 42.2481C26.9817 42.1634 27.2519 42.0673 27.5175 41.9584C27.5774 41.934 27.6348 41.9042 27.694 41.8783C27.9004 41.7886 28.104 41.6936 28.3036 41.5897C28.393 41.5432 28.4802 41.4925 28.5681 41.4432C28.7366 41.3485 28.9022 41.2496 29.0653 41.1446C29.1539 41.0875 29.2419 41.0298 29.3287 40.9698C29.4947 40.8553 29.656 40.7337 29.8152 40.6081C29.8879 40.551 29.962 40.4961 30.0333 40.4365C30.2592 40.2479 30.4794 40.0511 30.6901 39.8408L43.5137 27.0175ZM27.9189 37.0693C26.8281 38.16 25.3775 38.761 23.835 38.761C22.2918 38.761 20.8418 38.16 19.7504 37.0693L16.5941 33.9123C18.5852 33.6208 20.5021 32.7105 22.0311 31.1819L43.5137 9.71278V21.4744L27.9189 37.0693Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                </svg>
              </a>
              <a href="/" className="group">
                <svg width={73} height={60} viewBox="0 0 73 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="xxs:mx-auto">
                  <path d="M40.2451 23.1693L37.7232 25.6913L42.032 30L23.5379 48.4937L5.04384 30L23.5379 11.5059L27.4781 15.4461L19.3866 23.5376L24.588 28.7389L27.1099 26.2169L24.4305 23.5376L30 17.968L32.6794 20.6474L35.2013 18.1255L32.5219 15.4461L42.9242 5.04383L45.6036 7.72323L48.1255 5.20131L42.9242 0L30 12.9242L23.5379 6.4621L0 30L23.5379 53.5376L47.0758 30L40.2451 23.1693Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M72.9243 30.0008L49.3868 6.46289L25.8489 30.0008L32.6795 36.8311L35.2014 34.3092L30.8927 30.0008L49.3868 11.5067L67.8805 30.0008L49.3868 48.4945L45.4466 44.5547L53.538 36.4632L48.3367 31.2616L45.8148 33.7835L48.4945 36.4632L42.9247 42.0328L40.2453 39.353L37.7234 41.875L40.4028 44.5547L30.0005 54.957L27.3207 52.2776L24.7988 54.7995L30.0005 60.0008L42.9247 47.0766L49.3868 53.5383L72.9243 30.0008Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                </svg>
              </a>
              <a href="/" className="group">
                <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="xxs:mx-auto">
                  <path d="M27.2821 23.8021C28.7403 24.629 30.1313 25.6177 31.4222 26.7784C29.858 16.1461 20.6767 7.95703 9.6167 7.95703V11.2759C17.7696 11.2762 24.7178 16.5154 27.2821 23.8021Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M32.7228 36.21C31.2516 35.373 29.8613 34.3771 28.5789 33.2227C30.1431 43.8549 39.324 52.0434 50.3838 52.0434V48.7245C42.2356 48.7242 35.2902 43.4907 32.7228 36.21Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M33.2227 31.4224C43.8546 29.8578 52.0431 20.6772 52.0431 9.61719H48.7242C48.7242 17.7698 43.4853 24.718 36.199 27.2822C35.372 28.7408 34.3834 30.1315 33.2227 31.4224Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M26.7784 28.5781C16.1455 30.1424 7.95703 39.323 7.95703 50.383H11.2759C11.2759 42.2307 16.5151 35.2825 23.8018 32.7183C24.629 31.26 25.6177 29.8691 26.7784 28.5781Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M32.4612 23.6948C32.9079 25.3106 33.1919 26.9932 33.2844 28.7264C39.6956 20.1019 38.9935 7.82014 31.1737 0L28.8271 2.34658C34.5914 8.11142 35.7999 16.7289 32.4612 23.6948Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M27.5395 36.3053C27.0929 34.6895 26.8088 33.0069 26.7163 31.2734C20.3048 39.8976 21.0066 52.179 28.827 59.9995L31.1736 57.6529C25.4094 51.8881 24.2009 43.2708 27.5395 36.3053Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M36.2908 32.4646C34.6775 32.9094 32.9978 33.1925 31.2671 33.284C35.0461 36.104 39.6122 37.6293 44.4133 37.6293C50.3014 37.6293 55.8366 35.3362 60.0001 31.1728L57.6535 28.8262C54.117 32.3627 49.415 34.3101 44.4133 34.3101C41.5536 34.3104 38.7931 33.6713 36.2908 32.4646Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                  <path d="M23.6944 27.5398C25.3106 27.0931 26.9932 26.8088 28.7267 26.7166C20.1022 20.305 7.82045 21.0068 0 28.8272L2.34657 31.1738C8.1111 25.4093 16.7283 24.2011 23.6944 27.5398Z" className="fill-etGray2 transition duration-[400ms] group-hover:fill-etBlue" />
                </svg>
              </a>
            </div>
          </div> */}
          {/* cta */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-[30px]">
            {/* venue map */}
            <div className="bg-[#EEF4FF] p-[40px] lg:p-[30px] xs:px-[20px] xs:pb-0 pb-0 lg:pb-0 rounded-[20px] overflow-hidden relative z-[1] before:absolute before:inset-0 before:bg-[url('assets/img/cta-bg-1.jpg')] before:bg-cover before:bg-no-repeat before:bg-center before:-z-[1] before:mix-blend-multiply">
              <div className="mb-[22px]">
                <h6 className="et-section-sub-title anim-text">Event Venue Map</h6>
                <h2 className="et-section-title anim-text">Get Direction To The Event Venue</h2>
              </div>
              <div className="relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15006.9873551739!2d75.3281762!3d19.8929091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb981014c102d5%3A0xe6031b4285b4b7b4!2sAamkhas%20Maidan!5e0!3m2!1sen!2sin!4v1719414603906!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[303px] rounded-tl-[20px] rounded-tr-[20px]" />
                {/* <div className="absolute inset-[40px] top-auto flex rounded-[20px] overflow-hidden bg-white xxs:flex-col">
                  <img src="assets/img/cta-venue-img.jpg" alt="venue image" className="shrink-0 w-[50%] xxs:w-full" />
                  <div className="flex items-center justify-center w-full">
                    <a href="https://maps.app.goo.gl/yytfP3eVuxfa5J3T9" className="bg-etBlue rounded-full text-white h-[45px] px-[15px] text-[17px] my-[10px] flex items-center justify-center hover:bg-white hover:text-etBlue">Get Direction</a>
                  </div>
                </div> */}
              </div>
            </div>
            {/* join card */}
            <div className="bg-etBlue p-[40px] lg:p-[30px] xs:px-[20px] xs:pb-0 pb-0 lg:pb-0 rounded-[20px] overflow-hidden relative z-[1] before:absolute before:inset-0 before:bg-[url('assets/img/cta-bg-2.jpg')] before:bg-cover before:bg-no-repeat before:bg-center before:-z-[1] before:opacity-30 before:mix-blend-overlay">
              <div className="mb-[34px]">
              <h6 className="et-section-sub-title !text-white before:!bg-white anim-text">Build Your Career</h6>
<h2 className="et-section-title !text-white mb-[18px] anim-text">Join Us at the Education Expo</h2>
<p className="text-[16px] text-white font-light mb-[25px]">Volunteer with us at the Education Expo and make a difference in the community. There are many ways to get involved, and your contribution can help create a lasting impact. Join us and be a part of an inspiring event dedicated to education and growth.</p>
<a href="/" className="bg-etBlue border border-white rounded-full h-[45px] px-[15px] text-[17px] text-white inline-flex items-center justify-center hover:bg-white hover:text-etBlue">Volunteer Now</a>

              </div>
              <div className="rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
                <img src="assets/img/cta-img.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        {/* vectors */}
        <div className="xs:hidden">
          <img src="assets/img/features-vector-1.png" alt="vector" className="pointer-events-none absolute top-[372px] left-[40px] -z-[1]" />
          <img src="assets/img/features-vector-3.png" alt="vector" className="pointer-events-none absolute bottom-[207px] right-[106px] -z-[1]" />
        </div>
      </section>
      {/* SPONSORS & CTA SECTION END */}
     
    </main>

  );
}
