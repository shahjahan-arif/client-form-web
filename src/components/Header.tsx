import Link from "next/link";

export default function Header() {
  return (
    <header className="container  p-7  mx-auto flex justify-between">
      <div>
        <h2 className="font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
          The Client Web
        </h2>
      </div>
      <nav className="flex gap-4">
        <Link
          href={"#"}
          className="py-2 px-6 rounded-xl text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="py-2 px-6 rounded-xl text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          Clinet Add
        </Link>
      </nav>
      <div>
        <button className=" py-2 px-8 hover:scale-105 duration-500 rounded-xl bg-blue-600 text-white ">
          Logout
        </button>
      </div>
    </header>
  );
}
