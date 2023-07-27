// import { faker } from "@faker-js/faker";

import RightsForm from './RightsForm';
import Header from '../../components/header/Header';

const bread = [
  { name: 'Rights', link: '/rights', current: true },
  { name: 'Edit Rights', link: '#', current: true }
];

const EditRights = () => {
  return (
    <div className="mb-5 w-full px-2 sm:p-0">
      <div className="mb-5 flex flex-col items-center gap-5 sm:m-5 sm:mx-10 sm:mb-0">
        {/* Outside Header and H-rule */}
        <Header
          title="Edit Rights"
          subtitle="Edit an existing rights file for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>
      {/* The form - Rights info, features, and buttons */}
      <RightsForm hasInfo={true} />
    </div>
  );
};

export default EditRights;
