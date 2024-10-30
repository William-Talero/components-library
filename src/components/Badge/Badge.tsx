import { TextSmSemiBold } from '@/index';
import '@/styles.scss';
import React, { useState } from 'react';
import Icon from '../Icon/Icons';
import { sizeAvatar, sizeCloseIcon, sizeIcon } from './Badge.types';
import { BadgeProps } from './IBadge';

/**
 * Badge component to display a labeled badge with customizable properties
 * such as avatar, icon, background color, shape, and additional buttons
 * like arrow and close.
 *
 * @param {Object} props - Properties passed to configure the badge.
 * @param {'white' | 'outlined' | 'solid' | 'green'} props.$type - Type of
 *    badge style.
 *    - 'white': Plain white background.
 *    - 'outlined': Badge with outlined border.
 *    - 'solid': Solid background color.
 *    - 'green': Specific green style.
 * @param {'large' | 'default' | 'small'} props.$size - Size of the badge.
 *    - 'large': Larger size badge.
 *    - 'default': Default badge size.
 *    - 'small': Smaller size badge.
 * @param {'white' | 'dark' | 'green' | 'orange'
 *    | 'error' | 'success'} props.$color - Color variant of the badge.
 *    - Variants include white, dark, green, orange,
 *      error, and success colors.
 * @param {'rounded' | 'pilled'} props.$shape - Shape of the badge.
 *    - 'rounded': Badge with rounded corners.
 *    - 'pilled': Badge with pill shape (fully rounded).
 * @param {string} [props.$avatar] - URL for an avatar image to display
 *    on the badge.
 * @param {string} [props.$icon] - Name of the icon to display inside
 *    the badge.
 * @param {boolean} [props.$showDot=false] - Whether to show a small dot
 *    on the badge.
 * @param {string} [props.$placeholder] - Placeholder text or main label
 *    for the badge.
 * @param {boolean} [props.$showArrowButton=false] - Whether to show an
 *    arrow button on the badge.
 * @param {Function} [props.$onClickArrow] - Callback function executed
 *    when the arrow button is clicked.
 * @param {boolean} [props.$showCloseButton=false] - Whether to show a
 *    close button on the badge.
 * @param {Function} [props.$onClose] - Callback function executed when
 *    the close button is clicked.
 *
 * @returns {JSX.Element | null} JSX element representing the badge component.
 */
export const Badge: React.FC<BadgeProps> = ({
  $type = 'white',
  $size = 'default',
  $color = 'white',
  $shape = 'rounded',
  $avatar,
  $icon,
  $showDot = false,
  $placeholder,
  $showArrowButton = false,
  $onClickArrow,
  $showCloseButton = false,
  $onClose,
}) => {
  const [showBadge, setShowBadge] = useState(true);

  const badgeClasses = `tvr-cmp-badge ${
    $type === 'white' ? 'white' : `${$type}-${$color}`
  } ${$size} ${$shape}  ${$onClickArrow ? 'pointer' : ''}`;

  const handleClick = () => {
    if ($onClickArrow) {
      $onClickArrow();
    }
  };
  const handleCloseButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setShowBadge(false);
    if ($onClose) {
      $onClose();
    }
  };

  return (
    showBadge && (
      <div className={badgeClasses} onClick={handleClick}>
        {$avatar && (
          <img
            src={$avatar}
            alt="Avatar"
            style={{ width: sizeAvatar[$size], height: sizeAvatar[$size] }}
            className="tvr-cmp-badge-avatar"
          />
        )}
        {$icon && (
          <Icon
            $w={sizeIcon[$size]}
            $h={sizeIcon[$size]}
            $name={$icon}
            className="tvr-cmp-badge-icon"
          />
        )}
        <div className={`tvr-cmp-badge-placeholder-container ${$size}`}>
          {$showDot && <div className="tvr-cmp-badge-dot" />}
          <TextSmSemiBold className="tvr-cmp-badge-placeholder">
            {$placeholder}
          </TextSmSemiBold>
        </div>
        {$showArrowButton && (
          <button className="tvr-cmp-badge-arrow">
            <Icon
              $w={sizeIcon[$size]}
              $h={sizeIcon[$size]}
              $name={'rightArrow'}
            />
          </button>
        )}
        {$showCloseButton && (
          <button
            className={`tvr-cmp-badge-close ${$size}`}
            onClick={handleCloseButton}
          >
            <Icon
              $w={sizeCloseIcon[$size]}
              $h={sizeCloseIcon[$size]}
              $name="closeIcon"
            />
          </button>
        )}
      </div>
    )
  );
};
