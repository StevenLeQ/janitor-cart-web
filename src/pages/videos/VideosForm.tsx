import FormItem from '../../components/form/FormItem';
import FormButtons from '../../components/form/FormButtons';
import FormTextarea from '../../components/form/FormTextarea';

interface FormProps {
  hasInfo: boolean;
}

import { LinkIcon, FolderIcon } from '@heroicons/react/24/outline';

// The Full Create Video Form layout
const VideosForm: React.FC<FormProps> = ({ hasInfo }) => {
  return (
    // Outer wrapper to set layout grid
    <div className="grid max-w-[150rem] grid-cols-1 gap-x-4 gap-y-8 text-font-black sm:m-5 sm:ml-11 sm:grid-rows-4 md:grid-cols-3 2xl:grid-cols-4 ">
      {/* Container - white box with 3/7 or so width */}
      <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg md:col-span-2 md:row-span-4">
        {/* Header of form */}
        <div className="h-auto w-full pt-4">
          <span className="m-5 text-base font-medium">File Information</span>
          <hr className="border-1 mt-3 h-px border-gray-900/10" />
        </div>

        <div className="mb-2 px-3 py-6 sm:p-5">
          <div className="grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            {/* Video Name */}
            <div className="sm:col-span-6">
              <FormItem name="name" title="File Name" icon={<FolderIcon />} />
            </div>

            {/* Video Description */}
            <div className="sm:col-span-6">
              <FormTextarea name="sub" title="Video Description" />
            </div>

            {/* Video Link */}
            <div className="sm:col-span-6">
              <FormItem name="link" title="Video Link" icon={<LinkIcon />} />
            </div>
          </div>
        </div>
      </form>

      {/* Buttons */}
      <div className="row-span-4 row-start-auto -mt-6 md:col-span-2 md:row-start-5">
        <FormButtons saveLink="/videos" cancelLink="/videos" />
      </div>
    </div>
  );
};

export default VideosForm;
