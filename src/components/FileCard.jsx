import docIcon from "../assets/icon-document.svg";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './style/card.css';

const FileCard = ({ file }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleClick = () => {
        navigate(`/edit/${file.id}`);
    }
    return (
        <>
            {
                id === file.id ? (
                    <div className="fileCard cardSelected" onClick={handleClick}>
                        <div className="file-card__icon">
                            <img src={docIcon} alt="doc-icon" />
                        </div>
                        <div >
                            <p className="file-card__date">{file.createdAt}</p>
                            <p className="file-card__name">{file.name}</p>
                        </div>
                    </div>
                )
                    : (
                        <div className="fileCard" onClick={handleClick}>
                            <div className="file-card__icon">
                                <img src={docIcon} alt="doc-icon" />
                            </div>
                            <div className=''>
                                <p className="file-card__date">{file.createdAt}</p>
                                <p className="file-card__name">{file.name}</p>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default FileCard;
