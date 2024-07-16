import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Demo = () => {
  const [data, setData] = useState(null);
  const [content, setContent] = useState("");
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
      </div>
    </div>
  );
};

export default Demo;
