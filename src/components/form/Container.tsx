interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    // Outer Container to set  grid and start alert
    <div className="grid max-w-[150rem] grid-cols-1 gap-x-4 gap-y-4 text-font-black sm:m-5 sm:ml-11 md:grid-cols-3 2xl:grid-cols-4 ">
      {children}
    </div>
  );
};

export default Container;
