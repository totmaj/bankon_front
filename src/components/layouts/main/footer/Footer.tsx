const Footer = () => {
  return (
    <footer className="md:hidden text-white p-4 fixed bottom-0 w-full main h-16 z-50 border-t border-t-[var(--darkest-gray-color)] flex flex-row justify-between">
      <button
        className=" text-center flex items-center justify-center gap-2
          w-1/2"
      >
        <a  href="#">
          Wallet
        </a>
      </button>
      <button
        className="text-center flex items-center justify-center gap-2
          w-1/2"
      >
       <a target="_blank" href="https://w.bankon.click/">Monitoring</a>
      </button>
    </footer>
  );
};
export default Footer;
