import { Progress } from "antd";
import { LANGUAGE_DATA } from "../../../constants/constants";

const Languages = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Green text-sm font-bold">Languages</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={LANGUAGE_DATA[0]?.proficiencyLevel}
              size={75}
            />
            <span className="text-xs font-bold text-Snow">
              {LANGUAGE_DATA[0]?.label}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={LANGUAGE_DATA[1]?.proficiencyLevel}
              size={75}
            />
            <span className="text-xs font-bold text-Snow">
              {LANGUAGE_DATA[1]?.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
