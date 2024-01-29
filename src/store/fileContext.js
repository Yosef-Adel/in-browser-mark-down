import React, { useReducer, createContext, useCallback, useEffect } from 'react';
import initialState from './intialState.js';

const FileAdd = 'FILE_ADD';
const FileRemove = 'FILE_REMOVE';
const FileUpdate = 'FILE_UPDATE';
const LoadFiles = 'LOAD_FILES';
const LocalStorageKey = 'files';

export const FileContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case LoadFiles: {
            return action.payload;
        }
        case FileAdd: {
            const { name, content, id } = action.payload;
            return [
                ...state,
                {
                    id,
                    createdAt: new Date().toLocaleDateString(),
                    name,
                    content
                }
            ];
        }
        case FileRemove: {
            const { id } = action.payload;
            return state.filter(file => file.id !== id);
        }
        case FileUpdate: {
            const { id, name, content } = action.payload;
            console.log(content);
            return state.map(file => {
                if (file.id === id) {
                    return {
                        ...file,
                        name,
                        content
                    };
                }
                return file;
            });
        }
        default:
            return state;
    }
};

const loadFiles = () => {
    const files = localStorage.getItem(LocalStorageKey);
    if (files) {
        return JSON.parse(files);
    }
    return initialState;
};

export const FileProvider = ({ children }) => {
    const [files, dispatch] = useReducer(reducer, loadFiles());

    useEffect(() => {
        localStorage.setItem(LocalStorageKey, JSON.stringify(files));
        console.log('files', files);
    }, [files]);

    const addFile = useCallback((name, content, id) => {
        dispatch({
            type: FileAdd,
            payload: {
                id: id,
                name,
                content
            }
        });
    }, [dispatch]);

    const removeFile = useCallback(id => {
        dispatch({
            type: FileRemove,
            payload: {
                id
            }
        });
    }, [dispatch]);

    const updateFile = useCallback((id, name, content) => {
        dispatch({
            type: FileUpdate,
            payload: {
                id,
                name,
                content
            }
        });
    }, [dispatch]);

    const value = { files, addFile, removeFile, updateFile };
    return (
        <FileContext.Provider value={value}  >
            {children}
        </FileContext.Provider>
    )

};
