export const Button = () => {
  return (
    <button
      type="button"
      className="relative inline-flex overflow-hidden rounded-full p-[1.5px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#a78bfa_50%,#0000_100%)] motion-reduce:animate-none" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white">
        Start free trial
      </span>
    </button>
  );
};