import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './style/markdownView.css';

const MarkDownView = ({content}) => {
    const getMarkdownText = () => {
        var rawMarkup = marked(content, { sanitize: true });
        return { __html: DOMPurify.sanitize(rawMarkup) };
    }
    return (
        <div className='markdownView'>
            <div dangerouslySetInnerHTML={getMarkdownText()} />
        </div>
    );
};

export default MarkDownView;
