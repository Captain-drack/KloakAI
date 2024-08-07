import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/Header";
import Hero from "../../components/home-page/Hero";
import ShapeGroup from "../../components/home-page/ShapeGroup";
import Block2 from "../../components/home-page/Block2";
import BlockFeatureList from "../../components/home-page/BlockFeatureList";
import Blog from "../../components/home-page/Blog";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer from "../../components/home-page/Footer";
import Image from "next/image";

const KloakAI = () => {
  return (
    <div className="dark-bg-one">
      <ShapeGroup />

      <Seo pageTitle="KloakAI" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Hero />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="illustration-holder" data-aos="fade-right">
          <Image
            width={697}
            height={694}
            layout="intrinsic"
            src="/images/assets/Image with removed background.png"
            alt="illustration"
            className="main-illustration lazy-img"
          />
          <div className="shapes shape-one rounded-circle" />
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Twenty Six
        ============================================== 
        */}
      <div className="fancy-feature-twentySix position-relative zn2 pt-150 lg-pt-80">
        {/* /.wrapper-xl */}

        <div className="container">
          <div
            className="title-style-nine text-center mb-60 lg-mb-30"
            data-aos="fade-up"
          >
            <h2 className="main-title text-white">
              Why <span>KloakAI</span>
            </h2>
            <p className="text-white opacity-50 fs-20 pt-15">
              Public sector organizations struggle with adopting basic AI models
              due to strict privacy requirements and high vulnerability to
              cyberattacks. Mainstream AI tools often compromise
              confidentiality, putting sensitive government and public data at
              risk. Kloak AI is a game-changer, offering a privacy-focused,
              secure copilot tailored for the public sector. It ensures data
              protection, regulatory compliance, and cybersecurity while
              enhancing efficiency and productivity. This makes Kloak AI an
              essential tool for public sector organizations, meeting their
              unique needs and safeguarding their data.
            </p>
          </div>
          {/* /.title-style-nine */}

          <div className="row gx-xxl-5">
            <Block2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Seven
        ============================================== 
        */}
      <div className="fancy-feature-twentySeven position-relative zn2 mt-250 lg-mt-120 mb-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto order-lg-last">
              <BlockFeatureList />
              {/* /.block-style-three */}
            </div>
            <div
              className="col-lg-6 col-md-8 m-auto order-lg-first"
              data-aos="fade-right"
            >
              <div className="illustration-holder md-mt-50 pe-xxl-1 pe-xl-5 pe-lg-4">
                <Image
                  width={569}
                  height={559}
                  layout="intrinsic"
                  src="/images/assets/Image-background (2).png"
                  alt="illustration"
                  className="lazy-img main-img m-auto"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}
        <div className="r-shape-one shapes" />
      </div>

      {/*
        =====================================================
        Blog Section Four
        =====================================================
        */}
      <div className="blog-section-four position-relative">
        <div className="container">
          <div
            className="title-style-nine text-center mb-40 lg-mb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title text-white">
              Co-Founders
            </h2>
          </div>
          {/* /.title-style-nine */}
          <div className="row gx-xxl-6">
            <Blog />
          </div>
          {/* /.row */}

        </div>
      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-eight theme-basic-footer mt-150 mb-150">
        <div className="top-footer zn2 position-relative">
          <img
            src="/images/shape/shape_107.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <Footer />
              </div>
            </div>
            {/* /.inner-wrapper */}
          </div>
        </div>
        {/* /.top-footer */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
      </div>
    </div>
    // main-page-wrapper
  );
};

export default KloakAI;
