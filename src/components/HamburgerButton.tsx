const HamburgerButton = (props: any) => {
  return (
    <button onClick={props.handleClick} className="flex flex-col items-center">
      <span
        className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      props.isOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      props.isOpen ? "opacity-0" : "opacity-100"
                    }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      props.isOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
