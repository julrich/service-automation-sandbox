export type GreetingStyle = "casual" | "formal";

/** Leading word of a casual greeting. */
export const GREETING_PREFIX = "hello";

/** Every greeting style `greet` supports. */
export const GREETING_STYLES: GreetingStyle[] = ["casual"];

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
