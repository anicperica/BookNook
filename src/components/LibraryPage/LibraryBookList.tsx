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
    
    <div className="grid grid-cols-1 sm:grid-cols-2 custom:grid-cols-3 flex-grow mx-auto gap-5 mb-6 ">
     {savedBooks.length === 0 ? (
      <div className="col-span-full flex items-center justify-center w-full h-full">
        <p className="text-xl text-center max-sm:text-xl">
          Your library is empty. Save books to see them here..
        </p>
      </div>
    ) : (
      savedBooks.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          isSaved={true}
          onSave={() => handleRemove(book)}
        />
      ))
    )}
  </div>
  
  
  );
}
