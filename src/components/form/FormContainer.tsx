import FormButtons from './FormButtons';

interface FormContainerProps {
  children: React.ReactNode;
  header: string;
  pageLink?: string;
  type?: number;
}

// There are three types of forms to handle  here ---
// 0 - Form with no button (Empty pageLink)
// 1 - Form with buttons that is second+ form
// 2 - Form with button that is first form
const FormContainer: React.FC<FormContainerProps> = ({
  children,
  header,
  pageLink = '',
  type = 1
}) => {
  return (
    // Container template
    <div
      className={`row-start-auto md:col-span-2 md:row-span-4 ${
        // move form to bottom end if second form
        type === 1 && 'md:row-start-5'
      }`}
    >
      <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
        {/* Header of form */}
        <div className="h-auto w-full pt-4">
          <span className="m-5 text-base font-medium">{header}</span>
          <hr className="border-1 mt-3 h-px border-gray-900/10" />
        </div>
        <div className="mb-2 px-3 py-6 sm:p-5">{children}</div>
      </form>
      {/* Render Buttons if needed */}
      {pageLink && <FormButtons saveLink={pageLink} />}
    </div>
  );
};

export default FormContainer;
