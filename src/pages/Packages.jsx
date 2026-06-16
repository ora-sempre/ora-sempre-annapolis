import "./Packages.scss";
const packages = [
  {
    title: "Diamond Plan",
    price: "$8,500",
  },
  {
    title: "Platinum Plan",
    price: "$7,500",
  },
  {
    title: "Gold Plan",
    price: "$5,500",
  },
  {
    title: "Silver Plan",
    price: "$3,500",
  },
  {
    title: "Bronze Plan",
    price: "$2,500",
  },
  {
    title: "Pink Plan",
    price: "$850",
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
            <h3 className="package-price">{pkg.price}</h3>
            <a href="https://affirm.orasempreannapolis.com">Shop with Affirm</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Packages;