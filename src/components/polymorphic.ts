import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from "react";

type ElementProp<C extends ElementType> = {
  element?: C;
};

export type PolymorphicPropsWithoutRef<C extends ElementType> = ElementProp<C> &
  ComponentPropsWithoutRef<C>;

export type PolymorphicRef<C extends React.ElementType> =
  ComponentPropsWithRef<C>["ref"];

export type PolymorphicPropsWithRef<C extends ElementType> = ElementProp<C> &
  ComponentPropsWithoutRef<C> & { ref?: PolymorphicRef<C> };
