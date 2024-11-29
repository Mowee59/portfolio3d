import React from "react";
import Bounded from "../hoc/Bounded";

import dynamic from "next/dynamic";
import Image from "next/image";
import grid2 from "@/assets/grid2.png";
import ContactMe from "./ContactMe";
import Button from "../button/Button";
const MyGlobe = dynamic(() => import("./MyGlobe"), { ssr: false });

const About = () => {
  return (
    <Bounded className="my-20">
      <h1 className="mb-12 text-4xl font-semibold leading-[43.20px] text-white">
        A propos de moi
      </h1>
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/me.png"
              alt="about"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Bonjour, je suis Aniss</p>
              <p className="grid-subtext">
                Je suis un développeur web full stack passionné par la création
                de solutions innovantes et efficaces.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="relative mx-auto">
              <Image
                src={grid2}
                alt="Tech stack"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-fit w-full object-contain sm:w-[276px]"
              />
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Les technologies avec lesquelles j'ai travaillé
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="mx-auto">
              <MyGlobe />
            </div>
            <div>
              <p className="grid-headtext">Je m'adapte géographiquement</p>
              <p className="grid-subtext">
                Je suis basé à Lille, mais je suis ouvert à toutes les
                opportunités de déplacement.
              </p>

              <Button
                label="Me contacter"
                withCircle
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* TODO: Use next Image  */}
            <img
              src="/assets/grid3.png"
              alt="Ma passion"
              className="h-fit w-full object-contain sm:h-[266px]"
            />
            <div>
              <p className="grid-headtext">Ma passion pour le développement</p>
              <p className="grid-subtext">
                Je suis passioné par le développement depuis l'adolescence et
                j'ai décidé de me lancer dans cette voie en me spécialisant dans
                le développement web.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <ContactMe />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default About;
