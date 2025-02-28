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
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="56"
      x2="200"
      y2="36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="56"
      x2="180.97887"
      y2="49.81966"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="56"
      x2="188.24429"
      y2="72.18034"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="56"
      x2="211.75571"
      y2="72.18034"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="200"
      y1="56"
      x2="219.02113"
      y2="49.81966"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M223.31831,116.5001A96.987,96.987,0,0,1,224,128a96,96,0,1,1-96-96q4.50554,0,8.90843.40785"
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
      d="M205.30634,71.08008A15.965,15.965,0,0,1,184.92,50.6936,96.001,96.001,0,0,0,63.79883,199.375v-.001A71.99731,71.99731,0,0,1,128,160a40,40,0,1,1,40-40,40.0001,40.0001,0,0,1-40,40,71.99731,71.99731,0,0,1,64.20117,39.374A96.002,96.002,0,0,0,205.30634,71.08008Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="200"
      cy="56"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="186.14359"
      y1="48"
      x2="175.75129"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="186.14359"
      y1="64"
      x2="175.75129"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="72"
      x2="200"
      y2="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.85641"
      y1="64"
      x2="224.24871"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.85641"
      y1="48"
      x2="224.24871"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M223.31831,116.5001A96.987,96.987,0,0,1,224,128a96,96,0,1,1-96-96q4.50554,0,8.90843.40785"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M128,76a44,44,0,1,1-44,44A44,44,0,0,1,128,76Zm103.17676-2a7.99671,7.99671,0,0,1-10.92822,2.92822l-4.66822-2.69531A24.0036,24.0036,0,0,1,208,78.624V84a8,8,0,0,1-16,0V78.624a24.0036,24.0036,0,0,1-7.58032-4.39111l-4.66822,2.69531a8,8,0,0,1-8-13.85644l4.65687-2.68872a23.72829,23.72829,0,0,1,0-8.76612l-4.65687-2.68872a8,8,0,0,1,8-13.85644l4.66822,2.69531A24.0036,24.0036,0,0,1,192,33.376V28a8,8,0,0,1,16,0v5.376a24.0036,24.0036,0,0,1,7.58032,4.39111l4.66822-2.69531a8,8,0,1,1,8,13.85644l-4.65687,2.68872a23.72829,23.72829,0,0,1,0,8.76612l4.65687,2.68872A8.00037,8.00037,0,0,1,231.17676,74ZM200,64a8,8,0,1,0-8-8A8.00917,8.00917,0,0,0,200,64Zm22.37012,44.5564a7.99991,7.99991,0,0,0-6.99512,8.89209A89.40475,89.40475,0,0,1,216,128a87.63852,87.63852,0,0,1-22.24194,58.41064,79.70677,79.70677,0,0,0-24.431-22.97485,59.83657,59.83657,0,0,1-82.65418-.00024A79.7048,79.7048,0,0,0,62.2417,186.41016,87.9498,87.9498,0,0,1,128,40c2.72656,0,5.477.126,8.1748.37427a8.00012,8.00012,0,0,0,1.4668-15.93286C134.4585,24.14844,131.21436,24,128,24A103.95123,103.95123,0,0,0,57.81982,204.68091a7.93384,7.93384,0,0,0,1.32544,1.18921,103.78418,103.78418,0,0,0,137.71155-.002,7.935,7.935,0,0,0,1.31983-1.18383A103.74663,103.74663,0,0,0,232,128a105.40092,105.40092,0,0,0-.73828-12.44849A8,8,0,0,0,222.37012,108.5564Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="200"
      cy="56"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="186.14359"
      y1="48"
      x2="175.75129"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="186.14359"
      y1="64"
      x2="175.75129"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="200"
      y1="72"
      x2="200"
      y2="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="213.85641"
      y1="64"
      x2="224.24871"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="213.85641"
      y1="48"
      x2="224.24871"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M223.31831,116.5001A96.987,96.987,0,0,1,224,128a96,96,0,1,1-96-96q4.50554,0,8.90843.40785"
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
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="200"
      cy="56"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="186.14359"
      y1="48"
      x2="175.75129"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="186.14359"
      y1="64"
      x2="175.75129"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="200"
      y1="72"
      x2="200"
      y2="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="213.85641"
      y1="64"
      x2="224.24871"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="213.85641"
      y1="48"
      x2="224.24871"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M223.31831,116.5001A96.987,96.987,0,0,1,224,128a96,96,0,1,1-96-96q4.50554,0,8.90843.40785"
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
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="200"
      cy="56"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="186.14359"
      y1="48"
      x2="175.75129"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="186.14359"
      y1="64"
      x2="175.75129"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="72"
      x2="200"
      y2="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.85641"
      y1="64"
      x2="224.24871"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.85641"
      y1="48"
      x2="224.24871"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M223.31831,116.5001A96.987,96.987,0,0,1,224,128a96,96,0,1,1-96-96q4.50554,0,8.90843.40785"
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

const UserCircleGear = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

UserCircleGear.displayName = "UserCircleGear";

export default UserCircleGear;
