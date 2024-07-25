"use client";
import React from "react";
import { useState } from "react";
export const data = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid perspiciatis possimus quae minus labore. Ex itaque voluptatum distinctio quibusdam placeat ea nam, aspernatur doloremque porro blanditiis perferendis animi reiciendis voluptas laborum eveniet ipsum dignissimos iste obcaecati. ",
];
export default function Practise() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string[]>([]);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };
  const sumitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amount = parseInt(count.toString());
    if (count <= 0) {
      amount = 1;
    }
    if (count >= 10) {
      amount = 10;
    }
    setText(data.slice(0, amount));
  };

  return (
    <form
      onSubmit={sumitHandler}
      className=" flex flex-col justify-center items-center"
    >
      <h1 className=" font-bold text-green-800  text-3xl">
        Generate the paragraph
      </h1>
      <div className=" flex mt-10 gap-2">
        <input
          className=" border border-purple-700  w-[300px] rounded-xl p-2 "
          onChange={onChangeHandler}
          type="number"
          id="amount"
          value={count}
          max={10}
        />
        <button className=" bg-yellow-500 text-white rounded-xl p-2 ">
          Generate
        </button>
      </div>
      <div className=" w-[500px] mt-2">
        {text.map((item) => {
          return (
            <div className=" bg-purple-600 mt-2 text-white p-2 shadow-xl rounded-xl">
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </form>
  );
}
