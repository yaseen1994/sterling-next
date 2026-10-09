import type { NextConfig } from "next";

const config: NextConfig = {
  // Preserve the repository's existing owner-authored AGENTS.md.
  agentRules: false,
  // Preserve incoming reference URL shapes; do not add automatic slash redirects.
  skipTrailingSlashRedirect: true,
};

export default config;
