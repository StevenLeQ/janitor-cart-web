import Header from "../../components/Header";

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
    </div>
  );
};

export default Companies;
