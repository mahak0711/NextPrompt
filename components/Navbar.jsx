"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/NextPrompt.svg"
          alt="NextPrompt Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">NextPrompt</p>
      </Link>

      {/* mobile */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? <div className="flex gap-3 md:gap-5 ">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>
          <button className="outline_btn" type="button" onClick={signOut}>
            Sign Out
          </button>

          <Link href="/profile">
          <Image src="/assets/images/NextPrompt.svg"
          width={40}
          height={40}
          className="rounded-full"
          alt="profile"/>
          </Link>
        </div> : <></>}
      </div>
    </nav>
  );
};

export default Navbar;
