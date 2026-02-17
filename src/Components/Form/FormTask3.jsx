import React from 'react'
import { useForm } from 'react-hook-form'
import '../../assets/Css/FormTask1.css'

export const FormTask3 = () => {
    const { register } = useForm()

    return (
        <div className="bank-form-wrapper" style={{ marginTop: "20px" }}>
            <div className="bank-form">
                <h1>Election Registration Form</h1>

                <form>

                    <div className="form-group">
                        <label>Voter Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Voter Full Name"
                            {...register("voterName")}
                        />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input 
                            type="number" 
                            placeholder="Enter Age"
                            {...register("age")}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date Of Birth</label>
                        <input 
                            type="date"
                            {...register("dob")}
                        />
                    </div>

                    <div className="form-group">
                        <label>Select Political Party</label>
                        <div className="options">
                            <label>
                                <input type="radio" value="bjp" {...register("party")} /> BJP
                            </label>
                            <label>
                                <input type="radio" value="congress" {...register("party")} /> Congress
                            </label>
                            <label>
                                <input type="radio" value="aap" {...register("party")} /> AAP
                            </label>
                            <label>
                                <input type="radio" value="other" {...register("party")} /> Other
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Voting Preferences</label>
                        <div className="options">
                            <label>
                                <input type="checkbox" value="development" {...register("issues")} /> Development
                            </label>
                            <label>
                                <input type="checkbox" value="education" {...register("issues")} /> Education
                            </label>
                            <label>
                                <input type="checkbox" value="employment" {...register("issues")} /> Employment
                            </label>
                            <label>
                                <input type="checkbox" value="healthcare" {...register("issues")} /> Healthcare
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}
