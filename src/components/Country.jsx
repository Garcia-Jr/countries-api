import { Link } from 'react-router-dom';

const Country = ({ country, darkMode }) => {
  const { flags, capital, name, population, region } = country;

  return (
    <Link to={`/country/${name.official}`}>
      <article
        className={`h-full rounded-lg shadow-md ${
          darkMode ? 'bg-dark-blue text-white' : 'bg-white text-text-lightMode'
        }`}
      >
        <img
          src={flags.png}
          alt={flags.alt}
          className="aspect-video w-full rounded-tl-lg rounded-tr-lg object-cover"
        />
        <div className="space-y-2 p-6">
          <h2 className="text-xl font-extrabold">{name.common}</h2>
          <p className="pt-4 font-semibold">
            Population:{' '}
            <span className="font-normal">{population.toLocaleString()}</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-normal">{region}</span>
          </p>
          {capital ? (
            <p className="pb-4 font-semibold">
              Capital: <span className="font-normal">{capital}</span>
            </p>
          ) : (
            ''
          )}
        </div>
      </article>
    </Link>
  );
};

export default Country;
