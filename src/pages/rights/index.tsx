import { faker } from '@faker-js/faker';

import Header from '../../components/header/Header';
import Table from '../../components/table/Table';

import { DocumentIcon } from '@heroicons/react/24/outline';

const generateRights = (count: number) => {
  const rights = [];

  for (let i = 0; i < count; i++) {
    const data = {
      file_name: faker.music.songName(),
      state_category: faker.location.state(),
      file_size: faker.number.float({ min: 10, max: 800, precision: 0.1 })
    };
    rights.push(data);
  }

  return rights;
};

const button = {
  title: 'New File',
  link: './newRights'
};

const alertData = {
  title: 'Delete Work File?',
  subtitle:
    'Are you sure you want to permanently remove the selected work file?',
  button_text: 'Delete'
};

const ellipsis_data = [
  { title: 'Edit File...', link: './editRights' },
  { title: 'Delete File...', alert_data: alertData },
  { title: 'View File...', link: './editRights' },
  { title: 'Download File...', link: './editRights' }
];

const rights = generateRights(1000);

const bread = [{ name: 'Rights', link: '/rights', current: true }];

const Rights = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-3 mx-1 flex flex-col items-center gap-5 sm:m-5 sm:mx-10">
        {/* Outside Header and H-rule */}
        <Header
          title="Worker Rights Files"
          subtitle="List of rights files available in The Janitor Cart"
          breadcrumbs={bread}
        />
      </div>

      <div className="px-4 sm:mx-5 sm:px-6 lg:px-8">
        <Table
          data_array={rights}
          button={button}
          ellipsis_data={ellipsis_data}
          name_icon={<DocumentIcon className="h-5 w-5" />}
          custom_column={{ key: 'state_category', type: 1 }}
        />
      </div>
    </div>
  );
};

export default Rights;
