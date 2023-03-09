import "./../styles/Viewer.css"

export default function Viewer (item) {
    if (!item) {
        return <div>"no data"</div>
      }

    return (
        <>
            <div className="viewer-header">
                <div className="viewer-header-left">
                    <div className="viewer-title">{item.title}</div>
                    <div className="viewer-date">{item.date}</div>
                </div>
                <div className="viewer-header-right">
                    <button className="viewer-edit-button">Edit</button>
                    <button className="viewer-delete-button">Delete</button>
                </div>
            </div>
            <div className="viewer-body">
                <div className="viewer-body-text">{item.text}</div>
            </div>
        </>
    )
}
