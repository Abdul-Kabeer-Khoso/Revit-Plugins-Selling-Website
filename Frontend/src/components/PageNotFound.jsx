import { Link } from "react-router-dom";

const PageNotFound= () => {
  return (
    <div >
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <Link to="/">
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;