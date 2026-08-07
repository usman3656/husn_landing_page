// /home — a preserved, fully-working copy of the current homepage.
//
// Both "/" (app/page.tsx) and "/home" render the same component
// (app/final/page.tsx) today, so the two URLs are identical. This exists so the
// current site is preserved at /home when the main husn.io URL is later rebuilt:
// at that point only app/page.tsx is repointed at the new homepage, and /home
// keeps showing today's site untouched. Do not edit app/final/page.tsx for the
// future new-main work — create a new component instead, or /home changes too.
export { default } from "../final/page";
