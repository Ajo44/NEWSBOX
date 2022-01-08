import { useState, useEffect } from "react";
import $ from "jquery";
import { apikey } from "../Urls";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  const [car, setCar] = useState([]);
  useEffect(() => {
    $.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`
    ).then((res) => {
      setCar(res.articles);
      console.log(res.articles);
    });
  }, []);
  return (
    <div className="row  justify-content-center">
      {car.map(({ urlToImage, title, description, url, source }) => (
        <div
          className="card-md-8 "
          style={{ width: "18rem", height: "30rem", borderColor: "black" }}
        >
          <img src={urlToImage} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title ? title : ""}</h5>
            <p className="card-text ">{description ? description : ""}</p>
            <a>{source.name}</a>
            <a href={url} className="btn btn-primary">
              further details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Banner;
//API  KET ::2bca595428e88c180cb42f9b6f2506cf
//https://newsapi.org/v2/everything?q=bitcoin&apiKey=2bca59506cf5428e88c180cb42f9b6f2
//https://newsapi.org/v2/top-headlines?country=us&apiKey=2bca59506cf5428e88c180cb42f9b6f2
//https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2bca59506cf5428e88c180cb42f9b6f2
