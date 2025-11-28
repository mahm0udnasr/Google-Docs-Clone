import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://divine-cub-19.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
