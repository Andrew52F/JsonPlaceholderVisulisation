export interface UserInfoCardProps {
  path: string,
}
export interface CardSectionProps {
  title: string,
  options?: string[] | [string, string][],
  children?: React.ReactNode,
}
export interface YandexMapProps {
  geo: [number, number],
}
