import React from 'react';
import './style.scss';
import { send } from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormValidation = () => {
    const {register, handleSubmit, formState:{errors}, } =  useForm();
    
    const onSubmit = (data) =>{
        send(
            "service_nd4uiq4", "template_2xt8bcl",  data, "arq0o--cgaUhVx0Rd"
        ).then(response=>{
            console.log("SUCCESS",response.status, response.text);
            formSuccess();
        }).catch(err =>{
            console.log("FailEd....", err)
        })
    };
    const formSuccess = () =>{
        toast("Thank for submition Your Query");
        document.getElementById("queryForm").reset();
    }
    return (
    <div className='query-form'>
        <ToastContainer/>
        <form id='"queryForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='input-field'>
                <input type='text' name='form_name' placeholder='Name'
                 {...register("form_name", { required: "Name is require" })}/>
                  { errors.form_name?.message && (<p className='error'>{errors.form_name?.message}</p>)}
            </div>
          

            <div className='input-field'>
                <input type='text' name='reply_to' placeholder='Email' 
                {...register("reply_to", { required: "Email is require",
                 pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                },
               })}/>
                { errors.reply_to?.message && (<p className='error'>{errors.reply_to?.message}</p>)}
            </div>
               
            <div className='input-field'>
                <input type='text' name='Mobile_no' placeholder='Mobile'
               {...register("Mobile_no", { required: "Mobile is require",
               miniLength : {
                value: 9,
                message: "Minimum 10 Charcter required",
            },})} />
            { errors.Mobile_no?.message && (<p className='error'>{errors.Mobile_no?.message}</p>)}
            </div>
            
            <div className='input-field'>
                <input type='text' name='subject' placeholder='Subject'
                {...register("subject", { required: "Subject is require",  
                miniLength : {
                    value: 10,
                    message: "Minimum 10 Character required",}, })}/>
                    { errors.subject?.message && (<p className='error'>{errors.subject?.message}</p>)}
            </div>
            
            <div className='input-field full-width'>
                <textarea className='textarea' name='message' placeholder='Your message'
                                {...register("subject", { required: "Subject is require",  
                                miniLength : {
                                    value: 200,
                                    message: "Maximum 200 Character required",}, })}/>
                                    { errors.message?.message && (<p className='error'>{errors.message?.message}</p>)}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation;