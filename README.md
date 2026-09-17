# service-automation-sandbox

Throwaway TypeScript fixture for verifying the `service-automation` orchestrator end to end: a
single dependency-free greeting module (`src/greeting.ts`), a barrel (`src/index.ts`) and a tiny
assertion helper (`src/greeting.test-helper.ts`), checked with `pnpm run typecheck`. Issues #1,
#2 and #3 are deliberately small and are meant to be run as a batch: #1 is a one-word case bug in
the casual greeting, while #2 and #3 both touch `src/greeting.ts`, so their branches conflict on
rebase and the orchestrator's conflict resolution is exercised for real.
