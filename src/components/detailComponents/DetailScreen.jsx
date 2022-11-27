import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {  
  const { id } = useParams();
  const [recipe, setRecipe] =useState({});
  const url = "https://recipes.devmountain.com";

  useEffect(() => {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);
  
  return(
    <>
    <h1>details</h1>
    </>
  )
};

export default DetailScreen;
// <div className='detail-scree