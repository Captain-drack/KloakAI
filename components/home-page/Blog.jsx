const blogPosts = [
  {
    id: 1,
    logo: "/images/blog/pallavi.jpeg",
    icon: "/images/icon/icon_87.svg",
    title: "Pallavi Panigrahi",
    linkedinLink: "https://www.linkedin.com/in/pallavi-panigrahi-624392152/",
    devLink: "",
  },
  {
    id: 2,
    logo: "/images/blog/Sarthak.png",
    icon: "/images/icon/icon_87.svg",
    title: "Sarthak Sharma",
    linkedinLink: "https://www.linkedin.com/in/sarthology/",
    devLink: "https://dev.to/sarthology",
  },
  // Add more blog posts as needed
];

const socialIcons = [
  {
    iconClass: "fa-brands fa-dev",
    link: "#",
  },
  {
    iconClass: "fab fa-linkedin-in",
    link: "#",
  },
];

const Blog = () => {
  return (
    <>
      {blogPosts.map((post, index) => (
        <div className="col-md-6 d-flex justify-content-center" key={index}>
          <article
            className="blog-meta-four tran3s mt-40 w-100"
            data-aos="fade-up"
            data-aos-delay={index * 100 + 100}
          >
            <img src={post.logo} alt="logo" className="user-image-profile" />
            <div className="post-data mt-50 lg-mt-50">
              <h4 className="tran3s blog-title text-white mt-20 mb-55 lg-mb-30">
                {post.title}
              </h4>
              <div className="read-btn fw-500 text-white d-flex justify-content-between align-items-center">
                <span>Continue Reading</span>
                <ul className="d-flex social-icon style-none">
                  {post.devLink && (
                    <li className="icon-list">
                      <a
                        href={post.devLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-dev text-lg"/>
                      </a>
                    </li>
                  )}
                  {post.linkedinLink && (
                    <li className="icon-list" style={{ marginLeft: "10px" }}>
                      <a
                        href={post.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in text-lg" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
