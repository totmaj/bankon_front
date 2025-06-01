const Footer = () => {
  return (
    <footer className="md:hidden text-white p-4 fixed bottom-0 w-full main h-16 z-50 border-t border-t-[var(--darkest-gray-color)] flex flex-row justify-between">
      <button
        className=" text-center flex items-center justify-center gap-2
          w-1/2"
      >
        <span>Wallet</span>
      </button>
      <button
        className="text-center flex items-center justify-center gap-2
          w-1/2"
      >
        <span>Monitoring</span>
      </button>
    </footer>
  );
};
export default Footer;