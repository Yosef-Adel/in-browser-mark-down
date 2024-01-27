import React from 'react';
import './style/editpage.css';
import { useParams } from 'react-router-dom';
import { FileContext } from '../store/fileContext';
import { useEffect } from 'react';
import { useState } from 'react';
import Markdown from 'react-markdown'

const EditPage = () => {
    const { id } = useParams();
    const { files } = React.useContext(FileContext);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (id) {
            const file = files.find((file) => file.id === id);
            setContent(file.content);
        }
    }, [id, files])
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
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
            </div>

            <div className="preview__section">
                <div className='edit__header'>
                    <h1>Preview</h1>
                </div>
                <div className='edit__input'>
                    <Markdown>{content}</Markdown>

                </div>
            </div>

        </div>);
};

export default EditPage;
