import ListSkeleton from "../../Shared/ListSkeleton";

const TestimonialSection = ({ data,loading }) => {

if (loading) {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-14 h-14 rounded-full border-4 border-t-4 border-t-red-500 border-b-transparent animate-spin shadow-lg"></div>
    </div>
  );
}
  return (
    <div className="w-[90%] mx-auto text-center py-10 md:py-28 px-4">
      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row justify-evenly gap-10 text-gray-900 font-poppins">
        <div>
          <h2 className="text-3xl font-bold">{data[0]?.edgarValue}</h2>
          <p className="text-sm text-gray-600">
             {data[0]?.edgarYear}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{data[0]?.kidsValue}</h2>
          <p className="text-sm text-gray-600">
             {data[0]?.kidsYear}
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{data[0]?.clients}</h2>
          <p className="text-sm text-gray-600">client interfaces</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="mt-6 text-gray-700 text-sm leading-relaxed text-justify">
        {data[0]?.kidsDesc}
      </p>

      {/* Testimonial Author with Arrows */}
      <div className="mt-6 flex items-center justify-center gap-4 text-gray-900 font-poppins">
        <button className="text-2xl font-extrabold">&larr;</button>
        <h3 className="font-semibold text-lg">Clavius Lab</h3>
        <button className="text-2xl">&rarr;</button>
      </div>
    </div>
  );
};

export default TestimonialSection;
