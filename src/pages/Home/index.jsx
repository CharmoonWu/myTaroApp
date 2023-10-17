import { View, Text } from "@tarojs/components";
import { useEffect } from "react";
import { Button } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

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
