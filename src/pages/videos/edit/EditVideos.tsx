// import { faker } from "@faker-js/faker";

import VideosForm from '../VideosForm';
import Header from '../../../components/header/Header';

const bread = [
  { name: 'Videos', link: '/videos', current: true },
  { name: 'Edit Video', link: '#', current: true }
];

const EditVideos = () => {
  return (
    <div className="mb-5 w-full px-2 sm:p-0">
      <div className="mb-5 flex flex-col items-center gap-5 sm:m-5 sm:mx-10 sm:mb-0">
        {/* Outside Header and H-rule */}
        <Header
          title="Edit Video"
          subtitle="Edit an existing video file for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
      {/* The form - Videos info, features, and buttons */}
      <VideosForm hasInfo={true} />
    </div>
  );
};

export default EditVideos;
