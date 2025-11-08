import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SearchFile from "../components/SearchFile.jsx";
import { FileContext } from "../store/fileContext.js";
import "./style/home.css";

const Home = () => {
  const { addFile, files } = React.useContext(FileContext);
  const [search, setSearch] = React.useState(false);
  const navigate = useNavigate();
  let id;

  const addNewFile = () => {
    id = uuidv4();
    addFile("Untitled", "", id);
  };
  const addNewFileHandler = () => {
    addNewFile();
    navigate(`/edit/${id}`);
  };

  const handleKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "c") {
      event.preventDefault();
      addNewFile();
      navigate(`/edit/${id}`);
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "o") {
      event.preventDefault();
      setSearch(true);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <div className="home">
        {search && (
          <SearchFile onCloseModal={() => setSearch(false)} files={files} />
        )}
        <h1>لا يوجد ملف مفتوح</h1>
        <p onClick={addNewFileHandler}>
          فتح ملف جديد <span className="shortcut">⌘+C</span>
        </p>
        <p onClick={() => setSearch(true)}>
          فتح ملف موجود <span className="shortcut">⌘+O</span>
        </p>
      </div>
    </>
  );
};

export default Home;
