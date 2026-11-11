import Image from "next/image";
import type { Solution } from "../../lib/solutions";
import x from "./solutions.module.css";

/**
 * A product's logo. Until a real logo is supplied (`logo` in lib/solutions.ts),
 * shows a lettermark tile in the brand gradient.
 */
export default function ProductMark({ sol, size = 44 }: { sol: Pick<Solution, "name" | "mark" | "logo" | "group">; size?: number }) {
  if (sol.logo) {
    return (
      <span className={x.markLogo} style={{ width: size, height: size }}>
        <Image src={sol.logo} alt={`${sol.name} logo`} width={size} height={size} />
      </span>
    );
  }
  return (
    <span
      className={`${x.mark} ${sol.group === "workbase" ? x.markWb : ""}`}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
      role="img"
      aria-label={`${sol.name} logo`}
    >
      {sol.mark}
    </span>
  );
}
