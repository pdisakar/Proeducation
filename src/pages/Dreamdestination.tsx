import React from 'react';
const countries = [
  { id: 'aus', name: 'Australia' },
  { id: 'can', name: 'Canada' },
  { id: 'usa', name: 'USA' },
  { id: 'nez', name: 'New Zealand' },
  { id: 'uk', name: 'UK' },
  { id: 'jap', name: 'Japan' },
];
const Dreamdestination = () => {
  return (
    <div className="common-box">
      <div className="container">
        <div className="title flex items-center flex-col text-center">
          <h2> Choose your Dream Destination</h2>
          <p>
            Explore the vast educational landscape across the world. From
            prestigious universities to top-ranking institutions, we guide you
            towards achieving your academic dreams.
          </p>
        </div>
        <div className="destinations mt-8">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map(country => (
              <li
                key={country.id}
                className="text-center flex items-center justify-center flex-col px-6 py-6 border border-muted/20 rounded-[4px] group hover:cursor-pointer">
                <svg
                  className="icon group-hover:scale-110 duration-300"
                  width="100"
                  height="65">
                  <use
                    xlinkHref={`/icons.svg#${country.id}`}
                    fill="currentColor"></use>
                </svg>
                <p className=" mt-5 text-lg text-headings font-semibold leading-[18px] ">
                  {country.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dreamdestination;
