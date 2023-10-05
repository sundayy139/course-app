import Link from "next/link";
import React, { FC } from "react";

type Props = {
  activeItem: number;
  isMobile: boolean;
};

export const navItemData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Course",
    url: "/course",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemData &&
          navItemData.map((item, index) => (
            <Link href={item.url} key={item.url}>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                } text-[18px] px-6 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="800px:hidden mt-5">
          <div className="w-full text-center py-6">
            <Link
              passHref
              href={"/"}
              className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
            >
              Elearning
            </Link>
          </div>
          {navItemData.map((item, index) => (
            <Link href={item.url} passHref key={item.url}>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                } text-[18px] px-6 py-5 font-Poppins font-[400] block`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
