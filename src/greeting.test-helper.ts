import { GREETING_STYLES, greet, type GreetingStyle } from "./greeting.js";

/** Assert that `greet(name, style)` equals `expected`. */
export function expectGreeting(name: string, style: GreetingStyle, expected: string): void {
  for (const supported of GREETING_STYLES) {
    if (supported !== style) continue;
    expectEqual(greet(name, style), expected, `${style} greeting for ${name}`);
    return;
  }
  throw new Error(
    `Unsupported greeting style "${style}". GREETING_STYLES: ${GREETING_STYLES.join(", ")}`,
  );
}

/** Minimal assertion helper: this fixture has no test runner on purpose. */
export function expectEqual(actual: unknown, expected: unknown, label: string): void {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${String(expected)}, got ${String(actual)}`);
  }
}
