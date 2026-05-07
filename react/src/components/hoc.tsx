import type { ComponentType, PropsWithChildren } from "react";

export default function Hoc(
  WrappedComponent: ComponentType<PropsWithChildren>,
) {
  return function EnhancedComponent(props: PropsWithChildren) {
    return <WrappedComponent {...props} />;
  };
}
