import { createFileRoute, redirect } from "@tanstack/react-router";
import { defaultLang } from "../lib/translations";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({
      to: "/$lang",
      params: { lang: defaultLang },
    });
  },
});
