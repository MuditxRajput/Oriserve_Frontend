import { FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";

const Footer = () => {
  const data = [
    {
      title: "Support",
      data: ["Help", "Advisories", "Status", "Contact npm"],
    },
    {
      title: "Company",
      data: ["About", "Blog", "Press"],
    },
    {
      title: "Terms & Policies",
      data: ["Policies", "Terms of Use", "Code of Conduct", "Privacy Policy"],
    },
  ];

  return (
    <div className="flex px-10 mt-10 border-t border-gray-300 py-20">
      <div className="w-[200px] flex flex-col justify-center items-center ">
        <SiNpm size={40} className="mb-5" />
        <FaGithub size={40} />
      </div>
      <div className="w-3/4 flex justify-between  px-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-slate-700">{item.title}</h2>
            <ul className="flex flex-col gap-2">
              {item.data.map((subItem, subIndex) => (
                <li className="text-md text-slate-600" key={subIndex}>{subItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;