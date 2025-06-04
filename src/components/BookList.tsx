import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import type { Book } from "../types";

interface BookListProps {
  limit: number;
  refreshkey: number;
}

export default function BookList({ limit, refreshkey }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [savedBooks, setSavedBooks] = useState<Book[]>(() => {
    return JSON.parse(localStorage.getItem("savedBooks") || "[]");
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://bootcamp2025.depster.me/api/books?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
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
  }, [refreshkey, limit]);

  const handleSave = (book: Book) => {
    const isAlreadySaved = savedBooks.find(
      (savedBook) =>
        savedBook.title === book.title && savedBook.author === book.author
    );
    if (isAlreadySaved) {
      const updated = savedBooks.filter(
        (savedBook) =>
          !(savedBook.title === book.title && savedBook.author === book.author)
      );
      setSavedBooks(updated);
      localStorage.setItem("savedBooks", JSON.stringify(updated));
    } else {
      const updated = [...savedBooks, book];
      setSavedBooks(updated);
      localStorage.setItem("savedBooks", JSON.stringify(updated));
    }
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-10 max-md:flex-col max-md:items-start">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          onSave={() => handleSave(book)}
          isSaved={
            !!savedBooks.find(
              (savedBook) =>
                savedBook.title === book.title &&
                savedBook.author === book.author
            )
          }
        />
      ))}
    </div>
  );
}
