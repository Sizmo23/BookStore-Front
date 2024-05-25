import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Bookstable } from "../Components/home/bookstable";
import Bookscard from "../Components/home/bookscard";

const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setbooks(res.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
      <button
          className="bg-sky-300 hover:bg-sky-600 text-slate-700 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 text-slate-700 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl hover:text-sky-600" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? <Bookstable books={books} /> : <Bookscard books ={books} />}
    </div>
  );
};

export default Home;
