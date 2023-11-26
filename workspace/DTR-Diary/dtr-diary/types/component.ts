import { StyleProps } from "react-native-reanimated";

export interface IButtonProps {
  text: string;
  onPressHandler: () => void;
  style: StyleProps;
}
