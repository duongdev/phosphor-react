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
      d="M184.56854,184.56854c-41.52913,41.52913-99.19529,38.21906-126.92237,33.52363a24.07744,24.07744,0,0,1-19.73834-19.73834c-4.69543-27.72708-8.0055-85.39324,33.52363-126.92237S170.62675,33.2124,198.35383,37.90783a24.07744,24.07744,0,0,1,19.73834,19.73834C222.7876,85.37325,226.09767,143.03941,184.56854,184.56854Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="160"
      y1="96"
      x2="96"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="124.68629"
      y1="102.05887"
      x2="153.94113"
      y2="131.31371"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="102.05887"
      y1="124.68629"
      x2="131.31371"
      y2="153.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="148.22436"
      y1="36.22436"
      x2="219.77587"
      y2="107.77587"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="36.22399"
      y1="148.22399"
      x2="107.77612"
      y2="219.77612"
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
      d="M184.56854,184.56854c-41.52913,41.52913-99.19529,38.21906-126.92237,33.52363a24.07744,24.07744,0,0,1-19.73834-19.73834c-4.69543-27.72708-8.0055-85.39324,33.52363-126.92237S170.62675,33.2124,198.35383,37.90783a24.07744,24.07744,0,0,1,19.73834,19.73834C222.7876,85.37325,226.09767,143.03941,184.56854,184.56854Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="96"
      x2="96"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="124.68629"
      y1="102.05887"
      x2="153.94113"
      y2="131.31371"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="102.05887"
      y1="124.68629"
      x2="131.31371"
      y2="153.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="148.22436"
      y1="36.22436"
      x2="219.77587"
      y2="107.77587"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="36.22399"
      y1="148.22399"
      x2="107.77612"
      y2="219.77612"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M36.22334,148.22391c2.7732-25.26889,11.97219-53.55653,35.20812-76.79245s51.5238-32.435,76.79278-35.20816l.00012.00106,71.55151,71.55151.00081.00009c-2.77319,25.26892-11.97217,53.55662-35.20814,76.79258s-51.5235,32.4349-76.79237,35.20811Z"
      opacity="0.2"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M225.98,56.31055a32.13113,32.13113,0,0,0-26.29-26.29053c-31.35058-5.30908-90.43652-7.72363-133.915,35.75439-43.478,43.478-41.064,102.56446-35.75488,133.915a32.13113,32.13113,0,0,0,26.29,26.29053,200.74409,200.74409,0,0,0,33.27637,2.83984c31.082,0,69.78955-7.74511,100.63867-38.59423C233.70361,146.74756,231.28906,87.66113,225.98,56.31055Zm-166.998,153.894a16.11587,16.11587,0,0,1-13.18652-13.18652,184.687,184.687,0,0,1-2.68555-30.59473l46.48267,46.48291A185.002,185.002,0,0,1,58.98193,210.20459ZM165.65674,101.65674,150.6272,116.68652l8.97046,8.97022a8,8,0,0,1-11.31348,11.314L139.31372,128l-11.314,11.314,8.97045,8.97022a7.99983,7.99983,0,1,1-11.31347,11.31348l-8.97046-8.97022-15.02954,15.0293a7.99984,7.99984,0,0,1-11.31348-11.31348l15.02954-15.02978-8.97046-8.97022a8,8,0,0,1,11.31348-11.314L116.68628,128l11.314-11.314-8.97045-8.97022a7.99983,7.99983,0,1,1,11.31347-11.31348l8.97046,8.97022,15.02954-15.0293a7.99984,7.99984,0,0,1,11.31348,11.31348Zm.75024-58.563a185.0087,185.0087,0,0,1,30.61109,2.70166,16.11531,16.11531,0,0,1,13.18652,13.18652,184.687,184.687,0,0,1,2.68555,30.59473Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M184.56854,184.56854c-41.52913,41.52913-99.19529,38.21906-126.92237,33.52363a24.07744,24.07744,0,0,1-19.73834-19.73834c-4.69543-27.72708-8.0055-85.39324,33.52363-126.92237S170.62675,33.2124,198.35383,37.90783a24.07744,24.07744,0,0,1,19.73834,19.73834C222.7876,85.37325,226.09767,143.03941,184.56854,184.56854Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="96"
      x2="96"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="124.68629"
      y1="102.05887"
      x2="153.94113"
      y2="131.31371"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="102.05887"
      y1="124.68629"
      x2="131.31371"
      y2="153.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="148.22436"
      y1="36.22436"
      x2="219.77587"
      y2="107.77587"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="36.22399"
      y1="148.22399"
      x2="107.77612"
      y2="219.77612"
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
      d="M184.56854,184.56854c-41.52913,41.52913-99.19529,38.21906-126.92237,33.52363a24.07744,24.07744,0,0,1-19.73834-19.73834c-4.69543-27.72708-8.0055-85.39324,33.52363-126.92237S170.62675,33.2124,198.35383,37.90783a24.07744,24.07744,0,0,1,19.73834,19.73834C222.7876,85.37325,226.09767,143.03941,184.56854,184.56854Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="96"
      x2="96"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="124.68629"
      y1="102.05887"
      x2="153.94113"
      y2="131.31371"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="102.05887"
      y1="124.68629"
      x2="131.31371"
      y2="153.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="148.22436"
      y1="36.22436"
      x2="219.77587"
      y2="107.77587"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="36.22399"
      y1="148.22399"
      x2="107.77612"
      y2="219.77612"
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
      d="M184.56854,184.56854c-41.52913,41.52913-99.19529,38.21906-126.92237,33.52363a24.07744,24.07744,0,0,1-19.73834-19.73834c-4.69543-27.72708-8.0055-85.39324,33.52363-126.92237S170.62675,33.2124,198.35383,37.90783a24.07744,24.07744,0,0,1,19.73834,19.73834C222.7876,85.37325,226.09767,143.03941,184.56854,184.56854Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="96"
      x2="96"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="124.68629"
      y1="102.05887"
      x2="153.94113"
      y2="131.31371"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="102.05887"
      y1="124.68629"
      x2="131.31371"
      y2="153.94113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="148.22436"
      y1="36.22436"
      x2="219.77587"
      y2="107.77587"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="36.22399"
      y1="148.22399"
      x2="107.77612"
      y2="219.77612"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Football = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Football.displayName = "Football";

export default Football;
