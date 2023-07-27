// import { faker } from "@faker-js/faker";
import CompanyForm from './RightsForm';

import Header from '../../components/header/Header';

const bread = [
  { name: 'Rights', link: '/rights', current: true },
  { name: 'New File', link: '#', current: true }
];

// TODO Get the passing logic in geez louise
const CreateRights = () => {
  return (
    <div className="mb-5 w-full">
      <div className="m-3 mx-1 flex flex-col items-center gap-5 sm:m-5 sm:mx-10">
        {/* Outside Header and H-rule */}
        <Header
          title="Add New File"
          subtitle="Add a new rights file for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
      {/* The form - company info, features, and buttons */}
      <CompanyForm hasInfo={false} />
    </div>
  );
};

export default CreateRights;