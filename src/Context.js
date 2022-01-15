import react, { createContext, useState } from "react";
import $ from "jquery";
import { getNewsApi } from "./Urls";

export const NewsContext = createContext();

const Context = ({ childern }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");

  const fetchNews = async () => {
    const { data } = await $.get(getNewsApi(category));
  };
  return (
    <NewsContext.Provider value={{ news, category }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
