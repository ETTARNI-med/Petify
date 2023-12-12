import Marquee from "react-fast-marquee";
import hill from "@/assets/companies/Hills.svg";
import iams from "@/assets/companies/IAMS.svg";
import nexGard from "@/assets/companies/NexGard.svg";
import pedigree from "@/assets/companies/Pedigree.svg";
import royalCanin from "@/assets/companies/Royal-Canin.svg";
import whiskas from "@/assets/companies/whiskas.svg";
import centralGAP from "@/assets/companies/Central_GAP.svg";
import AnimalCarePet from "@/assets/companies/AnimalCarePet.svg";
import BlueBuffalo from "@/assets/companies/Blue-Buffalo.svg";
import sheba from "@/assets/companies/sheba.svg";
import purinaa from "@/assets/companies/purinaa.svg";
import proper from "@/assets/companies/proper.svg";

const Marque = () => {
  return (
    <Marquee>
      <img src={hill} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={iams} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={nexGard} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={pedigree} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={royalCanin} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={whiskas} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={centralGAP} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={sheba} className="w-32 h-32 object-contain ml-4" alt="" />
      <img
        src={AnimalCarePet}
        className="w-32 h-32 object-contain ml-4"
        alt=""
      />
      <img src={BlueBuffalo} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={purinaa} className="w-32 h-32 object-contain ml-4" alt="" />
      <img src={proper} className="w-32 h-32 object-contain ml-4" alt="" />
    </Marquee>
  );
};
export default Marque;
