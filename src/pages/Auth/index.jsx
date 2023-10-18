import { useMemo, useState } from "preact/hooks";
import { Tabbar } from "@nutui/nutui-react-taro";
import { Home, My } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import HomeView from "@/pages/Home";
import MineView from "@/pages/Mine";

const Main = () => {
  const [status, setStatus] = useState(0);

  const ViewItem = useMemo(() => {
    if (status === 0) {
      return <HomeView />;
    } else if (status === 1) {
      return <MineView />;
    } else {
      return <></>;
    }
  }, [status]);

  return (
    <View className="flex flex-col h-screen w-screen">
      <View className="w-screen h-[90vh] p-3 overflow-auto ">{ViewItem}</View>
      <Tabbar fixed defaultValue={0} onSwitch={setStatus}>
        <Tabbar.Item title="Home" icon={<Home />} />
        <Tabbar.Item title="Mine" icon={<My />} />
      </Tabbar>
    </View>
  );
};

export default Main;
