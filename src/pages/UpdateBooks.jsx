import React, { useState, useEffect } from "react";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {useSnackbar} from 'notistack';

const UpdateBooks = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() =>{
    setloading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      setauthor(res.data.author);
      settitle(res.data.title);
      setpublishYear(res.data.publishYear);
      setloading(false);
    })
    .catch((err)=>{
      setloading(false);
      console.log(err);
      alert(`Error Occured! ${err}`);
    })

  }, [])

  const update = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setloading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setloading(false);
        enqueueSnackbar(`Book ${data.title} Updated successfully!`, {variant: 'success'});
        navigate("/");
      })
      .catch((err) => {
        setloading(false);
        enqueueSnackbar(`Unfortunately an error has occured! ${err}`, {variant: 'error'});
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4"> Update Book </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-500 rounded-xl mt-20 w-[600px] p-4 mx-auto hover:shadow-md transition duration-500 ease-in-out">
        <div className="my-4">
          <label className="text-xl mr-4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="border-2 border-zinc-300 px-4 py-2 w-full hover: hover:bg-sky-900 focus:outline-none transition duration-500 ease-in-out"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="border-2 border-zinc-300 px-4 py-2 w-full hover: hover:bg-sky-900 focus:outline-none transition duration-500 ease-in-out"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4">Year of Publication</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setpublishYear(e.target.value)}
            className="border-2 border-zinc-300 px-4 py-2 w-full hover: hover:bg-sky-900 focus:outline-none transition duration-500 ease-in-out"
          />
        </div>

        <button
          className="p-2 bg-sky-600 m-8 hover:bg-sky-900 transition duration-500 ease-in-out"
          onClick={update}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateBooks;
