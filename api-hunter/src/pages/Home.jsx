import { createContext, useEffect, useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import Loader from "../components/Loader";

export const MealContext = createContext();

function Home() {

  const API_URL = import.meta.env.VITE_API_URL;

  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMeals = async () => {

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_URL}/search.php?s=`);
      const data = await res.json();

      if (!data.meals) {
        setMeals([]);
        setError("No meals found");
      } else {
        setMeals(data.meals);
      }

      setLoading(false);

    } catch {

      setError("Failed to fetch meals");
      setLoading(false);

    }

  };

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    const searchMeals = async () => {
      if (search.trim() === "") {
        fetchMeals();
        return;
      }

      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${API_URL}/search.php?s=${search}`);
        const data = await res.json();

        if (!data.meals) {
          setMeals([]);
          setError("No meals found");
        } else {
          setMeals(data.meals);
        }

        setLoading(false);
      } catch {
        setError("Search failed");
        setLoading(false);
      }

    };

    searchMeals();
  }, [search]);

  return (

    <MealContext.Provider value={{ meals, search, setSearch }}>

      <div className="container">
        <h1 className="text-center">
           Food Discovery App
        </h1>

        <Search />

        {loading && <Loader />}

        {!loading && error && (
          <p className="text-danger text-center mt-4">
            {error}
          </p>
        )}

        {!loading && !error && meals.length === 0 && (
          <p className="text-center mt-4">
            No meals found
          </p>
        )}

        {!loading && !error && meals.length > 0 && (
          <Card />
        )}

      </div>

    </MealContext.Provider>
  );
}

export default Home;