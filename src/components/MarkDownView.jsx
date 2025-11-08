import DOMPurify from "dompurify";
import { marked } from "marked";
import "./style/markdownView.css";

const MarkDownView = ({ content }) => {
  const getMarkdownText = () => {
    const options = {
      sanitize: true,
      breaks: true, // Enable single line breaks
      gfm: true, // Enable GitHub Flavored Markdown
    };
    var rawMarkup = marked(content, options);
    return { __html: DOMPurify.sanitize(rawMarkup) };
  };
  return (
    <div className="markdownView">
      <div dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
};

export default MarkDownView;
