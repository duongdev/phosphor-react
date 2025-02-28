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
    <rect
      x="-6"
      y="102"
      width="176"
      height="52"
      rx="8"
      transform="translate(210 46) rotate(90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="86"
      y="102"
      width="176"
      height="52"
      rx="8"
      transform="translate(302 -46) rotate(90)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect
      x="-4"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(212 44) rotate(90)"
      opacity="0.2"
    />
    <rect
      x="84"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      opacity="0.2"
    />
    <rect
      x="-4"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(212 44) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="84"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M120,48V208a16.01833,16.01833,0,0,1-16,16H64a16.01833,16.01833,0,0,1-16-16V48A16.01833,16.01833,0,0,1,64,32h40A16.01833,16.01833,0,0,1,120,48Zm72-16H152a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,192,32Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="-4"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(212 44) rotate(90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="84"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="-4"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(212 44) rotate(90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="84"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="-4"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(212 44) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="84"
      y="100"
      width="176"
      height="56"
      rx="8"
      transform="translate(300 -44) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Columns = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Columns.displayName = "Columns";

export default Columns;
