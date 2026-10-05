# NEXUS — Verifiable Interface Systems

Canonical source repository for the NEXUS website.

## Source / deployment boundary

- Canonical source: `Loofy147/NEXUS`
- Production surface: AppDeploy
- Current public URL: https://nexus-verifiable-interface-systems-3hokip.v2.appdeploy.ai/
- Imported from AppDeploy snapshot: `1791214799338`
- Imported source date: 2026-10-05
- Evidence status: USER_REPORTED + CONNECTED-TOOL VERIFIED

## Structure

Public routes:
- `/`
- `/method`
- `/systems`
- `/work`
- `/proof`
- `/about`
- `/contact`

The Contact surface generates a structured inquiry brief locally; it does not claim server-side submission.

## Verification boundary

A successful AppDeploy deployment is not treated as proof of full production completeness. The remaining frontier is tracked in:

- `Loofy147/Portfolio-Repository-Inventory#13`

Next verification layers: repository/commit-to-deployment traceability, external CI regression, independent accessibility audit, repeatable performance measurement, privacy-bounded observability, and release/rollback records.

CI verification pass: the build workflow is intentionally using `npm install` until a generated lockfile is established.
