"use client";
const HomeClock = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(now);
  return (
    <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
      <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
        Upcoming Meeting at 12:30
      </h2>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
        <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
      </div>
    </div>
  );
};

export default HomeClock;
