/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <path
      d="M164.45079,32H91.54921a8,8,0,0,0-5.65686,2.34315l-51.5492,51.5492A8,8,0,0,0,32,91.54921v72.90158a8,8,0,0,0,2.34315,5.65686l51.5492,51.5492A8,8,0,0,0,91.54921,224h72.90158a8,8,0,0,0,5.65686-2.34315l51.5492-51.5492A8,8,0,0,0,224,164.45079V91.54921a8,8,0,0,0-2.34315-5.65686l-51.5492-51.5492A8,8,0,0,0,164.45079,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M164.45079,32H91.54921a8,8,0,0,0-5.65686,2.34315l-51.5492,51.5492A8,8,0,0,0,32,91.54921v72.90158a8,8,0,0,0,2.34315,5.65686l51.5492,51.5492A8,8,0,0,0,91.54921,224h72.90158a8,8,0,0,0,5.65686-2.34315l51.5492-51.5492A8,8,0,0,0,224,164.45079V91.54921a8,8,0,0,0-2.34315-5.65686l-51.5492-51.5492A8,8,0,0,0,164.45079,32Z"
      opacity="0.2"
    />
    <path
      d="M164.45079,32H91.54921a8,8,0,0,0-5.65686,2.34315l-51.5492,51.5492A8,8,0,0,0,32,91.54921v72.90158a8,8,0,0,0,2.34315,5.65686l51.5492,51.5492A8,8,0,0,0,91.54921,224h72.90158a8,8,0,0,0,5.65686-2.34315l51.5492-51.5492A8,8,0,0,0,224,164.45079V91.54921a8,8,0,0,0-2.34315-5.65686l-51.5492-51.5492A8,8,0,0,0,164.45079,32Z"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M227.3125,80.23438,175.76562,28.6875A16.11511,16.11511,0,0,0,164.45312,24H91.54687a16.11515,16.11515,0,0,0-11.3125,4.6875L28.6875,80.23438A16.11511,16.11511,0,0,0,24,91.54688v72.90625a16.11515,16.11515,0,0,0,4.6875,11.3125L80.23437,227.3125A16.11515,16.11515,0,0,0,91.54687,232h72.90625a16.11511,16.11511,0,0,0,11.3125-4.6875l51.54688-51.54687A16.11515,16.11515,0,0,0,232,164.45313V91.54688A16.11511,16.11511,0,0,0,227.3125,80.23438Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M164.45079,32H91.54921a8,8,0,0,0-5.65686,2.34315l-51.5492,51.5492A8,8,0,0,0,32,91.54921v72.90158a8,8,0,0,0,2.34315,5.65686l51.5492,51.5492A8,8,0,0,0,91.54921,224h72.90158a8,8,0,0,0,5.65686-2.34315l51.5492-51.5492A8,8,0,0,0,224,164.45079V91.54921a8,8,0,0,0-2.34315-5.65686l-51.5492-51.5492A8,8,0,0,0,164.45079,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M164.45079,32H91.54921a8,8,0,0,0-5.65686,2.34315l-51.5492,51.5492A8,8,0,0,0,32,91.54921v72.90158a8,8,0,0,0,2.34315,5.65686l51.5492,51.5492A8,8,0,0,0,91.54921,224h72.90158a8,8,0,0,0,5.65686-2.34315l51.5492-51.5492A8,8,0,0,0,224,164.45079V91.54921a8,8,0,0,0-2.34315-5.65686l-51.5492-51.5492A8,8,0,0,0,164.45079,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M164.45079,32H91.54921a8,8,0,0,0-5.65686,2.34315l-51.5492,51.5492A8,8,0,0,0,32,91.54921v72.90158a8,8,0,0,0,2.34315,5.65686l51.5492,51.5492A8,8,0,0,0,91.54921,224h72.90158a8,8,0,0,0,5.65686-2.34315l51.5492-51.5492A8,8,0,0,0,224,164.45079V91.54921a8,8,0,0,0-2.34315-5.65686l-51.5492-51.5492A8,8,0,0,0,164.45079,32Z"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Octagon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Octagon.displayName = "Octagon";

export default Octagon;
