import { useNavigate } from "react-router-dom";
import { collectionRoutes } from "../../Route/route";

const Home = () => {
  const navigate = useNavigate();

  const pages = collectionRoutes.filter((r) => r.path !== "/");

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Welcome Home 🏠
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {pages.map((page) => (
          <div
            key={page.path}
            onClick={() => navigate(page.path)}
            className="cursor-pointer bg-white shadow-md rounded-2xl p-6 border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-blue-600">{page.name}</h2>
            <p className="text-gray-500 mt-2 text-sm">{page.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
