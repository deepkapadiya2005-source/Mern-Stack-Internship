import React from 'react'
import { useForm } from 'react-hook-form'
import '../../assets/Css/FormDesign.css'

export const FormTask4 = () => {
    const{register, handleSubmit,formState:{errors}} = useForm()
    const submitHanlder = (data)=>{
        console.log(data)
    }
    const validateSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"Name is Required!!"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"Contact Is Required!!"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:"Invalid Contact."
            }
        },
        promoCodeValidator:{
            required:{
                value:true,
                message:"Promocode is Required!!"
            },
            validate:(params)=>{
                return params == "2026" || "Invalid Promocde!!"
            }
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:"hobbies are required!!"
            },
            validate:(params)=>{
                //params == Array
                return params?.length>=2 || "min 2 hobbies are required!!"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
    <h1>FormTask4</h1>
    <form onSubmit={handleSubmit(submitHanlder)}>
        <div>
            <label>Name: </label>
            <input type='text' {...register("name", validateSchema.nameValidator)} />
            {errors.name?.message && <h6 className="error-message">{errors.name?.message}</h6>}
        </div>    
        <div>
            <label>Contact: </label>
            <input type='text' {...register("contact", validateSchema.contactValidator)} />
            {errors.contact?.message && <h6 className="error-message">{errors.contact?.message}</h6>}
        </div>
        <div>
            <label>PROMO CODE: </label>
            <input type='text' {...register("promocode", validateSchema.promoCodeValidator)} />
            {errors.promocode?.message && <h6 className="error-message">{errors.promocode?.message}</h6>}
        </div>
        <div>
            <label>HOBBIES</label><br />
            <label>
                CRICKET:
                <input type='checkbox' {...register("hobbies", validateSchema.hobbiesValidator)} value={"cricket"} />
            </label>
            <label>
                TRAVEL:
                <input type='checkbox' {...register("hobbies", validateSchema.hobbiesValidator)} value={"travel"} />
            </label>
            <label>
                SCROLLING:
                <input type='checkbox' {...register("hobbies", validateSchema.hobbiesValidator)} value={"scrolling"} />
            </label>
        </div>
        {errors.hobbies?.message && <h6 className="error-message">{errors.hobbies?.message}</h6>}
        <div>
            <input type='submit' />
        </div>
    </form>
</div>

  )
}
