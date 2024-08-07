import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="form-widget mb-30">
        <div className="logo">
          <Link href="/">
            <div class="hero-logo">
              <div class="logo">KloakAI</div>
            </div>
          </Link>
        </div>
        <h6 className="pt-40 pb-10 text-white fw-normal">
          Join our newsletter
        </h6>
        <form
          onSubmit={handleSubmit}
          action="#"
          className="position-relative me-xxl-5"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="fw-500 position-absolute">
            Subscribe
          </button>
        </form>
        <div className="fs-14 mt-10 text-white opacity-50">
          We only send interesting and relevant emails.
        </div>
      </div>
    </>
  );
};

export default Footer;
