import { createContext, useContext, useState } from 'react';

const initialStudents = [
    { id: 1, name: 'Aallan ', rollNumber: 'CS-101', course: 'Computer Science' },
    { id: 2, name: 'Dhanush', rollNumber: 'DS-204', course: 'Data Science' },
    { id: 3, name: 'Thiyakesh', rollNumber: 'UX-118', course: 'Design Systems' },
    { id: 4, name: 'Sesha', rollNumber: 'AI-309', course: 'Artificial Intelligence' },
    { id: 5, name: 'Chinnasami', rollNumber: 'CY-412', course: 'Cyber Security' },
    { id: 6, name: 'Abinesh', rollNumber: 'WD-227', course: 'Web Development' },
];

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
    const [students, setStudents] = useState(initialStudents);
    const [favourites, setFavourites] = useState([]);

    const addStudent = (student) => {
        setStudents((current) => [...current, { ...student, id: Date.now() }]);
    };

    const addToFavourites = (student) => {
        setFavourites((current) => (
            current.some((favourite) => favourite.id === student.id)
                ? current
                : [...current, student]
        ));
    };

    const removeFromFavourites = (studentId) => {
        setFavourites((current) => current.filter((student) => student.id !== studentId));
    };

    return (
        <StudentContext.Provider value={{
            students,
            favourites,
            addStudent,
            addToFavourites,
            removeFromFavourites,
        }}>
            {children}
        </StudentContext.Provider>
    );
}

export function useStudents() {
    return useContext(StudentContext);
}
