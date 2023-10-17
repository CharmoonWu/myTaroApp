import { View, Text } from "@tarojs/components";
import { useEffect } from "react";
import { Button } from "@nutui/nutui-react-taro";

definePageConfig({
  navigationBarTitleText: 'Mine'
})

export default function Main() {

  return (
    <View className="index text-red-600">
      <Text>Mine</Text>
    </View>
  );
}
