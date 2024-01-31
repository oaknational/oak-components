import type { ComponentPropsWithoutRef, ElementType } from "react";

type ElementProp<C extends ElementType> = {
  element?: C;
};

export type PolymorphicPropsWithoutRef<C extends ElementType> = ElementProp<C> &
  ComponentPropsWithoutRef<C>;
