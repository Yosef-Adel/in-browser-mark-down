import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eyeOff from "../assets/icon-hide-preview.svg";
import eyeOn from "../assets/icon-show-preview.svg";
import MarkDownView from "../components/MarkDownView";
import { FileContext } from "../store/fileContext";
import "./style/editpage.css";

const EditPage = () => {
  const { id } = useParams();
  const { files, updateFile } = React.useContext(FileContext);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (id) {
      const file = files.find((file) => file.id === id);
      setContent(file.content);
    }
  }, [id, files]);
  useEffect(() => {
    const delay = 3000;
    let timeoutId;
    timeoutId = setTimeout(() => {
      const file = files.find((file) => file.id === id);
      const name = file.name;
      updateFile(id, name, content);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [content]);

  const changeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div className="editContainer desktopView">
        <div className="edit__section">
          <div className="edit__header">
            <h1>محرر النص</h1>
          </div>
          <div className="edit__input">
            <textarea type="text" value={content} onChange={changeHandler} />
          </div>
        </div>
        <div className="preview__section">
          <div className="edit__header">
            <h1>المعاينة</h1>
            <img src={eyeOn} alt="eyeOn" />
          </div>
          <div className="edit__input">
            <MarkDownView content={content} />
          </div>
        </div>
      </div>
      <div className="editContainer mobileView">
        {preview ? (
          <div className="preview__section">
            <div className="edit__header">
              <h1>المعاينة</h1>
              <img src={eyeOn} alt="eyeOn" onClick={() => setPreview(false)} />
            </div>
            <div className="edit__input">
              <MarkDownView content={content} />
            </div>
          </div>
        ) : (
          <div className="edit__section">
            <div className="edit__header">
              <h1>Markdown</h1>
              <img src={eyeOff} alt="eyeOff" onClick={() => setPreview(true)} />
            </div>
            <div className="edit__input">
              <textarea type="text" value={content} onChange={changeHandler} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditPage;
