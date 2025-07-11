

const LiveCycle = ({ data }) => {
  const lifeCycleText = data[0]?.lifeCycleAndServices || "";
  // const lifeCycleText =
  //   "Monitoring#24/7 network monitoring with alerts network monitoring with alerts network monitoring with alerts network monitoring with alerts&Penetration Testing#Regular ethical hacking to find vulnerabilities&Security Audits#Scheduled audits for compliance and assurance & Monitoring#24/7 network monitoring with alerts&Penetration Testing#Regular ethical hacking to find vulnerabilities&Security Audits#Scheduled audits for compliance and assurance Monitoring#24/7 network monitoring with alerts&Penetration Testing#Regular ethical hacking to find vulnerabilities&Security Audits#Scheduled audits for compliance and assurance";

  const serviceItems = lifeCycleText.split("&").map((item) => {
    const [title, subtitle] = item.split("#");
    return { title, subtitle };
  });
  const firstFive = serviceItems.slice(0, 6);
  const remaining = serviceItems.slice(6);
  return (
    <div className="bg-black text-white py-20 px-2">
      <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-56">
        {/* Left Content */}
        <div className="w-full ">


          <h2 className="text-2xl md:text-4xl text-[rgba(255,255,255,0.82)] font-bold mt-6">Our Services</h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 ">
            {firstFive.map((item, index) => (
              <div key={index} className="p-2 rounded shadow">
                <h3 className="text-base text-[rgba(255,255,255,0.82)] font-semibold pb-1">{item.title}</h3>
                <p className="text-[rgba(255,255,255,0.82)] text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>
          {remaining.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:w-2/3 mx-auto mt-3 ">
              {remaining.map((item, index) => (
                <div key={index} className="p-4 rounded shadow">
                  <h3 className="text-lg text-[rgba(255,255,255,0.82)] font-semibold ">
                    {item.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.82)]">{item.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveCycle;
