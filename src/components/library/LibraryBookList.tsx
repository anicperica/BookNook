import { useState } from "react";
import BookCard from "../BookCard";
import type { Book } from "../../types";

export default function LibraryBookList() {
  const [savedBooks, setSavedBooks] = useState<Book[]>(() =>
    JSON.parse(localStorage.getItem("savedBooks") || "[]")
  );

  const handleRemove = (book: Book) => {
    const updated = savedBooks.filter(
      (savedBook) =>
        !(savedBook.title === book.title && savedBook.author === book.author)
    );
    setSavedBooks(updated);
    localStorage.setItem("savedBooks", JSON.stringify(updated));
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-6  flex-grow max-md:flex-col">
      {savedBooks.length === 0 && <p className="text-xl max-sm:text-xl max-sm:text-center">Your library is empty. Save books to see them here..</p>}
      {savedBooks.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          isSaved={true}
          onSave={() => handleRemove(book)}
        />
      ))}
    </div>
  );
}
