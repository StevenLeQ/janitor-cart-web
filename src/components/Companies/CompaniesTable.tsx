import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

interface Person {
  name: string;
  active: boolean;
  email: string;
}

interface ChildComponentProps {
  people: Person[];
}

const CompaniesTable: React.FC<ChildComponentProps> = ({ people }) => {
  return (
    <div className="mt-5 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    COMPANY
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    EMAIL
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    STATUS
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.active ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-600">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-600">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="relative whitespace-nowrap text-right text-sm font-medium">
                      <a href="#">
                        <EllipsisVerticalIcon className="text-font-gray h-5 hover:text-indigo-600" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesTable;
