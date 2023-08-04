import React from 'react';

import FormAlertWrapper from '../../components/form/FormWrapper';
import FormContainer from '../../components/form/FormContainer';
import FormItem from '../../components/form/FormItem';
import FormTextarea from '../../components/form/FormTextarea';

interface FormProps {
  hasInfo: boolean;
}

import { LinkIcon, FolderIcon } from '@heroicons/react/24/outline';

// The Full Create Video Form layout
const VideosForm: React.FC<FormProps> = ({ hasInfo }) => {
  return (
    // Outer wrapper to set layout grid
    <FormAlertWrapper>
      <FormContainer pageLink="/videos" header="Video Information" type={2}>
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
