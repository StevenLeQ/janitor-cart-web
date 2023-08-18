// import { faker } from "@faker-js/faker";
import VideosForm from '../VideosForm';

import Header from '../../../../components/Header/Header';

const bread = [
  { name: 'Videos', link: '/superadmin/videos', current: false },
  { name: 'New Video', link: '.', current: true }
];

const CreateVideos = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-3 mx-1 flex flex-col items-center gap-5 sm:m-5 sm:mx-10">
        {/* Outside Header and H-rule */}
        <Header
          title="Add Video"
          subtitle="Add a new video for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
      {/* The form - company info, features, and buttons */}
      <VideosForm hasInfo={false} />
    </div>
  );
};

export default CreateVideos;
