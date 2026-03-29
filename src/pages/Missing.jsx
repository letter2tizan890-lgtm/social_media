import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="h-275">
      <h2 className="text-5xl font-semibold mb-3 ">Page Not Found</h2>
      <p className="text-2xl">Well that's disappointing</p>
      <p className="mt-3">
        <Link className="hover:underline text-blue-700 " to={"/"}>
          Visit our Homepage
        </Link>
      </p>
    </main>
  );
};

export default Missing;
