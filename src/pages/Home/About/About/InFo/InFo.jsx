const InFo = ({data}) => {
  return (
    <div className="w-[90%] mx-auto px-6 py-20 text-center">
      {/* Top Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {/* 12 Locations */}
        <div>
          <h2 className="text-5xl font-bold"> {data[0]?.locationAcross}</h2>
          <p className="">locations across multiple timezones</p>
        </div>
        {/* 27% Market Share */}
        <div>
          <h2 className="text-5xl font-bold">~{data[0]?.marketShare}</h2>
          <p className="">market share</p>
        </div>
        {/* 250 Employees */}
        <div>
          <h2 className="text-5xl font-bold">{data[0]?.employeesAndContractors}</h2>
          <p className="">employees and contractors</p>
        </div>
      </div>

      {/* Bottom Sections */}
{/* Bottom Sections */}
<div className="flex justify-center items-center  px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 text-left w-full max-w-4xl">
    {/* Mission */}
    <div className="max-w-md mx-auto">
      <h3 className="text-4xl font-bold mb-6">Mission.</h3>
      <p className=" mt-2">

        {data[0]?.mission}
      </p>
    </div>

    {/* Vision */}
    <div className="max-w-md mx-auto">
      <h3 className="text-4xl font-bold mb-6">Vision.</h3>
      <p className=" mt-2">

         {data[0]?.vision}
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default InFo;
