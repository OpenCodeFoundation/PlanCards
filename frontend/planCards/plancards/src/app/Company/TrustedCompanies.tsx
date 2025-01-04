/* eslint-disable @next/next/no-img-element */
// components/TrustedCompanies.js
const TrustedCompanies = () => {
    return (
      <section className="py-8 bg-white">
        <h2 className="text-center text-lg font-medium text-gray-700 mb-4">
          TRUSTED BY TEAMS AT
        </h2>
        <div className="flex justify-center space-x-6">
          <img src="/microsoft.png" alt="Microsoft" className="h-8" />
          <img src="/google.png" alt="Google" className="h-8" />
          <img src="/hp.png" alt="HP" className="h-8" />
          <img src="/deloitte.png" alt="Deloitte" className="h-8" />
          <img src="/figma.png" alt="Figma" className="h-8" />
        </div>
      </section>
    );
  };
  
  export default TrustedCompanies;
  