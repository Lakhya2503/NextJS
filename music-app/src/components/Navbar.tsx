'use client';
import React, { useState } from "react";
import { FloatingNav, HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn} from "@/utils/cn";
import Link from "next/link";


export default function Navbar({className} : {className : string}) {
  const [ active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ")}>
      <Menu setActive={setActive}>
          <Link href={"/"}>
              <MenuItem setActive={setActive} active={active} item="home"></MenuItem>
          </Link>
              <MenuItem setActive={setActive} active={active} item="our courses">
                  <div className="flex flex-col space-y-4 text-sm dark:bg-black dark:text-white">
                      <HoveredLink href="/courses" >
                          all Courses
                      </HoveredLink>
                  </div>
              </MenuItem>
      </Menu>
    </div>
  )
}

