import { MitosisComponent } from '@builder.io/mitosis';

export {};

declare global {
  type SveltosisComponent = MitosisComponent & { props: any };
}
