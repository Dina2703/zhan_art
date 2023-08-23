import React from "react";

function Blog() {
  return (
    <div className="">
      <div className="w-[330px] p-2">
        <img
          src="random.jpg"
          alt=""
          className=" object-cover w-[330px]  mb-1 rounded-sm "
        />

        <div className="flex gap-2 items-center  ">
          <span className="font-bold text-[14px]">Travel</span> -
          <span className="text-gray-500 text-[12px]">July 3, 2023</span>
        </div>
        <div className="text-[14px] font-semibold pb-1 leading-[18px] ">
          Your most unhappy customers are your greatest source of learning
        </div>
        <p className="text-[12px] font-light line-clamp-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus
          itaque officia deleniti molestias dolorum sint. Numquam omnis itaque
          impedit repellat cum reprehenderit voluptatibus reiciendis. Vel
          temporibus laboriosam minus cupiditate voluptatem aliquam dolor cum
          esse nemo distinctio, voluptate dolorem facere.
        </p>
      </div>
    </div>
  );
}

export default Blog;
