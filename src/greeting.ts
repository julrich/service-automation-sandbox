export type GreetingStyle = "casual" | "formal";

/** Leading word of a casual greeting. */
export const GREETING_PREFIX = "hello";

/**
 * Build the greeting for `name`.
 *
 * `"casual"` is the default; `"formal"` selects the formal wording.
 */
export function greet(name: string, style: GreetingStyle = "casual"): string {
  if (style === "formal") {
    return `Good day, ${name}.`;
  }

  return `${GREETING_PREFIX}, ${name}!`;
}
