export * from './PostsList';
export * from './UserInfoCard';
export * from './Header';

export interface MessageProps {
  title: string,
  message?: string,
}
export interface UserImageProps {
  imageLink?: string,
  options?: object
}
