import { LinearGradient } from "expo-linear-gradient";

import tw from "../../../../lib/tailwind";

const Gradient = ({ children, style }) => {
  return (
    <LinearGradient
      colors={["#4141DB", "#DC07FF"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{
        ...style,
        ...tw`absolute w-full h-full rounded-8 items-center justify-center`,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default Gradient;
