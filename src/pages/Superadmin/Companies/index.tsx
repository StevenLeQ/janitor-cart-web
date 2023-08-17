import { faker } from '@faker-js/faker';

import Header from '../../../components/Header/Header';
import Table from '../../../components/Table/Table';

const generateCompanies = (count: number) => {
  const companies = [];

  for (let i = 0; i < count; i++) {
    const company = faker.company.name();
    const provider = company.split(/[, ]/)[0].toLowerCase() + '.com';
    const email = faker.internet.email({ provider });

    const data = {
      company,
      email,
      active: faker.datatype.boolean()
    };
    companies.push(data);
  }

  return companies;
};

const button = {
  title: 'New Company',
  link: './create'
};

const alertData = {
  title: 'Deactivating Company?',
  subtitle: 'Are you sure you want to switch the status of the selected company to "Inactive?"?',
  button_text: 'Deactivate'
};

const ellipsis_data = [
  { title: 'Edit Company...', link: './edit' },
  { title: 'Deactivate Company...', alert_data: alertData },
  { title: 'Login As This Company...', link: '.' }
];

const companies = generateCompanies(1000);

const bread = [{ name: 'Companies', link: '.', current: true }];

const Companies = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-3 mx-1 flex flex-col items-center gap-5 sm:m-5 sm:mx-10">
        {/* Outside Header and H-rule */}
        <Header
          title="Companies"
          subtitle="List of companies currently using The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>

      <div className="px-4 sm:mx-5 sm:px-6 lg:px-8">
        <Table
          data_array={companies}
          button={button}
          ellipsis_data={ellipsis_data}
          custom_column={{ key: 'active', type: 0 }}
        />
      </div>
    </div>
  );
};

export default Companies;
