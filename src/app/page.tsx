export default function Home() {
  return (
    <div className="bg-slate-900 h-screen p-8 text-gray-100">
      <h1 className="text-5xl font-bold flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
        Hello World
      </h1>
      <p>Olá mundo</p>
      <button className="bg-sky-500 font-medium text-gray-100 px-4 py-2 rounded-md mt-4 hover:opacity-60">
        Sign in
      </button>
      <button disabled className="bg-red-500 font-medium text-gray-100 px-4 py-2 rounded-md mt-4 enabled:hover:bg-red-800 disabled:opacity-60 disabled:cursor-not-allowed">
        Delete
      </button>
    </div>
  );
}
