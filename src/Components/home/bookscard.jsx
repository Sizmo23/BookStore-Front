import React from "react";
import { BooksSingleCard } from "./BooksSingleCard";

const Bookscard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {books.map((item) => (
        <BooksSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default Bookscard;
