import React from "react";
import { useForm } from "react-hook-form";

export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  if(errors) console.log("error",errors);

  return (
    <div>
      <div>
        <h3>Adding Poles Information</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Latitude"
          {...register("Latitude", { required: true})}
        />
        <input
          type="text"
          placeholder="Longitude"
          {...register("Longitude", { required: true})}
        />
        <input
          type="text"
          placeholder="Height"
          {...register("Height", {
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="Capacity"
          {...register("Capacity", {
            required: true,
          
          })}
        />
        <input
          type="text"
          placeholder="Active"
          {...register("Active", {
            required: true,
       
          })}
        />
        <input
          type="date"
          placeholder="Installation Date"
          {...register("Installation Date", {
            required: true,
         
          })}
        />
        <input
          type="text"
          placeholder="Manufacturer"
          {...register("Manufacturer", {
            required: true,
          
          })}
        />
        <textarea
          
          placeholder="Inspection Status"
          {...register("Inspection Status", {
            required: true,
       
          })}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
