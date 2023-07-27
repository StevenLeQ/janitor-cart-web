// import { faker } from "@faker-js/faker";

import CompanyForm from './CompanyForm';
import Header from '../../components/header/Header';

const bread = [
  { name: 'Companies', link: '/companies', current: true },
  { name: 'Edit Company', link: '#', current: true }
];

const EditCompany = () => {
  return (
    <div className="mb-5 w-full px-2 sm:p-0">
      <div className="mb-5 flex flex-col items-center gap-5 sm:m-5 sm:mx-10 sm:mb-0">
        {/* Outside Header and H-rule */}
        <Header
          title="Edit Company"
          subtitle="Edit an existing company for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
      {/* The form - company info, features, and buttons */}
      <CompanyForm hasInfo={true} />
    </div>
  );
};

export default EditCompany;
