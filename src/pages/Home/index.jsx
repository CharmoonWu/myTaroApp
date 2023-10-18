import { View, Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";

definePageConfig({
  navigationBarTitleText: 'Home'
})

export default function Main() {
  return (
    <View className="index text-red-600">
      <Button >分享给好友</Button>
    </View>
  );
}
