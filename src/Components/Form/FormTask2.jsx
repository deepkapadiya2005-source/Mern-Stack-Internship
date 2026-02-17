import React from 'react'
import { useForm } from 'react-hook-form'
import '../../assets/Css/FormTask1.css'

export const FormTask2 = () => {
    const { register } = useForm()
    return (
        <div className="bank-form-wrapper" style={{marginTop:"20px"}}>
            <div className="bank-form">
                <h1>College Information Form</h1>

                <form>

                    <div className="form-group">
                        <label>Student Name</label>
                        <input type="text" placeholder="Enter Student Holder Name" />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" placeholder="Enter Age" />
                    </div>

                    <div className="form-group">
                        <label>Date Of Birth</label>
                        <input type="date" />
                    </div>

                    <div className="form-group">
                        <label>Course</label>
                        <div className="options">
                            <label><input type="radio" value="bca" {...register("account")} /> BCA</label>
                            <label><input type="radio" value="bba" {...register("account")} /> BBA</label>
                            <label><input type="radio" value="bcom" {...register("account")} /> BCOM</label>
                            <label><input type="radio" value="ce" {...register("account")} /> Computer Engineering</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Speicalization</label>
                        <div className="options">
                            <label><input type="checkbox" value="atm" {...register("services")} /> Data Science</label>
                            <label><input type="checkbox" value="ib" {...register("services")} /> Cloud Computering</label>
                            <label><input type="checkbox" value="mb" {...register("services")} /> Hacking</label>
                            <label><input type="checkbox" value="sa" {...register("services")} /> Business </label>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>

                </form>
            </div>
        </div>
    )
}
