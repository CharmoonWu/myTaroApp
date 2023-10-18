import { View, Text } from "@tarojs/components";

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
