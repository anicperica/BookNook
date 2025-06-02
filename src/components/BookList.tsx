import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";

interface Book {
  title: string;
  author: string;
}

interface BookListProps {
  limit: number;
  refreshkey: number;
}

export default function BookList({ limit,refreshkey }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get(`https://bootcamp2025.depster.me/api/books?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setBooks(res.data.data);
      })
      .catch((err) => {
        alert("Failed to fetch books");
        console.log(err);
      });
  }, [refreshkey]);

  return (
    <div>
      {books.map((book, index) => (
        <BookCard key={index} title={book.title} author={book.author} />
      ))}
    </div>
  );
}
