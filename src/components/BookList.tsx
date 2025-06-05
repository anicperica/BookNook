import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import type { Book } from "../types";
import Cookies from "js-cookie";

interface BookListProps {
  limit: number;
  refreshkey: number;
}

export default function BookList({ limit, refreshkey }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [savedBooks, setSavedBooks] = useState<Book[]>(() => {
    return JSON.parse(localStorage.getItem("savedBooks") || "[]");
  });
  const token = Cookies.get("JWT");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books?limit=${limit}`, {
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

  const isBookSaved = (book: Book) =>
    savedBooks.some(
      (savedBook) =>
        savedBook.title === book.title && savedBook.author === book.author
    );

  const handleSaveBook = (book: Book) => {
    let updated;
    if (isBookSaved(book)) {
      updated = savedBooks.filter(
        (savedBook) =>
          !(savedBook.title === book.title && savedBook.author === book.author)
      );
    } else {
      updated = [...savedBooks, book];
    }
    setSavedBooks(updated);
    localStorage.setItem("savedBooks", JSON.stringify(updated));
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-10 max-md:flex-col max-md:items-start">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          onSave={() => handleSaveBook(book)}
          isSaved={isBookSaved(book)}
        />
      ))}
    </div>
  );
}
