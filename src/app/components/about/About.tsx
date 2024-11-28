import React from "react";
import Bounded from "../hoc/Bounded";
import { IconCloudDemo } from "./IconCloudDemo";
import { BorderBeam } from "@/components/ui/border-beam";
import dynamic from "next/dynamic";

const MyGlobe = dynamic(() => import("./MyGlobe"), { ssr: false });

const About = () => {
  return (
    <Bounded className="my-20">
      <h1>A propos de moi</h1>
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
            <IconCloudDemo />

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
            <div className="flex h-fit w-full flex-col items-center justify-center rounded-3xl sm:h-[326px]">
              <MyGlobe />
              <div>
                <p className="grid-headtext">Je m'adapte géographiquement</p>
                <p className="grid-subtext">
                  Je suis basé à Lille, mais je suis ouvert à toutes les
                  opportunités de déplacement.
                </p>
              </div>
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
            <img
              src="/assets/grid4.png"
              alt="Me contacter"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contactez moi</p>
              <div className="copy-container" >
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">contact@aniss.dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default About;
