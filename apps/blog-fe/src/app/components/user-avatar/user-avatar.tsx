import { Avatar } from '@nextui-org/react';
import styles from './user-avatar.module.css';

/* eslint-disable-next-line */
export interface UserAvatarProps {
  size?: 'md' | 'sm' | 'lg';
}

export function UserAvatar({ size = 'md' }: UserAvatarProps) {
  return (
    <div className={styles['container']}>
      <Avatar
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        size={size}
      />
    </div>
  );
}

export default UserAvatar;
