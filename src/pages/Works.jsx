import React, { useContext, useState } from "react";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/context";
import { works } from "../work/works";

const Work = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const { workData, setWorkData } = useGlobalContext();

  return (
    <section className="bg-black w-screen text-white h-full">
      <h1 className="text-2xl font-bold mb-4">Works</h1>
      <main>
        <div className="flex flex-wrap justify-between">
          {works.map((work) => {
            return (
              <div className="text-wihte basis-5/12 mb-12" key={work.id}>
                <div className="cursor-pointer overflow-hidden h-80">
                  <img
                    src={work.image}
                    className="h-full w-full hover:scale-125 transition duration-300"
                    alt=""
                    onClick={() => setWorkData(work)}
                    data-modal-toggle="defaultModal"
                  />
                </div>
                <h1>{work.title}</h1>
              </div>
            );
          })}
        </div>
      </main>
      <Modal />
    </section>
  );
};

export default Work;
