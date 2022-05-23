import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey ='1177aebbaa41e7aa0ef8e79e5d225ced'

    const onSubmit = async data => {
     const image = data.image[0];
     const formData = new FormData();
     formData.append('image',image);
       const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
       fetch(url,{
           method:'POST',
           body: formData
       })
    .then(res => res.json())
    .then(result =>{
        if(result.success){
            const img =result.data.url;
            const doctor ={
                name: data.name,
                email:data.email,
                specialty: data.specialty,
                img:img
            }
            fetch('http://localhost:5000/doctor',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(inserted =>{
              if(inserted.insertedId){
                  toast.success('Doctor added successfully')
                  reset();
              }
              else{
                  toast.error('failed to add the doctor');
              }
            })
        }
        // console.log('imgbb', result)
    })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Add New Doctor</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true.valueOf,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">
                            {errors.name.message} </span>}
                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-400">
                            {errors.name.message} </span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true.valueOf,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                meesage: 'Provide a Valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">
                            {errors.email.message} </span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">
                            {errors.email.message} </span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                        
                    <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
                      {
                          services.map(service => <option
                          key={service._id}
                          value={service.name}
                          >{service.name}</option> )
                      }
                    </select>
                    
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true.valueOf,
                                message: 'Image is Required'
                            }
                        })} 
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">
                            {errors.name.message} </span>}
                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-400">
                            {errors.name.message} </span>}

                    </label>
                </div>


                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;