import AddStudentForm from './AddStudentForm';
import StudentCard from './StudentCard';
import { useStudents } from './StudentContext';

function StudentListPage() {
    const { students, favourites, addToFavourites, removeFromFavourites } = useStudents();
    const favouriteIds = new Set(favourites.map((student) => student.id));

    return (
        <main className="page-content">
            <section className="intro">
                <h1>Students List</h1>
            </section>
            <AddStudentForm />
            <div className="section-heading">
                <h2>Student Directory</h2>
                <span>{students.length} students</span>
            </div>
            <div className="student-grid">
                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        isFavourite={favouriteIds.has(student.id)}
                        onAdd={addToFavourites}
                        onRemove={removeFromFavourites}
                    />
                ))}
            </div>
        </main>
    );
}

export default StudentListPage;
