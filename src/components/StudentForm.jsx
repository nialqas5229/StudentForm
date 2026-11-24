
import { useState } from "react";

function StudentForm() {

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        subjects: [],
        address: ""
    });

    // Validation errors
    const [errors, setErrors] = useState({});

    // Submission status
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setSubmitted(false);
    }

    // Handle subjects checkbox
    function handleSubjectChange(event) {

        const { value, checked } = event.target;

        let updatedSubjects;

        if (checked) {

            updatedSubjects = [
                ...formData.subjects,
                value
            ];

        } else {

            updatedSubjects = formData.subjects.filter(
                (subject) => subject !== value
            );

        }

        setFormData({
            ...formData,
            subjects: updatedSubjects
        });

        setSubmitted(false);
    }

    // Form validation
    function validateForm() {

        const newErrors = {};

        // Name validation
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        // Age validation
        if (formData.age === "") {

            newErrors.age = "Age is required";

        } else if (
            !Number.isInteger(Number(formData.age)) ||
            Number(formData.age) < 18 ||
            Number(formData.age) > 30
        ) {

            newErrors.age = "Age must be between 18 and 30";

        }

        // Subjects validation
        if (formData.subjects.length === 0) {
            newErrors.subjects = "Select at least one subject";
        }

        // Address validation
        if (formData.address.trim() === "") {
            newErrors.address = "Address is required";
        }

        return newErrors;
    }

    // Handle form submission
    function handleSubmit(event) {

        event.preventDefault();

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            setSubmitted(true);

            console.log("Student Information:", formData);

        } else {

            setSubmitted(false);

        }
    }

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-8 col-lg-6">

                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white text-center py-3">

                            <h3 className="mb-0">
                                Student Registration Form
                            </h3>

                        </div>

                        <div className="card-body p-4">

                            {submitted && (

                                <div className="alert alert-success">

                                    Student registered successfully!

                                </div>

                            )}

                            <form onSubmit={handleSubmit} noValidate>

                                {/* Name */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Student Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className={`form-control ${
                                            errors.name ? "is-invalid" : ""
                                        }`}
                                        placeholder="Enter student name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                    {errors.name && (
                                        <div className="invalid-feedback">
                                            {errors.name}
                                        </div>
                                    )}

                                </div>


                                {/* Age */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Age
                                    </label>

                                    <input
                                        type="number"
                                        name="age"
                                        className={`form-control ${
                                            errors.age ? "is-invalid" : ""
                                        }`}
                                        placeholder="Enter age (18-30)"
                                        min="18"
                                        max="30"
                                        value={formData.age}
                                        onChange={handleChange}
                                    />

                                    {errors.age && (
                                        <div className="invalid-feedback">
                                            {errors.age}
                                        </div>
                                    )}

                                </div>


                                {/* Subjects */}

                                <div className="mb-3">

                                    <label className="form-label d-block">
                                        Subjects
                                    </label>

                                    <div className="form-check">

                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="web"
                                            value="Web"
                                            checked={formData.subjects.includes("Web")}
                                            onChange={handleSubjectChange}
                                        />

                                        <label
                                            className="form-check-label"
                                            htmlFor="web"
                                        >
                                            Web
                                        </label>

                                    </div>

                                    <div className="form-check">

                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="oop"
                                            value="OOP"
                                            checked={formData.subjects.includes("OOP")}
                                            onChange={handleSubjectChange}
                                        />

                                        <label
                                            className="form-check-label"
                                            htmlFor="oop"
                                        >
                                            OOP
                                        </label>

                                    </div>

                                    <div className="form-check">

                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="sda"
                                            value="SDA"
                                            checked={formData.subjects.includes("SDA")}
                                            onChange={handleSubjectChange}
                                        />

                                        <label
                                            className="form-check-label"
                                            htmlFor="sda"
                                        >
                                            SDA
                                        </label>

                                    </div>

                                    {errors.subjects && (
                                        <div className="text-danger small mt-1">
                                            {errors.subjects}
                                        </div>
                                    )}

                                </div>


                                {/* Address */}

                                <div className="mb-4">

                                    <label className="form-label">
                                        Address
                                    </label>

                                    <textarea
                                        name="address"
                                        className={`form-control ${
                                            errors.address ? "is-invalid" : ""
                                        }`}
                                        rows="4"
                                        placeholder="Enter your address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />

                                    {errors.address && (
                                        <div className="invalid-feedback">
                                            {errors.address}
                                        </div>
                                    )}

                                </div>


                                {/* Submit */}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Register Student
                                </button>

                            </form>


                            {/* Student Details */}

                            {submitted && (

                                <div className="alert alert-light border mt-4 mb-0">

                                    <h5 className="text-primary">
                                        Submitted Student Details
                                    </h5>

                                    <p>
                                        <strong>Name:</strong> {formData.name}
                                    </p>

                                    <p>
                                        <strong>Age:</strong> {formData.age}
                                    </p>

                                    <p>
                                        <strong>Subjects:</strong>{" "}
                                        {formData.subjects.join(", ")}
                                    </p>

                                    <p className="mb-0">
                                        <strong>Address:</strong> {formData.address}
                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default StudentForm;
