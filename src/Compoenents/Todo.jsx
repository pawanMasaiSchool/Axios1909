import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoElement from "./TodoElement";
import axios from "axios";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [data, setData] = useState([]);

  const getData = () => {
    return axios({
      method: "get",
      url: `http://localhost:3000/tasks`
    });
  };

  useEffect(() => {
    handleReload();
  }, []);

  const handlePosting = (task) => {
    const payload = {
      title: task,
      status: false,
      id: uuid()
    };
    return axios({
      method: "post",
      url: `http://localhost:3000/tasks`,
      data: payload
    });
  };

  const handleSubmit = async (task) => {
    await handlePosting(task);
    await handleReload();
  };

  const handleReload = () => {
    getData().then((res) => {
      setData(res.data);
      // console.log("results",res.data)
    });
  };

  // console.log(data);

  return (
    <>
      <h1>Todo For Learning Axios</h1>
      <TodoInput handleSubmit={handleSubmit} />

      <div>
        {data.map((item) => (
          <TodoElement
            key={item.id}
            title={item.title}
            status={String(item.status)}
          />
        ))}
      </div>
    </>
  );
}
