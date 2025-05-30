import ListSkeleton from "../../../../Shared/ListSkeleton";

const ESGSection = ({ data, loading }) => {

if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-14 h-14 rounded-full border-4 border-t-4 border-t-red-500 border-b-transparent animate-spin shadow-lg"></div>
    </div>
  );
}
  return (
    <div
      className="  relative h-[500px] lg:h-[800px] bg-center flex items-center "
      style={{
        backgroundImage: "url('/image/esg.png')",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-3xl text-white/60 pl-2 lg:pl-28 ">
        <h2 className="text-3xl font-bold text-white/60 drop-shadow-lg">ESG</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/60 drop-shadow-lg text-justify px-2 ">
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
