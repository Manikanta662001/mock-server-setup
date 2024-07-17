import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "./store/features/fetchusers-slice";
const Demo = () => {
  const [data, setData] = useState(null);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { users, errormsg, loading } = useSelector((state) => state.fetchUsers);
  console.log("STATE::::", { users, errormsg, loading });
  const handleSendMessage = (e) => {
    e.preventDefault();
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bklbfjbfb3i4y89849",
      },
      body: JSON.stringify({ content }),
    })
      .then((res) => res.json())
      .then((result) => console.log("RES:::", result));
  };
  const handleFetch = (e) => {
    e.preventDefault();
    dispatch(fetchusers());
  };
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((dt) => {
        setData(dt.data);
      });
  }, []);
  return (
    <div>
      <h1>Demo</h1>
      <h1>{data ? data.join(", ") : "Loading....."}</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSendMessage}>Add Message</button>
        <div>
          <button onClick={handleFetch}>Fetch Users</button>
        </div>
        {errormsg ? (
          <p>{errormsg}</p>
        ) : loading ? (
          <h4>Loading.......</h4>
        ) : (
          <div>
            {users.map((eachUser) => {
              return (
                <div key={eachUser.id}>
                  {eachUser.id}-{eachUser.name}-{eachUser.loc}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
