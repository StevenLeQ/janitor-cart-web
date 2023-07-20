import { faker } from "@faker-js/faker";

import Header from "../../../components/Header/Header";
import CompaniesTable from "../../../components/Companies/CompaniesTable";

const generatePeople = (count: number) => {
  const people = [];
  
  for (let i = 0; i < count; i++) {
    const person = {
    name: faker.person.fullName(),
    active: faker.datatype.boolean(),
    email: faker.internet.email()
    };
    people.push(person);
  }
  
  return people;
};

const people = generatePeople(1000); // Generate an array of x people

const bread = [
  { name: 'Companies', link: '/companies', current: true },
]

const Companies = () => {
  return (
    <div className="w-full mb-5">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Companies"
          subtitle="List of companies currently using The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mx-5">
        <CompaniesTable people={people} />
      </div>
    </div>
  );
};

export default Companies;
