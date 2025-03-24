import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex grow items-center">
      <div className="container mx-auto text-center md:text-left">
        <h1 className="mb-8 text-2xl font-bold md:text-5xl">
          Welcome to Our Lipsticks Shop
        </h1>
        <p className="mb-8 text-gray-700 md:text-xl">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link
          to="/"
          className="rounded-md bg-sky-600 px-6 py-3 text-white shadow hover:bg-black md:text-left"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
export default Home;
