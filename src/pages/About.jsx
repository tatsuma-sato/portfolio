import React from "react";
import avatar from "../images/avatar.png";

const About = () => {
  return (
    <section
      className="bg-black w-screen text-white h-full py-5"
    >
      <h1 className="text-2xl">About Me</h1>
      <main className="pt-5 relative flex mt-5 justify-around">
        <div className="about-left">
          <div className="">
            <div
              className="bg-darkGray rounded-2xl h-3/4"
              style={{ height: "650px", width: "550px" }}
            >
              <p className="p-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                imperdiet rutrum enim, a dictum urna gravida vitae. Nullam
                accumsan risus varius dapibus sollicitudin. Nullam dapibus
                elementum pulvinar. Aliquam erat volutpat. Sed posuere massa sed
                magna luctus placerat. Aenean sit amet ex dolor. Sed porttitor
                dui eget efficitur dapibus. Sed nunc velit, volutpat sit amet
                feugiat ut, dictum eget metus. Mauris vel egestas elit. Donec
                quis vehicula felis. Cras porta nisi in mauris rhoncus
                vulputate. Pellentesque ultrices, felis at dignissim auctor,
                lectus odio faucibus est, a cursus libero nisi et orci. Donec
                tristique sagittis lectus, vel euismod dui venenatis ac.
                Curabitur blandit, mi et semper sollicitudin, odio dui consequat
                risus, sed imperdiet neque nibh nec tortor. Aliquam molestie
                dictum elit eget ornare. Cras nunc nulla, euismod in fringilla
                quis, imperdiet vitae dui. Pellentesque ornare neque ultricies
                nisi laoreet, ac auctor urna luctus. Pellentesque est lacus,
                rutrum sed scelerisque nec, ultrices vitae massa. In et pulvinar
                enim. Vestibulum lacinia a mi id gravida. Aliquam porta, sapien
                eget aliquet volutpat, risus nulla ornare quam, a interdum ex
                dolor eget nunc. Praesent quis urna nec nisi sagittis blandit.
              </p>
            </div>
          </div>
        </div>

        <div className="about-right flex items-center">
          <div className=" w-96 h-96">
            <img className="rounded-full w-full" src={avatar} alt="" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
