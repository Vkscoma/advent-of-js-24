import { Input } from "@/components/ui/input";
import Image from "next/image";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <div className="relative w-full">
        <Input
          type="password"
          placeholder="Password"
          className="pl-12 pr-12 bg-teal-400"
        />
        <Image
          src="/lock.svg"
          alt="Lock Icon"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900"
        />
        <Image
          src="/eye.svg"
          alt="Eye Icon"
          width={35}
          height={35}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-blue-900 rounded-full p-2"
        />
      </div>
    </div>
  );
}

export default InputWithButton;
