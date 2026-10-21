# devscot-management

A Next.js app where staff sign in with Google, backed by MongoDB, with an admin area and attendance views.

**Status:** In progress. Google sign-in, the MongoDB models and the user and admin pages are in place, but the middleware that protects the dashboard is commented out.

## The problem

The code is for staff accounts and attendance management. Staff sign in with their Google account, and admins can look at individual users. The data model covers attendance check-ins and check-outs, and a messages collection.

## What it does

- **Google sign-in.** `actions/auth.js` has `registerWithGoogle` and `loginWithGoogle` server actions. They decode the Google credential with `jwt-decode` and create or find a user by Google subject.
- **Staff dashboard.** A dashboard under `app/(user)/dashboard`.
- **Admin area.** `app/admin` with a per-user page at `app/admin/[user]`.
- **Account pages.** Routes for invite, create password, forgot password and change password (`app/invite`, `app/create_password`, `app/forgot_password`, `app/change_password`).
- **Data models.** Mongoose models for users, attendance and messages in `models/`.

## How it's built

- Next.js App Router in JavaScript, with `@react-oauth/google` on the client.
- Mongoose models in `models/`, with a connection helper in `lib/dbConnect.js`.
- A session cookie named `token` is set from a server action (`cookies()` from `next/headers`).
- `middleware.js` is meant to redirect unauthenticated requests away from `/dashboard/*`.

## Running it locally

Uses pnpm (there is a `pnpm-lock.yaml`).

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## What's left

- The redirect in `middleware.js` is commented out, so `/dashboard` is not protected. The middleware also logs the token cookie to the console.
- The MongoDB URI check in `lib/dbConnect.js` is commented out.
- Several pages were left from the `create-next-app` template.
- No automated tests.
