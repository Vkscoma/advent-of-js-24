"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Lock from "./Lock";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export function InputWithButton() {
  const [showPassword, setShowPassword] = useState(false);

  const bgStyle = {
    backgroundColor: "#25c9c0",
  };

  const eyeStyles = useSpring({
    transform: showPassword ? "rotate(180deg)" : "rotate(0deg)",
    opacity: showPassword ? 0.5 : 1,
    config: { duration: 250 },
  });

  const inputBgStyles = useSpring({
    backgroundColor: showPassword ? "#213a84" : "#25c9c0",
    config: { duration: 300 },
  });

  const lockStyles = useSpring({
    fill: showPassword ? "#25c9c0" : "#213a84",
    config: { duration: 300 },
  });

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <div className="relative w-full">
        <animated.div style={inputBgStyles}>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full py-8 px-16 focus-visible:ring-0 focus:ring-0 ${
              showPassword ? "text-white" : "text-black"
            }`}
          />
        </animated.div>
        {/* {showPassword ? (
          <animated.div style={inputBgStyles}>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full py-8 px-16 focus-visible:ring-0 focus:ring-0 ${
                showPassword ? "text-white" : "text-black"
              }`}
            />
          </animated.div>
        ) : (
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={bgStyle}
            className={`w-full py-8 px-16 focus-visible:ring-0 focus:ring-0  ${
              showPassword ? "text-white" : "text-black"
            }`}
          />
        )} */}

        <animated.div style={lockStyles}>
          <Lock />
        </animated.div>

        <animated.div
          style={eyeStyles}
          className="absolute right-3 top-2 transform -translate-y-1/2 cursor-pointer bg-blue-900 rounded-full p-2"
          onClick={togglePassword}
        >
          <Image
            src="/eye.svg"
            alt={showPassword ? "Open Eye" : "Closed Eye"}
            width={30}
            height={30}
          />
        </animated.div>
      </div>
    </div>
  );
}

export default InputWithButton;
