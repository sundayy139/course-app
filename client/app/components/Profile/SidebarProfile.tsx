import Image from "next/image";
import React, { FC } from "react";
import avatarDefault from "../../../public/assets/avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (avtive: number) => void;
  logOutHandler: any;
};

const SidebarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logOutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center justify-start px-3 py-4 cursor-pointer ${
          active === 1 ? "dark:bg-slate-800 bg-[#fafafa]" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user.avatar.url || avatar
              ? user.avatar.url || avatar
              : avatarDefault
          }
          alt=""
          width={20}
          height={20}
          className="w-5 h-5 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />
        <h5 className="pl-5 800px:block hidden font-Poppins dark:text-white text-black">
          My Accout
        </h5>
      </div>
      <div
        className={`w-full flex items-center justify-start px-3 py-4 cursor-pointer ${
          active === 2 ? "dark:bg-slate-800 bg-[#fafafa]" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={30} className="dark:text-white text-black" />
        <h5 className="pl-5 800px:block hidden font-Poppins dark:text-white text-black">
          Change Password
        </h5>
      </div>
      <div
        className={`w-full flex items-center justify-start px-3 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-slate-800 bg-[#fafafa]" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={30} className="dark:text-white text-black" />
        <h5 className="pl-5 800px:block hidden font-Poppins dark:text-white text-black">
          Enrolled Courses
        </h5>
      </div>
      {user.role === "admin" && (
        <div
          className={`w-full flex items-center justify-start px-3 py-4 cursor-pointer ${
            active === 6 ? "dark:bg-slate-800 bg-[#fafafa]" : "bg-transparent"
          }`}
          onClick={() => setActive(6)}
        >
          <MdOutlineAdminPanelSettings
            size={30}
            className="dark:text-white text-black"
          />
          <h5 className="pl-5 800px:block hidden font-Poppins dark:text-white text-black">
            Admin Dashboard
          </h5>
        </div>
      )}
      <div
        className="w-full flex items-center justify-start px-3 py-4 cursor-pointer bg-transparent"
        onClick={() => logOutHandler()}
      >
        <AiOutlineLogout size={30} className="dark:text-white text-black" />
        <h5 className="pl-5 800px:block hidden font-Poppins dark:text-white text-black">
          Logout
        </h5>
      </div>
    </div>
  );
};

export default SidebarProfile;
