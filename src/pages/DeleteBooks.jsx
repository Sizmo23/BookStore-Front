import React,{ useState } from "react";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";


const DeleteBooks = () => {
  const [loading, setloading] = useState(false)
  const nav = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  const deletebook = () => {
    setloading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setloading(false);
      enqueueSnackbar(`Book deleted successfully!`, {variant: 'success'});
      nav('/');
    })
    .catch((err)=>{
      setloading(false);
      enqueueSnackbar(`Error has occured! ${err}`, {variant: 'error'});
    });
  }

  return (
    <div>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className=" flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto mt-20">
        <h3 className="text-2xl">Are you sure you wish to proceed?</h3>

        <button className="p-4 bg-red-700 text-white m-8 w-full"
        onClick={deletebook}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteBooks