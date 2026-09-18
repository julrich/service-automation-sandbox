export type GreetingStyle = "casual";

/** Leading word of the greeting. */
export const GREETING_PREFIX = "Hello";

/** Greeting styles supported by {@link greet}. */
export const GREETING_STYLES: GreetingStyle[] = ["casual"];

/** Separator between {@link GREETING_PREFIX} and the greeted name. */
export const GREETING_DELIMITER = ", ";

/** Trailing punctuation of the greeting. */
export const GREETING_TERMINATOR = "!";

/**
 * Build the greeting for `name`.
 *
 * `style` is reserved for additional greeting variants; only `"casual"` exists today.
 */
export function greet(name: string, style: GreetingStyle = "casual"): string {
  return `${GREETING_PREFIX}${GREETING_DELIMITER}${name}${GREETING_TERMINATOR}`;
}
