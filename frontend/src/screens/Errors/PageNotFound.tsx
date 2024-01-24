import Layout from "@/layouts/Layout";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Layout title="Not Found">
      Page Not Found:
      <ul>
        <li>
          <Link to={"/"} className="btn">
            Return Home
          </Link>
        </li>
      </ul>
    </Layout>
  );
}

export default PageNotFound;
