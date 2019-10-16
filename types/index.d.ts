declare module 'storybook-addon-linguijs' {
  type Config = {
    locales: string[]
    defaultLocale: string
    catalogs: object
  }

  export type Renderable = React.ComponentType | JSX.Element
  export type RenderFunction = () => Renderable | Renderable[]

  export function setLinguiConfig(config: Config): void
  export function withLingui(story: RenderFunction): React.FunctionComponent
}
