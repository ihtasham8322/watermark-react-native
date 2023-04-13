import {
  Entypo,
  MaterialIcons,
  AntDesign,
  Ionicons,
  FontAwesome,
  Feather
} from "@expo/vector-icons";

export default function useIcons({ lib, name, size, color }) {
  switch (lib) {
    case "MaterialIcons":
      return <MaterialIcons name={name} size={size} color={color} />;
    case "Entypo":
      return <Entypo name={name} size={size} color={color} />;
    case "AntDesign":
      return <AntDesign name={name} size={size} color={color} />;
    case "Ionicons":
      return <Ionicons name={name} size={size} color={color} />;
    case "FontAwesome":
      return <FontAwesome name={name} size={size} color={color} />;
    case "Feather":
      return <Feather name={name} size={size} color={color} />;
    default:
      return <MaterialIcons name={name} size={size} color={color} />;
  }
}
