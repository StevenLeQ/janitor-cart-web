import FormButtons from './Buttons';

interface HeaderProps {
  children: React.ReactNode;
  header: string;
  pageLink?: string;
  isSecond?: boolean;
}

// There are three types of forms to handle  here ---
// 0 - Form with no button, first row (Pagelink empty, isSecond false)
// 1 - Form with button, second+ row (Pagelink provided, isSecond true)
// 2 - Form with button, first row (Pagelink provided, isSecond false)
const Header: React.FC<HeaderProps> = ({
  children,
  header,
  pageLink = '',
  isSecond = false
}) => {
  return (
    // Container template
    <div
      className={`row-start-auto md:col-span-2 md:row-span-4 ${
        // move form to bottom end if second form
        isSecond && 'md:row-start-5'
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

export default Header;
