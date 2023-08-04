interface FormWrapperProps {
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    // Outer wrapper to set layout grid and start alert
    <div className="grid max-w-[150rem] grid-cols-1 gap-x-4 gap-y-8 text-font-black sm:m-5 sm:ml-11 md:grid-cols-3 2xl:grid-cols-4 ">
      {children}
    </div>
  );
};

export default FormWrapper;
