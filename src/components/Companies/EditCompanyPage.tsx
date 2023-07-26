// import { faker } from "@faker-js/faker";

import Header from '../header/Header';

const bread = [
  { name: 'Companies', link: '/companies', current: true },
  { name: 'Edit Company', link: '/editCompany', current: true }
];

const EditCompany = () => {
  return (
    <div className="">
      <div className="m-5 mx-10 mb-5 flex w-full flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Edit Company"
          subtitle="Edit an existing company for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
    </div>
  );
};

export default EditCompany;
