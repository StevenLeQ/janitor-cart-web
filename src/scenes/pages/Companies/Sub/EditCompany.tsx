// import { faker } from "@faker-js/faker";

import Header from '../../../../components/Header/Header';

const bread = [
  { name: 'Companies', link: '/companies', current: true },
  { name: 'New Company', link: '/editCompany', current: true }
];

const EditCompany = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
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
