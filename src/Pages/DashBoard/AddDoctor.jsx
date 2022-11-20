import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async ()=> {
            const res = await fetch(`${process.env.REACT_APP_URL}/appointmentSpecialty`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <div>Loading....</div>
    }

  const handleAddDoctor = (data) => {
      const image = data.image[0]
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_img_api_key}`
      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgData => {
        if(imgData.success){
            const doctor = {
                name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url
            }
            fetch(`${process.env.REACT_APP_URL}/doctors`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify(doctor) 
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Doctor successfully added');
                    navigate('/dashboard/managedoctors')
                }
            })
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">Add a Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full "
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input input-bordered w-full "
            name="email"
            id=""
          />
          <label className="label">
            <span className="label-text-alt">Forgat Password</span>
          </label>
        </div>
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
          {...register("specialty", { required: 'specialty is required'})}
          className="select select-bordered w-full mb-2">
          
            {
                specialties.map(specialty => <option key={specialty._id}>{specialty?.name}</option>)
            }
          </select>
        </div>
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            name="image"
            className="mb-3"
            {...register("image", { required: 'image is required' })}
          />
        </div>
        <button className="btn btn-accent w-full mb-2" type="submit">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
