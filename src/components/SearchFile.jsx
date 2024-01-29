import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './ModelPopUp/Modal';
import docIcon from '../assets/icon-document.svg';
import './style/searchfile.css';

const SearchFile = (props) => {
    const [search, setSearch] = useState(props.files);
    const navigate = useNavigate();

    const searchHandler = (e) => {
        const searchValue = e.target.value;
        const searchResult = props.files.filter((file) => {
            return file.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        console.log(searchResult);
        setSearch(searchResult);
    }
    const handleClick = (id) => {
        props.onCloseModal();
        navigate(`/edit/${id}`);
    }
    return (

        <>
            <Modal onCloseModal={props.onCloseModal}>
                <div className='searchContainer'>
                    <input type="text" placeholder='Find a File' onChange={searchHandler} />

                    {
                        search.slice(0, 4).map((file) => {
                            return (
                                <div className="fileCard cardSelected" onClick={() => handleClick(file.id)} key={file.id}>
                                    <div className="file-card__icon">
                                        <img src={docIcon} alt="doc-icon" />
                                    </div>

                                    <div>
                                        <p className="file-card__date">{file.createdAt}</p>
                                        <p className="file-card__name">{file.name}</p>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

            </Modal>

        </>
    );
};

export default SearchFile;
