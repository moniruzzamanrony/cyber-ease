import ListSkeleton from "../../../../Shared/ListSkeleton";

const ESGSection = ({ data, loading }) => {
  if (loading) {
    return <ListSkeleton></ListSkeleton>;
  }
  return (
    <div
      className="  relative h-[500px] lg:h-[800px] bg-center flex items-center "
      style={{
        backgroundImage: "url('/image/esg.png')",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-3xl text-white pl-2 lg:pl-28 ">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">ESG</h2>
        <p className="mt-4 text-sm leading-relaxed text-white drop-shadow-lg text-justify px-2 ">
          {data[0]?.esg}
        </p>

        {/* <a href="#" className="mt-4 inline-block text-sm font-semibold underline px-2">
            View More
          </a> */}
      </div>
    </div>
  );
};

export default ESGSection;
