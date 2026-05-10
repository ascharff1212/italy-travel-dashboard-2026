# Publishing the Travel Dashboard

This folder has two helper buttons:

- `Publish Dashboard Now.bat` publishes the latest dashboard to GitHub Pages one time.
- `Start Auto Publish.bat` watches this folder and publishes automatically after files change.

## One-time setup

1. Install GitHub Desktop from https://desktop.github.com/.
2. Open GitHub Desktop.
3. Sign in as `ascharff1212`.
4. Accept the default Git configuration if GitHub Desktop asks.
5. Create a fine-grained GitHub token and run `Set GitHub Publishing Token.bat`.

After that setup is complete, use `Publish Dashboard Now.bat` to test publishing.

## Token setup if needed

Use this only if normal GitHub Desktop sign-in is not enough.

1. Go to https://github.com/settings/personal-access-tokens/new.
2. Token name: `Travel Dashboard Publisher`.
3. Expiration: choose a short period such as 90 days, or through the end of the trip.
4. Repository access: select only `italy-travel-dashboard-2026`.
5. Repository permissions: set `Contents` to `Read and write`.
6. Generate the token and copy it.
7. Double-click `Set GitHub Publishing Token.bat`.
8. Paste the token into the window. It will not show on screen.

## Daily use

If you want Codex to publish changes when work is finished, run:

`Publish Dashboard Now.bat`

If you want automatic publishing while Codex is working, run:

`Start Auto Publish.bat`

Leave the auto-publish window open. Close it when you want automatic publishing to stop.

## Public link

After publishing, wait 1-2 minutes and open:

https://ascharff1212.github.io/italy-travel-dashboard-2026/

## What this does

The publisher uses the GitHub API to upload the public dashboard files to the `main` branch of:

https://github.com/ascharff1212/italy-travel-dashboard-2026

It does not publish the `private` folder.
