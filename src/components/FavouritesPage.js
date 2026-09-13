import { NavLink } from 'react-router-dom';
import StudentCard from './StudentCard';
import { useStudents } from './StudentContext';

function FavouritesPage() {
    const { favourites, removeFromFavourites } = useStudents();

    return (
        <main className="page-content">
            <section className="intro">
                <h1>Favourite Students List</h1>
            </section>
            <div className="section-heading">
                <h2>Saved students</h2>
                <span>{favourites.length} saved</span>
            </div>
            {favourites.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon" aria-hidden="true">☆</div>
                    <h2>No favourite students added yet</h2>
                    <NavLink className="primary-link" to="/">Add students</NavLink>
                </div>
            ) : (
                <div className="student-grid">
                    {favourites.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                            isFavourite
                            onRemove={removeFromFavourites}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}

export default FavouritesPage;
