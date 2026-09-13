function StudentCard({ student, isFavourite, onAdd, onRemove }) {
    return (
        <article className="student-card">
            <div className="avatar" aria-hidden="true">
                {student.name.split(' ').map((part) => part[0]).join('')}
            </div>
            <div className="student-details">
                <h2>{student.name}</h2>
                <p>{student.course}</p>
                <span className="student-id">ID {student.rollNumber}</span>
            </div>
            {isFavourite ? (
                <button className="action-button remove-button" onClick={() => onRemove(student.id)}>
                    Remove
                </button>
            ) : (
                <button className="action-button" onClick={() => onAdd(student)}>
                    <span aria-hidden="true">+</span> Add to favourite
                </button>
            )}
        </article>
    );
}

export default StudentCard;
