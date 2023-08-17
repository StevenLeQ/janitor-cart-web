import React from 'react';

import FormAlertWrapper from '../../../components/Form/Container';
import FormContainer from '../../../components/Form';
import FormItem from '../../../components/Form/Item';
import FormTextarea from '../../../components/Form/Textarea';

interface FormProps {
  hasInfo: boolean;
}

import { LinkIcon, FolderIcon } from '@heroicons/react/24/outline';

// The Full Create Video Form layout
const VideosForm: React.FC<FormProps> = ({ hasInfo }) => {
  return (
    // Outer wrapper to set layout grid
    <FormAlertWrapper>
      <FormContainer pageLink="/superadmin/videos" header="Video Information">
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
      </FormContainer>
    </FormAlertWrapper>
  );
};

export default VideosForm;
