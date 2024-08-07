const BlockFeatureList = () => {
  const featureList = [
    {
      title: "Government Agencies",
    },
    {
      title: "Educational Institutions",
    },
    {
      title: "Healthcare Organizations",
    },
    {
      title: "Law Enforcement",
    },
    {
      title: "Social Services",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <h2 className="main-title text-white">
          Personalized <span>AI Assistance</span> such as.
        </h2>
      </div>
      <p className="text-md text-white opacity-75 pt-20 pb-30 lg-pb-20">
      To ensure data security, we deploy AI copilots on offline Large Language Models (LLMs), which significantly reduces the risk of data breaches and unauthorized access. By operating in an offline environment, these LLMs are isolated from the internet, eliminating exposure to potential cyber threats and vulnerabilities associated with online platforms.Furthermore, offline deployment allows for rigorous, tailored security measures to be implemented, including strict access controls and regular audits, ensuring that data privacy and integrity are maintained at the highest standards.

      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockFeatureList;
