import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-white space-y-8">
  <h1 className="text-5xl font-semibold drop-shadow-md tracking-wide">
    TESTE Api Disney
  </h1>

  <div className="flex space-x-6 text-lg font-medium">
    <button className="hover:text-gray-300 transition">Menu</button>
    <button className="hover:text-gray-300 transition">HookPage</button>
    <button className="hover:text-gray-300 transition">axios</button>
    <button className="hover:text-gray-300 transition">Server</button>
  </div>
</div>

   );
}
