export type GreetingStyle = "casual";

/** Leading word of the greeting. */
export const GREETING_PREFIX = "Hello";

/**
 * Build the greeting for `name`.
 *
 * `style` is reserved for additional greeting variants; only `"casual"` exists today.
 */
export function greet(name: string, style: GreetingStyle = "casual"): string {
  return `${GREETING_PREFIX}, ${name}!`;
}
