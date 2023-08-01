// import { faker } from "@faker-js/faker";

import RightsForm from './RightsForm';
import Header from '../../components/header/Header';

const bread = [
  { name: 'Rights', link: '/rights', current: false },
  { name: 'Edit File', link: '#', current: true }
];

const EditRights = () => {
  return (
    <div className="mb-5 w-full px-2 sm:p-0">
      <div className="mb-5 flex flex-col items-center gap-5 sm:m-5 sm:mx-10 sm:mb-0">
        {/* Outside Header and H-rule */}
        <Header
          title="Edit File"
          subtitle="Edit an existing rights file for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
      {/* The form - rights info, features, and buttons */}
      <RightsForm hasInfo={true} />
    </div>
  );
};

export default EditRights;
