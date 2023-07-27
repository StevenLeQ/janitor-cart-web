import { faker } from '@faker-js/faker';

import Header from '../../components/header/Header';
import Table from '../../components/table/Table';

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
  link: './newCompany'
};

const ellipsis = [
  { title: 'Edit Company...', link: './editCompany' },
  { title: 'Deactivate Company...', link: '#' },
  { title: 'Login As This Company...', link: '#' }
];

const companies = generateCompanies(1000);

const bread = [{ name: 'Companies', link: '/companies', current: true }];

const Companies = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Companies"
          subtitle="List of companies currently using The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>

      <div className="mx-5 px-4 sm:px-6 lg:px-8">
        <Table dataArray={companies} button={button} ellipsis_data={ellipsis} />
      </div>
    </div>
  );
};

export default Companies;
