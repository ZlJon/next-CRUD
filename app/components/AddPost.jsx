"use client";

import { useState } from "react";
import Model from "./Model";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/posts", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        setModalOpen(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-700 text-white p-3 cursor-pointer"
      >
        Add New Post
      </button>
      <Model modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3">Add New Post</h1>
          <input
            type="text"
            placeholder="제목 입력"
            name="title"
            className="w-full p-2"
            value={inputs.title || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="본문 입력"
            name="description"
            className="w-full p-2 my-5"
            value={inputs.description || ""}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-5 py-2">
            등록
          </button>
        </form>
      </Model>
    </div>
  );
};

export default AddPost;
