import Image from "next/image";

const Block2 = () => {
  const data = [
    {
      icon: "/images/icon/Removebg-Preview.png",
      title: "Data analysis co-pilot",
      description: "Provides advanced data analysis, generating actionable insights for the organizations.",
    },
    {
      icon: "/images/icon/Employee-info-folder.png",
      title: "Document Management co pilo",
      description: "They can assist in organizing, categorizing, and retrieving documents, making it easier to manage and access important records.",
    },
    {
      icon: "/images/icon/Call-Center-Technical-Support-Isometric.png",
      title: "Administrative Support and Internal Communications co-pilot",
      description: "Streamlines administrative tasks and serves as a central hub for internal communications.",
    },
    {
      icon: "/images/icon/Isometric-61.png",
      title: "Copywriter co-pilot",
      description: "Assists in creating content, ensuring consistency and quality.",
    },
    {
      icon: "/images/icon/RemoveBG Preview (2).png",
      title: "Translator co-pilot",
      description: "Translates documents to any language in real-time.",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 ${index === 1 ? "active" : ""}`}
        >
          <div
            className="card-style-twelve text-center position-relative mt-40"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <Image
                width={180}
                height={200}
                layout="intrinsic"
                src={item.icon}
                alt="shape"
                className="lazy-img"
              />
            </div>
            <h4 className="text-white mb-10 mt-25">{item.title}</h4>
            <p className="text-white opacity-75 mb-25">{item.description}</p>
            <a href="#" className="arrow tran3s">
              <img
                src="/images/icon/icon_80.svg"
                alt="shape"
                className="lazy-img"
              />
            </a>
          </div>
          {/* /.card-style-twelve */}
        </div>
      ))}
    </>
  );
};

export default Block2;
