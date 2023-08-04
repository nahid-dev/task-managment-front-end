import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { HiPlusCircle } from "react-icons/hi";

const AddATask = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newTask = {
      title: data.title,
      description: data.description,
      status: "working",
    };
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("task added");
          reset();
        }
      });
  };
  return (
    <div className="m-1">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title */}
          <div className="flex w-full  flex-col my-5">
            <label className="text-xl ml-3 font-semibold mb-3">Title</label>
            <input
              className="text-gray-600 p-3 text-xl bg-emerald-50 border-2 rounded-sm hover:border-emerald-800 transition-all duration-300"
              type="text"
              placeholder="Enter title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-600">Title is required</span>
            )}
          </div>
          {/* Description */}
          <div className="flex w-full  flex-col my-3">
            <label className="text-xl ml-3 font-semibold mb-3">
              Description
            </label>
            <input
              className="text-gray-600 p-3 text-xl bg-emerald-50 border-2 rounded-sm hover:border-emerald-800 transition-all duration-300"
              type="text"
              placeholder="Enter description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-600">Description is required</span>
            )}
          </div>
          {/* Status */}
          <div className="flex w-full  flex-col my-3">
            <label className="text-xl ml-3 font-semibold mb-3">Status</label>
            <input
              className="text-gray-600 p-3 text-xl bg-emerald-50 border-2 rounded-sm hover:border-emerald-800 transition-all duration-300"
              type="text"
              placeholder="Working"
              readOnly
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="flex text-xl font-semibold hover:text-white transition-all duration-300 items-center justify-center hover:bg-emerald-500 border border-emerald-500 w-full md:py-3 rounded"
          >
            <span>Add</span>{" "}
            <span>
              <HiPlusCircle size={32}></HiPlusCircle>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddATask;
