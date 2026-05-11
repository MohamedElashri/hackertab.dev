# DevTab

A **personal, privacy-focused** developer news new tab page for Firefox. It shows developer news from GitHub, Hacker News, Lobsters, and Reddit — with no tracking, no ads, and no external backend.

## What it is

DevTab is a fork of [Hackertab.dev](https://github.com/medyo/hackertab.dev) stripped down to the essentials:

- **No ads or telemetry**: Removed Amplitude, Sentry, Firebase, ad banners, and donation prompts.
- **No external news backend**: Fetches directly from the original APIs:
  - GitHub Search API
  - Hacker News Firebase API
  - Lobsters public JSON endpoint
  - Reddit public JSON endpoint
- **Only 4 sources**: GitHub, Hacker News, Lobsters, Reddit. Everything else removed.
- **No referral tracking**: Removed `ref=hackertab.dev` query parameters.
- **Firefox-only**: Tailored for Firefox MV3. Chrome support removed.
- **No authentication**: OAuth and user accounts disabled.
- **Static config**: Tag list bundled locally; works offline after install.

## Build

Uses `npm` and targets Node 18.

```bash
npm install
make package
```

The built extension is packaged as `firefox_extension.zip`.

## Development

```bash
make dev
```

## Data sources

- [GitHub Trending](https://github.com/trending) (via Search API)
- [Hacker News](https://news.ycombinator.com)
- [Lobsters](https://lobste.rs)
- [Reddit](https://reddit.com)

## License

Apache 2.0 — See [LICENSE](/LICENSE).
