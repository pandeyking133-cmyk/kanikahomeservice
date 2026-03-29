import React from "react";

const sitemapData = [
  { url: "/", title: "Home" },
  { url: "/Escorts-in-vasundhara", title: "Escorts in Vasundhara" },
  { url: "/Escorts-in-vaishali", title: "Escorts in Vaishali" },
  { url: "/Escorts-in-noida", title: "Escorts in Noida" },
  { url: "/Escorts-in-raj-nagar", title: "Escorts in Raj Nagar" },
  { url: "/Escorts-in-mohan-nagar", title: "Escorts in Mohan Nagar" },
  { url: "/Escorts-in-kaushambi", title: "Escorts in Kaushambi" },
  { url: "/Escorts-in-ghaziabad", title: "Escorts in Ghaziabad" },
  { url: "/blog", title: "Blog" },
  { url: "/blog/luxury-Escorts-in-vasundhara", title: "Luxury Escorts in Vasundhara" },
  { url: "/blog/premium-Escorts-services-in-vaishali", title: "Premium Escorts in Vaishali" },
  { url: "/blog/professional-Escorts-in-noida", title: "Professional Escorts in Noida" },
  { url: "/blog/elite-event-Escorts-in-ghaziabad", title: "Elite Event Escorts in Ghaziabad" },
];

const Sitemap = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12 text-yellow-400">
        Sitemap
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sitemapData.map((item, index) => (
          <a
            key={index}
            href={`https://kanikahomeservice.in${item.url}`}
            className="border border-gray-800 rounded-xl p-6 hover:border-yellow-500 transition duration-300 group"
          >
            <h2 className="text-xl font-medium text-white group-hover:text-yellow-400 mb-2">
              {item.title}
            </h2>

            <p className="text-gray-400 text-sm break-all">
              https://kanikahomeservice.in{item.url}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;