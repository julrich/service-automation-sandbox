# service-automation-sandbox

Throwaway fixture repo used to verify the local issue-automation pipeline. It is a
single TypeScript package with a `typecheck` script, deliberately small so a full
`triage -> run` cycle stays quick.

The remaining open issues are real, unsatisfied requests against `main`:

- #1 — the casual greeting is lower-cased (`GREETING_PREFIX = "hello"`).
- #3 — add a greeting test helper plus the `GREETING_STYLES` export it needs.

Issues #2 and #3 both edit `src/greeting.ts`, which is what makes a batch of the two
exercise the conflict path.
