import "@features/index/styles/about_section.css";

const aboutTitle = "/svg/about_title.svg";

const AboutSection = () => {
  return (
    <section className="about-section bg-cover h-screen @container relative">
      <div className="content-container py-40.5">
        <div className="card px-50 py-78.75 bg-white relative z-10 rounded-[70px] mx-auto max-w-[90%] shadow-[25px_25px_40px_0px_rgba(0,0,0,0.25)]">
          <div className="about-title-bg scale-125 top-0 left-[-10%]  w-fit h-full absolute z-[-1]">
            <img src={aboutTitle} className="w-full h-full" />
          </div>
          <div className="card-wrapper flex flex-row gap-60.25">
            <div className="card-title-wrapper text-end leading-22">
              <h2 className="card-title whitespace-nowrap font-[LuckiestGuy] outline-stroke text-[72px]">
                TAHU ISI
              </h2>
              <span className="font-[Mclaren] text-[40px] outline-stroke inline-block">
                PROJECT
              </span>
            </div>
            <div className="card-text outline-stroke text-[29px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              metus nisi, efficitur eget feugiat in, semper et metus. Mauris
              lobortis sit amet neque at aliquet. Donec id leo efficitur,
              tincidunt metus et, sollicitudin turpis.
            </div>
          </div>
          <div className="color-palette absolute mb-9.25 mr-[5%] bottom-0 flex fle-row right-0 max-w-158.25 w-full h-6.75">
            <span className="color-palette-1 bg-[#FCF5EE] flex-6" />
            <span className="color-palette-2 bg-[#FFC4C4] flex-2" />
            <span className="color-palette-3 bg-[#EE6983] flex-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
