import path from "path";
import fs from "fs";

let config;

export default function sveltosis() {
  return {
    name: "vite-plugin-sveltosis",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle() {
      // call mitosis cli with the right params + custom parser.?s
    },
  };
}
