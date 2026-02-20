import { useContext } from "react";
import { MealContext } from "../pages/Home";

function Search() {

  const { search, setSearch } = useContext(MealContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control mt-4"
      placeholder="Search meals..."
      value={search}
      onChange={handleChange}
    />
  );

}

export default Search;