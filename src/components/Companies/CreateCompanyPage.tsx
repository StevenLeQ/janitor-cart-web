// import { faker } from "@faker-js/faker";
import CompanyForm from './CompanyForm';

import Header from '../header/Header';

const bread = [
  { name: 'Companies', link: '/companies', current: true },
  { name: 'New Company', link: '/newCompany', current: true }
];

// TODO Get the passing logic in geez louise
const CreateCompany = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-3 mx-1 flex flex-col items-center gap-5 sm:m-5 sm:mx-10">
        {/* Outside Header and H-rule */}
        <Header
          title="Add New Company"
          subtitle="Create a new company for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
      {/* The form - company info, features, and buttons */}
      <CompanyForm />
    </div>
  );
};

export default CreateCompany;
