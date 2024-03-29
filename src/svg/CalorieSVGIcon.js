import React from "react";
import Svg, { Defs, ClipPath, Circle, G, Use, Path } from "react-native-svg";


const CalorieSVGIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-name="Layer 1"
    viewBox="0 0 36 36"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Circle cx={-43.05} cy={-37.77} r={10.16} fill="none" />
      </ClipPath>
      <ClipPath id="b">
        <Circle cx={-41.01} cy={18} r={10.16} fill="none" />
      </ClipPath>
      <ClipPath id="c">
        <Circle cx={13.42} cy={18.7} r={10.16} fill="none" />
      </ClipPath>
      <ClipPath id="d">
        <Circle cx={-40.94} cy={73.9} r={10.16} fill="none" />
      </ClipPath>
      <ClipPath id="e">
        <Circle cx={13.5} cy={74.6} r={10.16} fill="none" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Use transform="matrix(.24 0 0 .24 -89.36 -84.08)" xlinkHref="#b" />
    </G>
    <G clipPath="url(#b)">
      <Use transform="matrix(.24 0 0 .24 -87.33 -28.31)" xlinkHref="#b" />
    </G>
    <G clipPath="url(#c)">
      <Use transform="matrix(.24 0 0 .24 -32.96 -27.68)" xlinkHref="#f" />
    </G>
    <G clipPath="url(#d)">
      <Use transform="matrix(.24 0 0 .24 -87.25 27.59)" xlinkHref="#b" />
    </G>
    <G clipPath="url(#e)">
      <Use transform="matrix(.24 0 0 .24 -32.88 28.22)" xlinkHref="#f" />
    </G>
    <Path
      fill="none"
      stroke="#212134"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M27.5 23.61A7.73 7.73 0 0120 28.33a8.9 8.9 0 01-.9 0c-5.58-.55-9.36-6.6-7.16-11.75l.76-2.14 2 2.53 5-7.86 5 7.9 2.93-3.59L28.41 16M13.78 19.89A4.85 4.85 0 0017.52 25"
    />
  </Svg>
);


export default CalorieSVGIcon;

