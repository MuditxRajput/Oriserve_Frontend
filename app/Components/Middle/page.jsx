import Image from "next/image";
import middleImage from '../../assets/middleImage.png';
const Middle = () => {
  return (
    <div className="mt-10">
      <div className=" flex flex-col justify-between items-center gap-2">
        <div><Image src={middleImage} alt="npm-logo" width={100} height={100} /></div>
        <div>
          <p className="text-center text-3xl font-semibold text-slate-700">
            Bring the best of open<br></br> source to you, your team,<br></br> and your company
          </p>
        </div>
        <div className="mt-4">
          <p className="text-center text-md text-slate-900">
            Relied upon by more than 17 million developers worldwide, npm is<br></br>
            committed to making JavaScript development elegant, productive, and<br></br>    
            safe. The free npm Registry has become the center of JavaScript code<br></br>
            sharing, and with more than two million packages, the largest<br></br>
            software registry in the world. Our other tools and services take<br></br>
            the Registry, and the work you do around it, to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
