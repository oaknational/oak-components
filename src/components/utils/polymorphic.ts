import type { ComponentPropsWithoutRef, ElementType } from "react";

export type PolymorphicPropsWithoutRef<C extends ElementType> = {
  as?: C;
} & ComponentPropsWithoutRef<C>;
