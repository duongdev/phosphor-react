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
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="176"
      y1="20"
      x2="176"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="80"
      y1="20"
      x2="80"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="40"
      y1="88"
      x2="216"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M88,127.99666h28l-16,20a16,16,0,1,1-11.30681,27.3206"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="148 139.997 164 127.997 164 179.997"
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
    <path d="M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z" opacity="0.2" />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="176"
      y1="24"
      x2="176"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="80"
      y1="24"
      x2="80"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="88"
      x2="216"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92,127.99666h28l-16,20a16,16,0,1,1-11.30681,27.3206"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144 139.997 160 127.997 160 179.997"
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
    <path d="M207.99414,31.99707h-24v-8a8,8,0,0,0-16,0v8h-80v-8a8,8,0,1,0-16,0v8h-24a16.01583,16.01583,0,0,0-16,16v160a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16v-160A16.01582,16.01582,0,0,0,207.99414,31.99707ZM104,187.99707a23.84464,23.84464,0,0,1-16.96045-7.01953,8,8,0,0,1,11.30713-11.32031A7.99993,7.99993,0,1,0,104,155.99707h-.00488c-.249,0-.49805-.01465-.74658-.03809-.07959-.00732-.15723-.01953-.23584-.029-.16651-.02075-.33252-.04492-.498-.07593-.09229-.01757-.1836-.03711-.2749-.05761-.15039-.03369-.3003-.07276-.44922-.11548-.09082-.02612-.18164-.05152-.271-.08081-.15039-.04907-.29932-.10523-.44726-.16358-.08057-.03173-.16211-.06054-.24122-.09472-.17236-.07447-.34179-.15845-.51074-.24585-.04883-.02564-.1001-.04712-.14843-.07349q-.31641-.17322-.6211-.37744c-.06836-.0459-.13183-.09741-.19873-.14526-.11719-.08374-.23584-.16455-.34961-.25562-.01465-.01172-.02734-.02515-.042-.03711-.12061-.09814-.23389-.2041-.34863-.30908-.0835-.07617-.17139-.14917-.251-.22827-.07715-.07666-.147-.15991-.22119-.23975a8.03993,8.03993,0,0,1-1.95069-3.71777c-.00537-.02539-.01416-.05-.01953-.07544-.02783-.13477-.04443-.27344-.06543-.41065-.019-.12426-.04345-.24755-.05664-.37255-.01123-.10279-.01269-.208-.02-.312-.01123-.16381-.02343-.32739-.02441-.4917C96.00244,148.032,96,148.01489,96,147.99707c0-.083.00977-.16357.0127-.24609.00488-.16577.00976-.3313.0249-.49683.01025-.11182.02783-.221.043-.3313.02-.14892.03955-.29761.06787-.44556.023-.11889.05273-.23461.08056-.3518.03272-.13623.06495-.27246.105-.40772.03614-.12109.07862-.239.12012-.35766.04444-.12671.08789-.25366.13867-.37891.04981-.12231.10645-.24048.16211-.35986.05469-.1167.10742-.23364.168-.34863.06543-.12452.13867-.24439.21045-.365.062-.10375.12158-.20849.18848-.3103.085-.12817.17724-.25024.269-.37329.05566-.07446.10352-.1521.16211-.2251l5.602-7.00195H92a8,8,0,1,1,0-16h28a8.00023,8.00023,0,0,1,6.24707,12.998l-8.86914,11.08642A23.99341,23.99341,0,0,1,104,187.99707Zm64-8a8,8,0,0,1-16,0v-36l-3.2002,2.40039a8.00019,8.00019,0,0,1-9.5996-12.80078l16-12A8.00031,8.00031,0,0,1,168,127.99707Zm39.99414-100h-160v-32h24v8a8,8,0,0,0,16,0v-8h80v8a8,8,0,1,0,16,0v-8h24Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="176"
      y1="24"
      x2="176"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="80"
      y1="24"
      x2="80"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="88"
      x2="216"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M92,127.99666h28l-16,20a16,16,0,1,1-11.30681,27.3206"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="144 139.997 160 127.997 160 179.997"
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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="176"
      y1="24"
      x2="176"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="80"
      y1="24"
      x2="80"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="88"
      x2="216"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M92,127.99666h28l-16,20a16,16,0,1,1-11.30681,27.3206"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="144 139.997 160 127.997 160 179.997"
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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="176"
      y1="24"
      x2="176"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="80"
      y1="24"
      x2="80"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="88"
      x2="216"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92,127.99666h28l-16,20a16,16,0,1,1-11.30681,27.3206"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144 139.997 160 127.997 160 179.997"
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

const Calendar = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Calendar.displayName = "Calendar";

export default Calendar;
