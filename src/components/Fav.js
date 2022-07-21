import React, {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "./firebase-config";
import {doc, deleteDoc} from "firebase/firestore";



const Fav = (props) => {
    const {fav} = props;
    const [uid, setuid] = useState("hfhjgvhb");
    const length =fav.length;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuid(user.uid);

                
            } else {
                setuid("");

            }
        });

    }, [auth.currentUser]);

    return (
        <>{ length===0 ? <div className="bg-rose-900 dark:bg-black">
        <h2 className=" font-serif italic text-3xl text-center mt-56 dark:text-white ">You have no favourite items</h2>
        <h2 className="text-white font-serif text-9xl text-center my-20 mb-56">🙅</h2>
        
    </div>  :

        <div className="mt-36 mb-56">
        <div className="row m-4">
        {
        fav.map(favElement => (
            <div className="col-md-3 mt-4">
                <div className="card py-2 border-white/10  text-center bg-white/10">
                    {/* <img className="img-fluid w-50 mx-auto p-1 rounded-circle" src={recipe.recipe.image}></img> */}
                    <a href={
                            favElement.url
                        }
                        target="_blank"
                        rel="noreferrer noopener">
                        <img className="img-fluid w-50 mx-auto p-1 rounded-circle"
                            src={
                                favElement.image
                        }></img>
                    </a>
                    <div className="card-body bg-white/10 text-white font-serif italic">

                        <h5>{
                            favElement.label
                        }</h5>
                    </div>

                    <ul className="list-group list-group-flush">

                        <li className="list-group-item  bg-white/10 text-white font-serif italic">
                            <h6>DishType : {
                                favElement.dishtype
                            }</h6>
                        </li>
                        <li className="list-group-item  bg-white/10 text-white font-serif italic">
                            <h6>MealType : {
                                favElement.mealtype
                            }</h6>
                        </li>
                        <li className="list-group-item  bg-white/10 text-white font-serif italic">
                            <h6>CuisineType : {
                               favElement.cuisinetype
                            }</h6>
                        </li>
                        <li className="list-group-item  bg-white/10 text-white font-serif italic">
                            <h6>Calories : {
                                favElement.calories
                            }</h6>
                        </li>

                         {/* {
                        recipe.recipe.ingredientLines.map(ingredient => (
                            <li className="list-group-item">
                                {ingredient}</li>
                        ))
                    } */}
                    </ul>
                    <div className="border border-light border  border-opacity-25">
                    <a href={
                            favElement.url
                        }
                        className="btn  text-light bg-white/10 w-100 font-serif italic"
                        target="_blank"
                        rel="noreferrer noopener">Full Recipe</a>
                        </div>
                         <div className="border border-light border  border-opacity-25">
                                    <button className="btn  text-light bg-white/10 w-100 font-serif italic"
                                        onClick={
                                            async (e) => {
                                            props.setfav(fav.filter(e=>e.label!=favElement.label))
                                                deleteDoc(doc(db, uid, favElement.label));
                                                alert("Deleted from favourites");
                                            }
                                    }>
                                        Delete from fav &#9825;</button>
                                </div>
               
                </div>
            </div>
        ))
    } </div>
    </div>
    }
    </>
    );
};

export default Fav;
