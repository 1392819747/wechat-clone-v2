import ImagePreview from "@/component/base/ImagePreview";
import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
const ImageCard = ({ text, popover }) => {
  const openPreview = () => {
    console.log(text, "text-im1g");

    ImagePreview.open({
      showIndex: false,
      showIndicators: false,
      images: [text],
      onChange: (index) => console.log(`当前展示第${index + 1}张`),
    });
  };
  console.log("imige-------");
  return (
    <TouchableOpacity
      onLongPress={() => {
        popover.current?.show();
      }}
      onPress={openPreview}
    >
      <Image
        placeholder={require("@/assets/loading-image.png")}
        source={{ uri: text }}
        style={{ width: 180, height: 100 }}
        contentFit="cover"
        transition={200}
      />
    </TouchableOpacity>
  );
};
export default ImageCard;
