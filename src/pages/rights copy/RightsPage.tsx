import { faker } from '@faker-js/faker';

import Header from '../../components/header/Header';
import Table from '../../components/table/Table';

import { DocumentIcon } from '@heroicons/react/24/outline';

const generateRights = (count: number) => {
  const rights = [];

  for (let i = 0; i < count; i++) {
    const data = {
      file_name: faker.music.songName(),
      state_category: faker.music.genre(),
      file_size: faker.number.float({ min: 10, max: 800, precision: 0.1 })
    };
    rights.push(data);
  }

  return rights;
};

const button = {
  title: 'New Video',
  link: './newVideo'
};

const ellipsis = [
  { title: 'Edit File...', link: './editRights' },
  { title: 'Delete File...', link: './editRights' },
  { title: 'View File...', link: './editRights' },
  { title: 'Download File...', link: './editRights' }
];

const rights = generateRights(1000);

const bread = [{ name: 'Rights', link: '/rights', current: true }];

const Rights = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Worker Rights Files"
          subtitle="List of rights files available in The Janitor Cart"
          breadcrumbs={bread}
        />
      </div>

      <div className="mx-5 px-4 sm:px-6 lg:px-8">
        <Table
          dataArray={rights}
          button={button}
          ellipsis_data={ellipsis}
          name_icon={<DocumentIcon className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};

export default Rights;
