import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 absolute inset-0 bg-black bg-opacity-40">
          <div className="font-bold text-3xl sm:text-5xl  text-pretty lg:text-6xl sm:max-w-xl max-w-xs text-white z-30 shadow-lg">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
