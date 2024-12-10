const Footer = () => {
  return (
    <footer className="c-space flex flex-col items-center justify-between gap-5 border-t border-black-300 pb-3 pt-7 md:flex-row">
      <div className="flex gap-2 text-white-500 opacity-0">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/Mowee59"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/icons/github.svg"
              alt="github"
              className="h-1/2 w-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/aniss-mahfoudi-007931165"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/icons/linkedin.svg"
              alt="linkedin"
              className="h-1/2 w-1/2 bg-white"
            />
          </a>
        </div>
        {/* <div className="social-icon">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="h-1/2 w-1/2"
          />
        </div> */}
      </div>

      <p className="text-white-500">
        © 2024 Aniss Mahfoudi. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
