import { useContext } from "react";
import { MealContext } from "../pages/Home";

function Card() {
    const { meals } = useContext(MealContext);

    return (
        <div className="row mt-4">
            {
                meals.map((meal) => (
                    <div
                        key={meal.idMeal}
                        className="col-lg-3 col-md-4 col-sm-6 mb-4"
                    >
                        <div className="card h-100 shadow p-4 rounded-3">
                            <img
                                src={meal.strMealThumb}
                                className="card-img-top rounded-3"
                                alt={meal.strMeal}
                            />
                            <div className="card-body">
                                <h6 className="card-title fs-5">
                                    {meal.strMeal}
                                </h6>   
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Card;