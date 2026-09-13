import { useState } from 'react';
import { useStudents } from './StudentContext';

const emptyForm = { name: '', rollNumber: '', course: '' };

function AddStudentForm() {
    const { addStudent } = useStudents();
    const [form, setForm] = useState(emptyForm);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!form.name.trim() || !form.rollNumber.trim() || !form.course.trim()) return;

        addStudent({
            name: form.name.trim(),
            rollNumber: form.rollNumber.trim(),
            course: form.course.trim(),
        });
        setForm(emptyForm);
    };

    return (
        <form className="add-student-form" onSubmit={handleSubmit}>
            <div className="form-heading">
                <div>
                    <p className="eyebrow">Quick add</p>
                    <h2>Add a student</h2>
                </div>
                <span>All fields required</span>
            </div>
            <div className="form-fields">
                <label>
                    Name
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Student name" />
                </label>
                <label>
                    Roll number
                    <input name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="e.g. CS-501" />
                </label>
                <label>
                    Course
                    <input name="course" value={form.course} onChange={handleChange} placeholder="Course name" />
                </label>
                <button className="action-button" type="submit">Add student</button>
            </div>
        </form>
    );
}

export default AddStudentForm;
