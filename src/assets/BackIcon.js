import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIcon = props => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M328 112 184 256l144 144"
    />
  </Svg>
);
export default BackIcon;
