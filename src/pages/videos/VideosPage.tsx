import { faker } from '@faker-js/faker';

import Header from '../../components/header/Header';
import Table from '../../components/table/Table';

import { VideoCameraIcon } from '@heroicons/react/24/outline';

const generateVideos = (count: number) => {
  const videos = [];

  for (let i = 0; i < count; i++) {
    const data = {
      file_name: faker.music.songName(),
      file_description: faker.music.genre()
    };
    videos.push(data);
  }

  return videos;
};

const button = {
  title: 'New Video',
  link: './newVideos'
};

const ellipsis = [
  { title: 'Edit Video...', link: './editVideos' },
  { title: 'Delete Video...', link: './editVideos' },
  { title: 'View File...', link: './editVideos' }
];

const videos = generateVideos(1000);

const bread = [{ name: 'Videos', link: '/videos', current: true }];

const Videos = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Videos"
          subtitle="List of videos available in The Janitor Cart"
          breadcrumbs={bread}
        />
      </div>

      <div className="mx-5 px-4 sm:px-6 lg:px-8">
        <Table
          dataArray={videos}
          button={button}
          ellipsis_data={ellipsis}
          name_icon={<VideoCameraIcon className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};

export default Videos;
