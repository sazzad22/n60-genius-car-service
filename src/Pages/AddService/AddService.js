import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // in on submit data is a obj where the  input values are
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/services`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto my-2 ">
      <h2 className="my-4">Please add a service</h2>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="border rounded mb-2"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className="border rounded mb-2"
          placeholder="Description"
          {...register("description", { required: true })}
        />

        {/* include validation with required or other  standard HTML validation rules */}
        <input
          className="border rounded mb-2"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <input
          className="border rounded mb-2"
          placeholder="Photo Url"
          {...register("img", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="border rounded mb-2"
          type="submit"
          value={"Add Service"}
        />
      </form>
    </div>
  );
};

export default AddService;
