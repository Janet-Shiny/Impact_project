import Image from "next/image";
import logo from "../../Assests/Images/logo.png";
import menu from "../../Assests/Images/menu.png";
import line from "../../Assests/Images/line.png";


export default function Navbar() {
  return (
   <div>
      <div className="flex flex-col items-center justify-between w-full p-1.5 bg-black ">
        <Image className="flex w-52" src={logo} alt="Logo" />
      </div>
        
      <div className="flex -mt-16 w-9 ml-4">
        <Image src={menu} alt="MenuBar" />
      </div>

      <div className="flex -mt-20 w-0.5 ml-24">
        <Image src={line} alt="Line" />
      </div>

      <div>
      
      </div>
      
     
  </div>
    
  );
}
