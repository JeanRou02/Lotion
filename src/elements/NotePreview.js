import "./../styles/NotePreview.css";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const formatDate = (when) => {
  const formatted = new Date(when).toLocaleString("en-US", options);
  if (formatted === "Invalid Date") {
      return "";
  }
  return formatted;
};

export default function NotePreview({text, title, date}) {
  return (
    <>
      <div className="notePreview-container">
        <div className="note-title"> {title} </div>
        <div className="date"> {formatDate(date) || "No Selected Date"} </div>
        <div className="preview"> {text.slice(0,100)} </div>
      </div>
    </>
  );
}