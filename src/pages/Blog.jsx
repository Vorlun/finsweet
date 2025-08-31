import React from "react";
import blogHeri from "../assets/blog.png";

const Blog = () => {
  return (
    <>
      <section className="pt-55">
        <div className="container flex flex-col items-center text-center gap-4">
          <h2 className="text-[#282938] font-[600] text-5xl max-w-[800px]">
            A UX Case Study on Creating a Studious Environment for Students
          </h2>
          <p className="text-[#282938] font-[500]">
            Andrew Jonson Posted on 27th January 2021
          </p>
          <img src={blogHeri} alt="" />
          <p className="max-w-[831px] text-[#282938] opacity-70 mt-12">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <p className="text-[#2405F2] my-4">Read more</p>
        </div>
      </section>
    </>
  );
};

export default Blog;
