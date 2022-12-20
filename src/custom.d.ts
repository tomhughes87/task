// declare module '*.svg' {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
//   }

  declare module "\*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }

  declare module "\*.png" {
    const content: string;
    export default content;
  }
  