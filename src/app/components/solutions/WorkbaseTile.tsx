import ProductMark from "./ProductMark";
import type { Solution } from "../../lib/solutions";
import x from "./solutions.module.css";

/** Card artwork for a product without a photo: the brand stage with its mark in the middle. */
export default function WorkbaseTile({ sol }: { sol: Solution }) {
  const Icon = sol.icon;
  return (
    <span className={x.tile} aria-hidden>
      <Icon size={130} strokeWidth={1} className={x.tileIcon} />
      <span className={x.tileInner}>
        <ProductMark sol={sol} size={64} />
        <span className={x.tileName}>{sol.name}</span>
      </span>
    </span>
  );
}
