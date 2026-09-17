# service-automation-sandbox

Throwaway fixture repo used to verify the local issue-automation pipeline. It is a
single TypeScript package with a `typecheck` script, deliberately small so a full
`triage -> run` cycle stays quick.

The open issues are real, unsatisfied requests against `main`:

- #2 — add a formal greeting variant (`GreetingStyle` only knows `"casual"` today).
- #3 — add a greeting test helper plus the `GREETING_STYLES` export it needs.

Issues #2 and #3 both edit `src/greeting.ts`, which is what makes a batch of the two
exercise the conflict path.
