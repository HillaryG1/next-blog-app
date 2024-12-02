import { Link } from "react-router-dom";
// import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-700 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=Christ"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Christ
        </Link>
        <Link
          to="/posts?cat=faith"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Scripture
        </Link>
        <Link
          to="/posts?cat=scripture"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Stories
        </Link>
        <Link
          to="/posts?cat=prayer"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Prayer
        </Link>
        <Link
          to="/posts?cat=wisdom"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Wisdom
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      {/* <Search /> */}
    </div>
  );
};

export default MainCategories;
