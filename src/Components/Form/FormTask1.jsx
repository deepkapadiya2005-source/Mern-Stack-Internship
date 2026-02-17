import React from 'react'
import { useForm } from 'react-hook-form'
import '../../assets/Css/FormTask1.css'

export const FormTask1 = () => {
    const { register } = useForm()
    return (
        <div className="bank-form-wrapper" style={{marginTop:"20px"}}>
            <div className="bank-form">
                <h1>Bank Information Form</h1>

                <form>

                    <div className="form-group">
                        <label>Account Holder Name</label>
                        <input type="text" placeholder="Enter Account Holder Name" />
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
                        <label>Account Type</label>
                        <div className="options">
                            <label><input type="radio" value="sa" {...register("account")} /> Saving Account</label>
                            <label><input type="radio" value="ca" {...register("account")} /> Current Account</label>
                            <label><input type="radio" value="fda" {...register("account")} /> Fixed Deposit</label>
                            <label><input type="radio" value="rda" {...register("account")} /> Recurring Deposit</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Required Bank Services</label>
                        <div className="options">
                            <label><input type="checkbox" value="atm" {...register("services")} /> ATM</label>
                            <label><input type="checkbox" value="ib" {...register("services")} /> Internet Banking</label>
                            <label><input type="checkbox" value="mb" {...register("services")} /> Mobile Banking</label>
                            <label><input type="checkbox" value="sa" {...register("services")} /> SMS Alerts</label>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>

                </form>
            </div>
        </div>
    )
}
