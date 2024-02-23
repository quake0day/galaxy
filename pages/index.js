
import Layout from "../src/layout/Layout";
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // 创建 gtag.js 脚本
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-T48JF7DKL9';
    document.body.appendChild(scriptTag);

    // 初始化 dataLayer 和 gtag 函数
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-T48JF7DKL9');

    // 清理函数
    return () => {
      document.body.removeChild(scriptTag);
    }
  }, []);
  return (
    <Layout pageName={"Welcome"}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img="img/hero/bg.png" />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h2 className="fn_title" title="Galaxy Mentor">
                Galaxy Mentor
              </h2>
              <p className="fn_desc fn_animated_text">
                 Unleash your potential across the universe of subjects with our AI-powered guidance.
              </p>
              <div style={{display: "flex", justifyContent: "center", margin_top: "25px"}}>
                <a
                    className="neoh_fn_button only_text"
                    href="http://galaxymentor.com:3000/course-selection"
                    style={{marginRight: "5px"}}
                >
                  Live Demo
                </a>
                <a
                    className="neoh_fn_button only_text"
                    href="http://galaxymentor.com:3000/login"
                    style={{marginLeft: "5px"}}
                >
                  Login
                </a>
              </div>




            </div>
          </div>
          {/*<a*/}
          {/*  href="#about"*/}
          {/*  className="neoh_fn_down magic-hover magic-hover__square"*/}
          {/*>*/}
          {/*  <span className="text">Scroll Down</span>*/}
          {/*  <span className="icon">*/}
          {/*    <img src="svg/right-arr.svg" alt="" className="fn__svg" />*/}
          {/*  </span>*/}
          {/*</a>*/}
        </div>
      </div>

      {/*/!* !Hero Header *!/*/}
      {/*/!* About Section *!/*/}
      {/*<AboutComponent />*/}
      {/*/!* !About Section *!/*/}
      {/*/!* Services Section *!/*/}
      {/*<ServicesComponent />*/}
      {/*/!* !Services Section *!/*/}
      {/*<Drops />*/}
      {/*/!* Investor Section *!/*/}
      {/*<WhyChooseUsComponent />*/}
      {/*/!* !Investor Section *!/*/}
      {/*/!* Blog Section *!/*/}
      {/*<BlogComponent />*/}
    </Layout>
  );
};
export default Index;
