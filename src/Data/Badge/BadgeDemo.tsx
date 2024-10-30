import { Badge } from '@/components/Badge';
import React from 'react';

const BadgeDemo = () => {
  const avatarUrl =
    'https://th.bing.com/th/id/R.4a08325e6294c2d5de937e4d9973f3c6' +
    '?rik=E6aPsseExezN%2bw&pid=ImgRaw&r=0';

  const colors: Array<
    'white' | 'dark' | 'green' | 'orange' | 'error' | 'success'
  > = ['white', 'dark', 'green', 'orange', 'error', 'success'];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10rem 0',
        gap: '1rem',
      }}
    >
      {/* Group 1 */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        <Badge
          $avatar={avatarUrl}
          $showArrowButton
          $showCloseButton
          $showDot
          $icon="home"
          $size="large"
          $placeholder="Badge-lg"
        />
        <Badge
          $avatar={avatarUrl}
          $showArrowButton
          $showCloseButton
          $showDot
          $icon="home"
          $placeholder="Badge"
        />
        <Badge
          $avatar={avatarUrl}
          $showArrowButton
          $showCloseButton
          $showDot
          $icon="home"
          $size="small"
          $placeholder="Badge-sm"
        />
      </div>

      {/* Group 2 - Plain Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        <Badge
          $showArrowButton
          $showCloseButton
          $showDot
          $icon="home"
          $size="large"
          $placeholder="Badge-lg"
        />
        <Badge
          $showArrowButton
          $showCloseButton
          $showDot
          $icon="home"
          $placeholder="Badge"
        />
        <Badge
          $showArrowButton
          $showCloseButton
          $showDot
          $icon="home"
          $size="small"
          $placeholder="Badge-sm"
        />
      </div>

      {/* Group 3 - Pilled Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        <Badge $shape="pilled" $size="large" $placeholder="Badge-lg" />
        <Badge $shape="pilled" $placeholder="Badge" />
        <Badge $shape="pilled" $size="small" $placeholder="Badge-sm" />
      </div>

      {/* Group 4 - Outlined Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $size="large"
            $placeholder="Badge-lg"
            $type="outlined"
            $color={color}
          />
        ))}
      </div>

      {/* Group 5 - Medium Outlined Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $placeholder="Badge"
            $type="outlined"
            $color={color}
          />
        ))}
      </div>

      {/* Group 6 - Small Outlined Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $size="small"
            $placeholder="Badge-sm"
            $type="outlined"
            $color={color}
          />
        ))}
      </div>

      {/* Group 7 - Large Pilled Outlined Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $size="large"
            $placeholder="Badge-lg"
            $type="outlined"
            $shape="pilled"
            $color={color}
          />
        ))}
      </div>

      {/* Group 8 - Medium Pilled Outlined Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $placeholder="Badge"
            $type="outlined"
            $shape="pilled"
            $color={color}
          />
        ))}
      </div>

      {/* Group 9 - Small Pilled Outlined Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $size="small"
            $placeholder="Badge-sm"
            $type="outlined"
            $shape="pilled"
            $color={color}
          />
        ))}
      </div>

      {/* Group 10 - Large Solid Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $size="large"
            $placeholder="Badge-lg"
            $type="solid"
            $color={color}
          />
        ))}
      </div>

      {/* Group 11 - Medium Solid Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $placeholder="Badge"
            $type="solid"
            $color={color}
          />
        ))}
      </div>

      {/* Group 12 - Small Solid Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $size="small"
            $placeholder="Badge-sm"
            $type="solid"
            $color={color}
          />
        ))}
      </div>

      {/* Group 13 - Large Solid Pilled Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $size="large"
            $placeholder="Badge-lg"
            $type="solid"
            $color={color}
            $shape="pilled"
          />
        ))}
      </div>

      {/* Group 14 - Medium Solid Pilled Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $placeholder="Badge"
            $type="solid"
            $color={color}
            $shape="pilled"
          />
        ))}
      </div>

      {/* Group 15 - Small Solid Pilled Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {colors.map((color) => (
          <Badge
            key={color}
            $showArrowButton
            $showCloseButton
            $showDot
            $icon="home"
            $size="small"
            $placeholder="Badge-sm"
            $type="solid"
            $color={color}
            $shape="pilled"
          />
        ))}
      </div>

      {/* Group 16 - Count Badges */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
        {['+5', '+20', '+100'].map((count) => (
          <Badge
            key={count}
            $size="small"
            $placeholder={count}
            $type="solid"
            $color="error"
            $shape="pilled"
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeDemo;
