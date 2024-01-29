import React from 'react';
import './style/editpage.css';
import { useParams } from 'react-router-dom';
import { FileContext } from '../store/fileContext';
import { useEffect } from 'react';
import { useState } from 'react';
import MarkDownView from '../components/MarkDownView';

const EditPage = () => {
    const { id } = useParams();
    const { files, updateFile } = React.useContext(FileContext);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (id) {
            const file = files.find((file) => file.id === id);
            setContent(file.content);
        }
    }, [id, files])
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
    }


    return (
        <div className='editContainer'>
            <div className="edit__section">
                <div className='edit__header'>
                    <h1>Markdown</h1>
                </div>
                <div className='edit__input'>
                    <textarea
                        type='text'
                        value={content}
                        onChange={changeHandler}
                    />
                </div>
            </div>

            <div className="preview__section">
                <div className='edit__header'>
                    <h1>Preview</h1>
                </div>
                <div className='edit__input'>
                    <MarkDownView content={content} />
                </div>
            </div>

        </div>);
};

export default EditPage;
