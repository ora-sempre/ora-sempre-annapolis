const ingredients = () => {
  const data = [
    {
      id: 1,
      name: 'Noni Extract',
      title: 'MORINDA CITRIFOLIA (NONI) FRUIT EXTRACT',
      description:
        "Noni fruit extract is one of the most trending self care ingredients in the beauty industry. That’s because it contains organic properties to help restore radiance to your skin's appearance. It contains an abundance of skin components known to soothe your skin as well as aid in reducing the visual signs of progressive aging.",
      image: 'https://www.avinichi.com/wp-content/uploads/Noni.png',
    },
    {
      id: 2,
      name: 'Camu Camu',
      title: 'MYRCIARIA DUBIA FRUIT EXTRACT',
      description:
        'Camu camu contains a high concentration of naturally occurring components that are great for neutralizing the apparent effects of environmental factors which lead to dry, rough, and inflamed skin. When applied to your skin’s surface, this ingredient can help restore a visibly more radiant and youthful suppleness.',
      image: 'https://www.avinichi.com/wp-content/uploads/CAMU-CAMU.png',
    },
    {
      id: 3,
      name: 'Mulberries',
      title: 'MORUS NIGRA FRUIT EXTRACT',
      description:
        'Packed with a variety of beneficial elements, Mulberry extract is utilized to acquire a healthy skin appearance. This complexion-improving ingredient is used across the beauty industry to re-invigorate visibly dull, fatigued skin and even exhibits the ability to minimize the appearance of dark spots and uneven skin color over time.',
      image: 'https://www.avinichi.com/wp-content/uploads/Mulberries.png',
    },
    {
      id: 4,
      name: 'Reishi Mushroom',
      title: 'GANODERMA LUCIDUM (MUSHROOM) EXTRACT',
      description:
        "Reishi Mushrooms are fairly new to topical beauty but present exciting results. The best part of this extraordinary ingredient is infused into formulas that help retain the appearance of volume and project visible resilience on the skin's surface. Thus improving signs of aging and visible imperfections in skin texture and complexion.",
      image: 'https://www.avinichi.com/wp-content/uploads/Reishi.png',
    },
  ];

  return (
    <div className="treatments">
      <div
        className="treatments-container"
        style={{ maxWidth: '800px', margin: 'auto' }}
      >
        {data.map((item) => (
          <div
            className="treatments-card"
            key={item.id}
            style={{ border: 'none', boxShadow: 'none', height: '450px' }}
          >
            <div
              className="treatment-image"
              style={{
                background: `url(${item.image})`,
              }}
            ></div>
            <div className="treatment-content">
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ingredients;
