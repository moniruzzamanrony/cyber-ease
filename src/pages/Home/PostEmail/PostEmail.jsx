import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const PostEmail = () => {



  
  const { register, handleSubmit, reset } = useForm();

const onSubmit = async (data) => {
  try {
    await axios.post(import.meta.env.VITE_CONTACT_API_URL, data);
    toast.success("Message sent successfully!");
    reset(); // Reset the form
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
  }
};


  return (
    <div id="contact-section" className="flex items-center justify-center bg-black text-white   ">
      <div className="w-[90%]  mx-auto flex flex-col lg:flex-row items-center pt-24 pb-24 gap-6 lg:gap-36">
        {/* Left Side Content */}
        <div className=" mb-6 md:mb-0 flex-1">
          <h2 className="text-2xl md:text-3xl font-light">
            Connect with one of our experts to discover how we can help elevate your business.
          </h2>
          {/* <button className="mt-6 border border-white rounded-full w-12 h-12 flex items-center justify-center">
            ➜
          </button> */}
        </div>

        {/* Right Side Form */}
        <div className=" bg-black  rounded-lg flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-base mb-1">First Name</label>
                <input
                  {...register("firstName")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white   rounded-md w-full"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-base mb-1">Last Name</label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>

              {/* Job Title */}
              <div className="flex flex-col">
                <label className="text-base mb-1">Job Title</label>
                <input
                  {...register("jobTitle")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label className="text-base mb-1">Company</label>
                <input
                  {...register("company")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-base mb-1">E-mail Address</label>
                <input
                  {...register("email")}
                  type="email"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>
            </div>

            <div className="flex justify-between gap-10">
              {/* Disclaimer */}
              <p className="text-xs text-gray-400 mt-6 max-w-md ">
                Subscribe to receive Cyberease emails with newsletters, event invites and special offers. Unsubscribe anytime.
              </p>
              <button
                type="submit"
                className="mt-6 border bg-white border-white text-black rounded-full w-12 h-12 flex items-center justify-center aspect-square"
              >
                ➜
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEmail;
