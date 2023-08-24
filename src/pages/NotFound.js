import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className=" flex justify-center min-h-[500px] items-center">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page Not Found!</p>
          <Link className="btn btn-primary btn-lg" to="/">
            <FaHome className="mx-auto my-3 text-3xl" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
