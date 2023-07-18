import { faker } from "@faker-js/faker";

import Header from "../../components/Header/Header";
import CompaniesTable from "../../components/Companies/CompaniesTable";

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

const people = generatePeople(10); // Generate an array of 10 people

const Companies = () => {
  return (
    <div className="w-full mb-5">
      <div className="m-5 mx-10 flex flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Companies"
          subtitle="List of companies currently using The Janitor Cart services"
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mx-5">
        <div className="justify-end sm:flex sm:items-center">
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="rounded-md bg-indigo-700 px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              New Company
            </button>
          </div>
        </div>
        <CompaniesTable people={people} />
      </div>
    </div>
  );
};

export default Companies;
