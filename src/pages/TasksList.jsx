import React from "react";
import { toast } from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { useQuery } from "react-query";

const TasksList = () => {
  // const [tasks, setTasks] = useState([]);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(
        "https://job-task-backend-nahid-dev.vercel.app/allTasks"
      );
      const data = await res.json(); // Extract the data from the response
      return data;
    },
  });
  // console.log(tasks);
  // task delete
  const handleDeleteTask = (id) => {
    fetch(`https://job-task-backend-nahid-dev.vercel.app/taskDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Task deleted");
          refetch();
        }
      });
  };
  // UPDATE TASK
  const handleUpdateTask = (id) => {
    fetch(`https://job-task-backend-nahid-dev.vercel.app/updateTask/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Task Completed");
          refetch();
        }
      });
  };
  return (
    <div className="min-h-[375px]">
      {/* Task List */}
      {tasks &&
        tasks.map((task, index) => (
          <div key={index} className="border my-5 m-1">
            {/* title area */}
            <div className="flex justify-between bg-emerald-50 items-center p-2">
              <div>
                <h2 className="flex items-center font-bold">
                  {" "}
                  <span className="mr-1">{index + 1}. </span>
                  <span> {task?.title}</span>
                </h2>
              </div>
              <div className="flex items-center space-x-2">
                {task?.status === "complete" ? (
                  <button
                    className="bg-emerald-200 text-gray-500 px-1 rounded"
                    disabled
                  >
                    Completed
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdateTask(task._id)}
                    className="bg-emerald-400 text-white px-1 rounded"
                  >
                    Complete
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTask(task?._id)}
                  className="text-red-500"
                >
                  <TiDelete size={32}></TiDelete>
                </button>
              </div>
            </div>
            {/* Description area */}
            <div>
              <p className="px-2">{task?.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TasksList;
