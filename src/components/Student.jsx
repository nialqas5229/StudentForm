function Student(props) {

    return (
        <div className="student-card">

            <h2>Student Information</h2>

            <p>Name: {props.name}</p>

            <p>Department: {props.department}</p>

            <p>Semester: {props.semester}</p>

        </div>
    );
}

export default Student;