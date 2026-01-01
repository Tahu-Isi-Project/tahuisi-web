import "@features/index/styles/theme.css";
import communityLogo from "/public/img/tahu_logo.png";
import live2d from "@assets/video/hero-bg.webm";

const HeroSection = () => {
  const asideMenuList = [
    {
      title: "New Event",
      link: "#",
    },
    {
      title: "New Challange",
      link: "#",
    },
  ];
  return (
    <>
      <section className="hero-section relative">
        <img
          className="community-logo absolute z-[1]"
          src={communityLogo.src}
          alt="Community Logo"
        />
        <div className="hero__text-wrap absolute  w-full  h-full z-10">
          <aside className="top-1/2 absolute transform-[translateY(-50%)]">
            <ul className="flex flex-col gap-6">
              {asideMenuList.map((item, idx) => (
                <li className="hero__aside-menu py-5 font-[Allerta] text-[40px] text-right min-w-[393px] bg-white after:bg-[#EE6983] after:w-[16px] relative inline-flex items-center px-6 font-semibold text-black after:content-[''] after:absolute after:top-0 after:right-0 after:h-full">
                  <a id={idx} className="w-full block" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <h1 className="text-[140px] pb-[4%] ml-[4%] leading-none bottom-0 max-w-[1244px]  absolute font-[LuckiestGuy] text-white text-shadow-[0_0_50px_rgba(0,0,0,0.8)] inline-block">
            CIPTAKAN DUNIAMU DI GENSOKYO
          </h1>
        </div>
        <video
          className="relative"
          autoPlay
          muted
          loop
          playsInline
          id="bg-video"
        >
          <source src={live2d} type="video/webm" />
        </video>
      </section>
    </>
  );
};

export default HeroSection;
