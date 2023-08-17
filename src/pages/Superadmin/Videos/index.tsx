import { faker } from '@faker-js/faker';

import Header from '../../../components/Header/Header';
import Table from '../../../components/Table';

import { VideoCameraIcon } from '@heroicons/react/24/outline';

const generateVideos = (count: number) => {
  const videos = [];

  for (let i = 0; i < count; i++) {
    const data = {
      file_name: faker.music.songName(),
      file_description: faker.company.catchPhrase()
    };
    videos.push(data);
  }
  const test = {
    file_name: faker.music.songName(),
    file_description:
      'Aards are a group of warm-blooded vertebrates constituting the class Aves (/ˈeɪviːz/), characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate'
  };
  videos.push(test);

  return videos;
};

const button = {
  title: 'New Video',
  link: './create'
};

const alertData = {
  title: 'Delete Video?',
  subtitle: 'Are you sure you want to permanently remove the selected video?',
  button_text: 'Delete'
};

const ellipsis_data = [
  { title: 'Edit Video...', link: './edit' },
  { title: 'Delete Video...', alert_data: alertData },
  { title: 'View Video...', link: './edit' }
];

const videos = generateVideos(1000);

const bread = [{ name: 'Videos', link: '.', current: true }];

const Videos = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-3 mx-1 flex flex-col items-center gap-5 sm:m-5 sm:mx-10">
        {/* Outside Header and H-rule */}
        <Header
          title="Videos"
          subtitle="List of videos available in The Janitor Cart"
          breadcrumbs={bread}
        />
      </div>

      <div className="px-4 sm:mx-5 sm:px-6 lg:px-8">
        <Table
          data_array={videos}
          button={button}
          ellipsis_data={ellipsis_data}
          name_icon={<VideoCameraIcon className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};

export default Videos;
