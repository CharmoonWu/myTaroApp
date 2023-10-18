import { View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

definePageConfig({
  navigationBarTitleText: "PageMain",
});

export default function PageMain() {
  const goPackAge = (v) => {
    if (v === "cat") {
      Taro.navigateTo({
        url: "/pages/packageA/page/Cat",
      });
    }
  };

  return (
    <View>
      <Button fill="solid" onClick={() => goPackAge("cat")}>
        packageA - Cat
      </Button>
      <Button fill="solid">packageB - Apple</Button>
    </View>
  );
}
