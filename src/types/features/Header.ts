export interface UserInfoSmallProps {
  imageLink: string,
  fullName: string,
  email: string,
}
export type Navigation = {
  text: string,
  to: string
};
export interface SideBarProps {
  show: boolean,
  onHide: () => void,
  navs: Navigation[],
}
