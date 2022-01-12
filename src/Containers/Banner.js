import { useState, useEffect } from "react";
import { apikey, baseurl } from "../Urls";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

function Banner() {
  const [car, setCar] = useState([]);
  useEffect(() => {
    $.get(url).then((res) => {
      setCar(res.articles);
      console.log(res.articles);
    });
  }, []);

  return (
    <div className="row  justify-content-center   border-white ">
      {car.map(({ urlToImage, title, description, url, source }) => (
        <div
          className="card-md-8 shadow p-3 mb-5 bg-white rounded "
          style={{ width: "18rem" }}
        >
          <img
            src={urlToImage}
            class="card-img-top border-bottom"
            alt="..."
            style={{ height: "10rem" }}
          />
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
