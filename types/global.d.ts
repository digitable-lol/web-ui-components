declare module '*.scss' {
  const content: { [key: string]: string }

  export default content
}

declare module '*.svg' {
  const content: string
  export const ReactComponent: React.ComponentType<React.SVGAttributes<SVGAElement>>

  export default content
}
