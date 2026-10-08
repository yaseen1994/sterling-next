import type { NextConfig } from "next";

const config: NextConfig = {
  // Preserve the repository's existing owner-authored AGENTS.md.
  agentRules: false,
};

export default config;
