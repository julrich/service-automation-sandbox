import { GREETING_STYLES, greet, type GreetingStyle } from "./greeting.js";

/** Minimal assertion helper: this fixture has no test runner on purpose. */
export function expectEqual(actual: unknown, expected: unknown, label: string): void {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${String(expected)}, got ${String(actual)}`);
  }
}

/**
 * Assert that `greet(name, style)` returns `expected`.
 *
 * Throws when `style` is not listed in `GREETING_STYLES`.
 */
export function expectGreeting(name: string, style: GreetingStyle, expected: string): void {
  for (const supported of GREETING_STYLES) {
    if (supported === style) {
      expectEqual(greet(name, style), expected, `greet(${name}, ${style})`);
      return;
    }
  }
  throw new Error(`unsupported greeting style: ${style}`);
}
