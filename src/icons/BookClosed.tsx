import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "thin":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M2.7496,3.4998 C2.7496,2.53372881 3.53352881,1.7498 4.4996,1.7498 L4.4996,1.7498 L12.9996,1.7498 C13.1376712,1.7498 13.2496,1.86172881 13.2496,1.9998 L13.2496,1.9998 L13.2496,12.4998 C13.2496,12.6378712 13.1376712,12.7498 12.9996,12.7498 L12.9996,12.7498 L4.4996,12.7498 C3.80967119,12.7498 3.2496,13.3098712 3.2496,13.9998 L3.2496,13.9998 L3.249,14.249 L11.9996,14.2498 C12.1179467,14.2498 12.2170868,14.3320334 12.2429973,14.4424773 L12.2496,14.4998 C12.2496,14.6181467 12.1673666,14.7172868 12.0569227,14.7431973 L11.9996,14.7498 L2.9996,14.7498 C2.88125327,14.7498 2.78211318,14.6675666 2.75620268,14.5571227 L2.7496,14.4998 Z M12.749,2.249 L4.4996,2.2498 C3.80967119,2.2498 3.2496,2.80987119 3.2496,3.4998 L3.2496,3.4998 L3.249,12.776 L3.37370139,12.6603154 C3.64378224,12.4330284 3.98350432,12.2858791 4.35613061,12.2556042 L4.35613061,12.2556042 L4.4996,12.2498 L12.749,12.249 L12.749,2.249 Z"
          />
        </g>
      );
    case "light":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M2.6246,3.4998 C2.6246,2.46469322 3.46449322,1.6248 4.4996,1.6248 L4.4996,1.6248 L12.9996,1.6248 C13.2067068,1.6248 13.3746,1.79269322 13.3746,1.9998 L13.3746,1.9998 L13.3746,12.4998 C13.3746,12.7069068 13.2067068,12.8748 12.9996,12.8748 L12.9996,12.8748 L4.4996,12.8748 C3.87870678,12.8748 3.3746,13.3789068 3.3746,13.9998 L3.3746,13.9998 L3.374,14.124 L11.9996,14.1248 C12.1808184,14.1248 12.332014,14.2533432 12.3669813,14.4242244 L12.3746,14.4998 C12.3746,14.6810184 12.2460568,14.832214 12.0751756,14.8671813 L11.9996,14.8748 L2.9996,14.8748 C2.81838157,14.8748 2.66718602,14.7462568 2.63221867,14.5753756 L2.6246,14.4998 Z M12.624,2.374 L4.4996,2.3748 C3.87870678,2.3748 3.3746,2.87890678 3.3746,3.4998 L3.3746,3.4998 L3.374,12.501 L3.43725327,12.4548263 C3.70152449,12.2727064 4.01477415,12.1566199 4.3531252,12.1304439 L4.3531252,12.1304439 L4.4996,12.1248 L12.624,12.124 L12.624,2.374 Z"
          />
        </g>
      );
    case "regular":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M2.5,3.5 C2.5,2.39556369 3.39515137,1.5 4.5,1.5 L4.5,1.5 L13,1.5 C13.2761424,1.5 13.5,1.72385763 13.5,2 L13.5,2 L13.5,12.5 C13.5,12.7761424 13.2761424,13 13,13 L13,13 L4.5,13 C3.94753924,13 3.5,13.4477454 3.5,14 L3.5,14 L12,14 C12.2454599,14 12.4496084,14.1768752 12.4919443,14.4101244 L12.5,14.5 C12.5,14.7454599 12.3231248,14.9496084 12.0898756,14.9919443 L12,15 L3,15 C2.75454011,15 2.55039163,14.8231248 2.50805567,14.5898756 L2.5,14.5 Z M12.5,2.5 L4.5,2.5 C3.94753924,2.5 3.5,2.94774538 3.5,3.5 L3.5,3.5 L3.5,12.268 L3.53114108,12.2498796 C3.77714375,12.1134113 4.05496597,12.0273036 4.35070297,12.0054865 L4.35070297,12.0054865 L4.5,12 L12.5,12 L12.5,2.5 Z"
          />
        </g>
      );
    case "bold":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            fillRule="nonzero"
            d="M2.2496,3.4998 C2.2496,2.25758644 3.25738644,1.2498 4.4996,1.2498 L4.4996,1.2498 L12.9996,1.2498 C13.4138136,1.2498 13.7496,1.58558644 13.7496,1.9998 L13.7496,1.9998 L13.7496,12.4998 C13.7496,12.9140136 13.4138136,13.2498 12.9996,13.2498 L12.9996,13.2498 L4.4996,13.2498 C4.1738931,13.2498 3.89624925,13.4581131 3.79280732,13.7486005 L11.9996,13.7498 C12.3792958,13.7498 12.693091,14.0319539 12.7427534,14.3980294 L12.7496,14.4998 C12.7496,14.8794958 12.4674461,15.193291 12.1013706,15.2429534 L11.9996,15.2498 L2.9996,15.2498 C2.61990423,15.2498 2.30610904,14.9676461 2.25644662,14.6015706 L2.2496,14.4998 Z M12.249,2.749 L4.4996,2.7498 C4.08581356,2.7498 3.7496,3.08601356 3.7496,3.4998 L3.7496,3.4998 L3.749,11.878 L3.94942524,11.8176106 C4.07748435,11.7854013 4.2098963,11.7641751 4.34560022,11.7549929 L4.34560022,11.7549929 L4.4996,11.7498 L12.249,11.749 L12.249,2.749 Z"
          />
        </g>
      );
    case "fill":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M12.9996,1.4998 L4.4996,1.4998 C3.3966,1.4998 2.4996,2.3968 2.4996,3.4998 L2.4996,13.9998 L2.4996,14.4998 C2.4996,14.7758 2.7236,14.9998 2.9996,14.9998 L11.9996,14.9998 C12.2756,14.9998 12.4996,14.7758 12.4996,14.4998 C12.4996,14.2238 12.2756,13.9998 11.9996,13.9998 L3.4996,13.9998 C3.4996,13.4488 3.9476,12.9998 4.4996,12.9998 L12.9996,12.9998 C13.2756,12.9998 13.4996,12.7758 13.4996,12.4998 L13.4996,1.9998 C13.4996,1.7238 13.2756,1.4998 12.9996,1.4998"
          />
        </g>
      );
    case "duotone":
      return (
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <polygon points="0 16 16 16 16 0 0 0" />
          <path
            fill={color}
            d="M2.9996,13.9998 C2.9996,13.1718 3.6716,12.4998 4.4996,12.4998 L12.9996,12.4998 L12.9996,1.9998 L4.4996,1.9998 C3.6716,1.9998 2.9996,2.6718 2.9996,3.4998 L2.9996,13.9998 Z"
            opacity=".2"
          />
          <path
            fill={color}
            fillRule="nonzero"
            d="M2.4996,3.4998 C2.4996,2.39565763 3.39545763,1.4998 4.4996,1.4998 L4.4996,1.4998 L12.9996,1.4998 C13.2757424,1.4998 13.4996,1.72365763 13.4996,1.9998 L13.4996,1.9998 L13.4996,12.4998 C13.4996,12.7759424 13.2757424,12.9998 12.9996,12.9998 L12.9996,12.9998 L4.4996,12.9998 C3.94774237,12.9998 3.4996,13.4479424 3.4996,13.9998 L3.4996,13.9988 L11.9996,13.9998 C12.2450599,13.9998 12.4492084,14.1766752 12.4915443,14.4099244 L12.4996,14.4998 C12.4996,14.7452599 12.3227248,14.9494084 12.0894756,14.9917443 L11.9996,14.9998 L2.9996,14.9998 C2.75414011,14.9998 2.54999163,14.8229248 2.50765567,14.5896756 L2.4996,14.4998 Z M12.499,2.499 L4.4996,2.4998 C3.94774237,2.4998 3.4996,2.94794237 3.4996,3.4998 L3.4996,3.4998 L3.499,12.268 L3.53105448,12.2497405 C3.77705117,12.1132455 4.05481251,12.0271122 4.35039072,12.0052883 L4.35039072,12.0052883 L4.4996,11.9998 L12.499,11.999 L12.499,2.499 Z"
          />
        </g>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BookClosed = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      viewBox="0 0 16 16"
      fill="none"
      stroke={color ?? contextColor}
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

BookClosed.displayName = "BookClosed";

export default BookClosed;
