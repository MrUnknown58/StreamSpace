import HomeClock from "@/components/HomeClock";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  return (
    <section className="flex text-white size-full flex-col gap-10">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <HomeClock />
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
