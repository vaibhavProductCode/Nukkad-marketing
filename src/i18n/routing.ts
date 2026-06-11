import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hi", "mr", "bn", "ta"],
  defaultLocale: "en",
  localePrefix: "always",
});
