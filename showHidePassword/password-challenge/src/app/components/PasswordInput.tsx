"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <div className="relative w-full">
        <Input
          type="password"
          placeholder="enter password"
          className="py-8 px-14 focus-visible:ring-0 bg-teal-500"
        />
        <Image
          src="/lock.svg"
          alt="Lock Icon"
          width={40}
          height={40}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 border-r-2 border-white p-2"
        />
        <Image
          src="/eye.svg"
          alt="Eye Icon"
          width={40}
          height={40}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-blue-900 rounded-full p-2"
        />
      </div>
    </div>
  );
}

export default InputWithButton;
