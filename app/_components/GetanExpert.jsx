import Link from "next/link";

const GetanExpert = ({ backgroundImage, title, description }) => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-xl text-gray-100">
          {description}
        </p>
        <div className="mt-10">
          <Link href={'/scheduleDemo'} className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg font-semibold">
            Expert Assessment
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetanExpert;
