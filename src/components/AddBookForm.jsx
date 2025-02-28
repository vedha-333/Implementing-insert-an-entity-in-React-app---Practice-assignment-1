import React, { useState } from "react";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the book goes here
    console.log("Book added:", { title, author, description });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Add a New Book
      </h2>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="title"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="author"
        >
          Author:
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{
            display: "block",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
          htmlFor="description"
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            height: "100px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "18px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
