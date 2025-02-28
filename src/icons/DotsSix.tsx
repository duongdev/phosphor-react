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

pathsByWeight.set("bold", () => (
  <>
    <circle cx="60" cy="92" r="16" />
    <circle cx="128" cy="92" r="16" />
    <circle cx="196" cy="92" r="16" />
    <circle cx="60" cy="164" r="16" />
    <circle cx="128" cy="164.0001" r="16" />
    <circle cx="196" cy="164" r="16" />
  </>
));

pathsByWeight.set("duotone", () => (
  <>
    <circle cx="60" cy="92" r="12" />
    <circle cx="128" cy="92" r="12" />
    <circle cx="196" cy="92" r="12" />
    <circle cx="60" cy="164" r="12" />
    <circle cx="128" cy="164.0001" r="12" />
    <circle cx="196" cy="164" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M72,92.0001a12,12,0,1,1-12-12A12,12,0,0,1,72,92.0001Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80.0001Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104.0001Zm-136,48a12,12,0,1,0,12,12A12,12,0,0,0,60,152.0001Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152.0001Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152.0001Z" />
  </>
));

pathsByWeight.set("light", () => (
  <>
    <circle cx="60" cy="92" r="10" />
    <circle cx="128" cy="92" r="10" />
    <circle cx="196" cy="92" r="10" />
    <circle cx="60" cy="164" r="10" />
    <circle cx="128" cy="164.0001" r="10" />
    <circle cx="196" cy="164" r="10" />
  </>
));

pathsByWeight.set("thin", () => (
  <>
    <circle cx="60" cy="92" r="8" />
    <circle cx="128" cy="92" r="8" />
    <circle cx="196" cy="92" r="8" />
    <circle cx="60" cy="164" r="8" />
    <circle cx="128" cy="164.0001" r="8" />
    <circle cx="196" cy="164" r="8" />
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <circle cx="60" cy="92" r="12" />
    <circle cx="128" cy="92" r="12" />
    <circle cx="196" cy="92" r="12" />
    <circle cx="60" cy="164" r="12" />
    <circle cx="128" cy="164.0001" r="12" />
    <circle cx="196" cy="164" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DotsSix = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DotsSix.displayName = "DotsSix";

export default DotsSix;
