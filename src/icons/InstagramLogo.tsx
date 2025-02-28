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
    <circle
      cx="128"
      cy="128"
      r="34"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="32"
      y="32"
      width="192"
      height="192"
      rx="48"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="75.99998" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <rect
      x="36"
      y="36"
      width="184"
      height="184"
      rx="48"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="75.99998" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <g>
      <circle cx="128" cy="128" r="32" />
      <path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="36"
      y="36"
      width="184"
      height="184"
      rx="48"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="75.99998" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="36"
      y="36"
      width="184"
      height="184"
      rx="48"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="75.99998" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <rect
      x="36"
      y="36"
      width="184"
      height="184"
      rx="48"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="180" cy="75.99998" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const InstagramLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

InstagramLogo.displayName = "InstagramLogo";

export default InstagramLogo;
