import type { tags } from "@/library/constants";

export type Tag = (typeof tags)[keyof typeof tags];
