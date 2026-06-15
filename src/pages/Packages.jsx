import "./Packages.scss";
const packages = [
  {
    title: "Silver",
    features: [
      "1 Customized Plan",
      "4 In-Clinic Customized Facial Treatments",
      "Skin Boosters / Enhancements Add-On Included",
      "Skincare Included",
      "Renelif Eye Included",
    ],
    price: "$2,500",
  },
  {
    title: "Gold",
    features: [
      "1 Customized Plan",
      "8 In-Clinic Customized Facial Treatments",
      "Skin Boosters / Enhancements Add-On Included",
      "Skincare Included",
      "Eneo Totale Medical Device Included",
    ],
    price: "$4,500",
  },
  {
    title: "Platinum",
    features: [
      "1 Customized Plan",
      "12 In-Clinic Customized Facial Treatments",
      "4 In-Clinic Body Tightening Treatments",
      "Skin Boosters / Enhancements Add-On Included",
      "Skincare Included",
      "Eneo Totale Medical Device Included",
    ],
    price: "$8,500",
  },
];
const Packages = () => {
  return (
    <div className="packages-container">
      <h1 className="packages-title">Our Packages</h1>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h2 className="package-title">{pkg.title}</h2>
            <ul className="package-features">
              {pkg.features.map((feature, i) => (
                <li key={i} className="package-feature">
                  {feature}
                </li>
              ))}
            </ul>
            <h3 className="package-price">{pkg.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Packages;