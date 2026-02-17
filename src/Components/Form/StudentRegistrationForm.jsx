import React from 'react';
import { useForm } from 'react-hook-form';
import '../../assets/Css/FormDesign.css';

export const StudentRegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submitHandler = (data) => {
        console.log(data);
    };

    const validateSchema = {
        firstNameValidator: {
            required: {
                value: true,
                message: "First Name is required"
            }
        },
        lastNameValidator: {
            required: {
                value: true,
                message: "Last Name is required"
            }
        },
        emailValidator: {
            required: {
                value: true,
                message: "Email is required"
            },
            pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email format"
            }
        },
        phoneValidator: {
            required: {
                value: true,
                message: "Phone number is required"
            },
            pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalid phone number"
            }
        },
        dateOfBirthValidator: {
            required: {
                value: true,
                message: "Date of birth is required"
            }
        },
        genderValidator: {
            required: {
                value: true,
                message: "Gender is required"
            }
        },
        addressValidator: {
            required: {
                value: true,
                message: "Address is required"
            }
        },
        cityValidator: {
            required: {
                value: true,
                message: "City is required"
            }
        },
        stateValidator: {
            required: {
                value: true,
                message: "State is required"
            }
        },
        countryValidator: {
            required: {
                value: true,
                message: "Country is required"
            }
        },
        courseValidator: {
            required: {
                value: true,
                message: "Course is required"
            }
        },
        termsValidator: {
            required: {
                value: true,
                message: "You must agree to the terms and conditions"
            }
        }
    };

    return (
        <div className="form-container">
            <h1>Student Registration Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>First Name: </label>
                    <input type="text" {...register("firstName", validateSchema.firstNameValidator)} />
                    {errors.firstName && <h6 className="error-message">{errors.firstName.message}</h6>}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" {...register("lastName", validateSchema.lastNameValidator)} />
                    {errors.lastName && <h6 className="error-message">{errors.lastName.message}</h6>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" {...register("email", validateSchema.emailValidator)} />
                    {errors.email && <h6 className="error-message">{errors.email.message}</h6>}
                </div>
                <div>
                    <label>Phone Number: </label>
                    <input type="text" {...register("phone", validateSchema.phoneValidator)} />
                    {errors.phone && <h6 className="error-message">{errors.phone.message}</h6>}
                </div>
                <div>
                    <label>Date of Birth: </label>
                    <input type="date" {...register("dob", validateSchema.dateOfBirthValidator)} />
                    {errors.dob && <h6 className="error-message">{errors.dob.message}</h6>}
                </div>
                <div>
                    <label>Gender: </label>
                    <select {...register("gender", validateSchema.genderValidator)}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender && <h6 className="error-message">{errors.gender.message}</h6>}
                </div>
                <div>
                    <label>Address: </label>
                    <input type="text" {...register("address", validateSchema.addressValidator)} />
                    {errors.address && <h6 className="error-message">{errors.address.message}</h6>}
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" {...register("city", validateSchema.cityValidator)} />
                    {errors.city && <h6 className="error-message">{errors.city.message}</h6>}
                </div>
                <div>
                    <label>State: </label>
                    <input type="text" {...register("state", validateSchema.stateValidator)} />
                    {errors.state && <h6 className="error-message">{errors.state.message}</h6>}
                </div>
                <div>
                    <label>Country: </label>
                    <input type="text" {...register("country", validateSchema.countryValidator)} />
                    {errors.country && <h6 className="error-message">{errors.country.message}</h6>}
                </div>
                <div>
                    <label>Course: </label>
                    <select {...register("course", validateSchema.courseValidator)}>
                        <option value="">Select</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Biology">Biology</option>
                    </select>
                    {errors.course && <h6 className="error-message">{errors.course.message}</h6>}
                </div>
                <div>
                    <label>
                        <input type="checkbox" {...register("terms", validateSchema.termsValidator)} />
                        I agree to the terms and conditions
                    </label>
                    {errors.terms && <h6 className="error-message">{errors.terms.message}</h6>}
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};
