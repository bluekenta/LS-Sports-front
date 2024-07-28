import useTheme from '@core/hooks/useTheme';
import classnames from 'classnames';
import styles from './style.scss';
import {useState} from 'react';

export interface SvgIconProps {
  width?: number;
  height?: number;
  fill?: string;
  bg?: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  active?: boolean;
  theme?: any;
}

function DpIcon(props: IDpIcon) {
  const {jsTheme} = useTheme();

  const getIcon = () => {
    switch (props.type) {
      case 'arrow':
        return <IconArrow {...props} theme={jsTheme} />;
      case 'arrowScroll':
        return <IconArrowScroll {...props} theme={jsTheme} />;
      case 'e_arrow':
        return <IconEArrow {...props} theme={jsTheme} />;
      case 'preArrow':
        return <IconPreArrow {...props} theme={jsTheme} />;
      case 'nextArrow':
        return <IconNextArrow {...props} theme={jsTheme} />;
      case 'arrowBack':
        return <IconArrowBack {...props} theme={jsTheme} />;
      case 'eye':
        return <IconEye {...props} theme={jsTheme} />;
      case 'closeEye':
        return <IconCloseEye {...props} theme={jsTheme} />;
      case 'expand':
        return <IconExpand {...props} theme={jsTheme} />;
      case 'reload':
        return <IconReload {...props} theme={jsTheme} />;
      case 'TV':
        return <IconTV {...props} theme={jsTheme} />;
      case 'score':
        return <IconScore {...props} theme={jsTheme} />;
      case 'video':
        return <IconLive {...props} theme={jsTheme} />;
      case 'animation':
        return <IconAnimate {...props} theme={jsTheme} />;
      case 'fullscreen':
        return <IconFullScreen {...props} theme={jsTheme} />;
      case 'collect':
        return <IconCollect {...props} theme={jsTheme} />;
      case 'collect2':
        return <IconCollect2 {...props} theme={jsTheme} />;
      case 'collectLight':
        return <IconCollectLight {...props} theme={jsTheme} />;
      case 'n':
        return <IconN {...props} theme={jsTheme} />;
      case 'chart':
        return <IconChart {...props} theme={jsTheme} />;
      case 'sun':
        return <IconSun {...props} theme={jsTheme} />;
      case 'moon':
        return <IconMoon {...props} theme={jsTheme} />;
      case 'league':
        return <IconLeague {...props} theme={jsTheme} />;
      case 'team':
        return <IconTeam {...props} theme={jsTheme} />;
      case 'close':
        return <IconClose {...props} theme={jsTheme} />;
      case 'goback':
        return <IconGoback {...props} theme={jsTheme} />;
      case 'clock':
        return <IconClock {...props} theme={jsTheme} />;
      case 'linkAdd':
        return <IconLinkAdd {...props} theme={jsTheme} />;
      case 'listAdd':
        return <IconListAdd {...props} theme={jsTheme} />;
      case 'paperClip':
        return <IconPaperClip {...props} theme={jsTheme} />;
      case 'right':
        return <IconRight {...props} theme={jsTheme} />;
      case 'calendar':
        return <IconCalendar {...props} theme={jsTheme} />;
      case 'search':
        return <IconSearch {...props} theme={jsTheme} />;
      case 'helper':
        return <IconHelper {...props} theme={jsTheme} />;
      case 'copy':
        return <IconCopy {...props} theme={jsTheme} />;
      case 'gameBriefView':
        return <IconGameBriefView {...props} theme={jsTheme} />;
      case 'gameDetailView':
        return <IconGameDetailView {...props} theme={jsTheme} />;
      case 'filterDescending':
        return <IconFilterDescending {...props} theme={jsTheme} />;
      case 'filterAscending':
        return <IconFilterAscending {...props} theme={jsTheme} />;
      case 'copy':
        return <IconCopy {...props} theme={jsTheme} />;
      case 'clear':
        return <IconClear {...props} theme={jsTheme} />;
      case 'confirmed':
        return <IconConfirmed {...props} theme={jsTheme} />;
      case 'videoPrev':
        return <IconVideoPrev {...props} theme={jsTheme} />;
      case 'videoNext':
        return <IconVideoNext {...props} theme={jsTheme} />;
      case 'videoPlay':
        return <IconVideoPlay {...props} theme={jsTheme} />;
      case 'add':
        return <IconAdd {...props} theme={jsTheme} />;
      case 'del':
        return <IconDel {...props} theme={jsTheme} />;
      case 'add2':
        return <IconAdd2 {...props} theme={jsTheme} />;
      case 'win':
        return <IconWin {...props} theme={jsTheme} />;
      case 'line':
        return <IconLine {...props} theme={jsTheme} />;
      case 'arrow2':
        return <IconArrow2 {...props} theme={jsTheme} />;
      case 'return':
        return <IconReturn {...props} theme={jsTheme} />;
      case 'all':
        return <IconAll {...props} theme={jsTheme} />;
      case 'toggle':
        return <IconToggle {...props} theme={jsTheme} />;
      case 'expand2':
        return <IconExpand2 {...props} theme={jsTheme} />;
      case 'expand2hover':
        return <IconExpand2Hover {...props} theme={jsTheme} />;
      case 'fullscreen2':
        return <IconFullScreen2 {...props} theme={jsTheme} />;
      case 'reload2':
        return <IconReload2 {...props} theme={jsTheme} />;
      case 'reload2hover':
        return <IconReload2Hover {...props} theme={jsTheme} />;
      case 'goback2':
        return <IconGoBack2 {...props} theme={jsTheme} />;
      case 'hexagon':
        return <IconHexagon {...props} theme={jsTheme} />;
      case 'leftcaret2':
        return <IconLeftCaret2 {...props} theme={jsTheme} />;
      case 'downcaret2':
        return <IconDownCaret2 {...props} theme={jsTheme} />;
      case 'lockcircle':
        return <IconLockCircle {...props} theme={jsTheme} />;
      default:
        return null;
    }
  };
  return (
    <div className={classnames(styles.dp_icon, props.className)} onClick={props.onClick}>
      {getIcon()}
    </div>
  );
}

export default DpIcon;

interface IDpIcon extends SvgIconProps {
  type:
    | 'win'
    | 'goback'
    | 'close'
    | 'arrow'
    | 'arrowScroll'
    | 'e_arrow'
    | 'arrow2'
    | 'closeEye'
    | 'reload'
    | 'expand'
    | 'TV'
    | 'score'
    | 'video'
    | 'animation'
    | 'fullscreen'
    | 'collect'
    | 'collect2'
    | 'collectLight'
    | 'n'
    | 'chart'
    | 'sun'
    | 'moon'
    | 'eye'
    | 'alert'
    | 'league'
    | 'team'
    | 'clock'
    | 'linkAdd'
    | 'listAdd'
    | 'paperClip'
    | 'preArrow'
    | 'nextArrow'
    | 'arrowBack'
    | 'right'
    | 'clear'
    | 'confirmed'
    | 'copy'
    | 'del'
    | 'add2'
    | 'add'
    | 'calendar'
    | 'search'
    | 'helper'
    | 'copy'
    | 'gameBriefView'
    | 'gameDetailView'
    | 'filterDescending'
    | 'filterAscending'
    | 'videoPrev'
    | 'videoNext'
    | 'videoPlay'
    | 'line'
    | 'return'
    | 'all'
    | 'toggle'
    | 'expand2'
    | 'expand2hover'
    | 'reload2'
    | 'reload2hover'
    | 'fullscreen2'
    | 'leftcaret2'
    | 'downcaret2'
    | 'lockcircle'
    | 'goback2'
    | 'hexagon'
}

export function IconArrow({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg className='icon-arrow' width={width} height={height} viewBox='0 0 16 16' fill='none'>
      <path
        d='M5 6.5L8 9.5L11 6.5'
        stroke={fill || (active && theme.dpTheme) || theme.dpAncillary}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function IconArrowScroll({width = 22, height = 22, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_342_7564)">
        <rect width="24" height="24" rx="4" fill="#292739"/>
        <path d="M11 15L14 12L11 9" stroke="#BECEEE" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_342_7564">
          <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconEArrow({width = 12, height = 12, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.08437 3.5L6 6.92707L2.91563 3.5H1.5L6 8.5L10.5 3.5H9.08437Z" fill="#BECEEE"/>
    </svg>
  );
}

export function IconPreArrow({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
      <rect width='14' height='14' rx='7' transform='matrix(-1 0 0 1 14 0)' fill={theme.dpForm2} />
      <path d='M8.5 4L5 7L8.5 10.5' stroke='#9C9C9C' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function IconNextArrow({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
      <rect width='14' height='14' rx='7' fill={theme.dpForm2} />
      <path d='M5.5 4L9 7L5.5 10.5' stroke='#9C9C9C' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
export function IconArrowBack({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
      <rect x='0.25' y='1.23047' width='23.5' height='23.5' rx='11.75' stroke='#4E5057' strokeWidth='0.5' />
      <path
        d='M14 16.9805L10 12.9805L14 8.98047'
        stroke='#B2B2B2'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function IconClose({width = 6, height = 6, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" fill="#798BB2" fillOpacity="0.1" stroke="#798BB2"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00004 8.70714L10.6465 11.3536L11.3536 10.6465L8.70714 8.00004L11.3536 5.35359L10.6465 4.64648L8.00004 7.29293L5.35359 4.64648L4.64648 5.35359L7.29293 8.00004L4.64648 10.6465L5.35359 11.3536L8.00004 8.70714Z" fill="#798BB2"/>
    </svg>
  );
}
export function IconCloseEye({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <g opacity='0.4'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.6067 15.2753L11.6833 13.3519C11.1771 13.6066 10.6053 13.75 10 13.75C7.92898 13.75 6.25002 12.071 6.25002 10C6.25002 9.39471 6.39344 8.8229 6.64814 8.31672L4.48161 6.15019C3.5555 7.01734 2.67085 8.11706 1.82794 9.44542C1.72258 9.6112 1.66663 9.80357 1.66663 10C1.66663 10.1964 1.72258 10.3888 1.82794 10.5546C4.21836 14.3217 6.9444 16.25 10 16.25C11.2583 16.25 12.4607 15.923 13.6067 15.2753ZM6.99198 4.41792C7.95625 3.97382 8.95901 3.75 10 3.75C13.0556 3.75 15.7817 5.67833 18.1721 9.44542C18.2775 9.6112 18.3334 9.80357 18.3334 10C18.3334 10.1964 18.2775 10.3888 18.1721 10.5546C17.4686 11.6632 16.736 12.6126 15.9745 13.4005L13.6062 11.0321C13.6999 10.7042 13.75 10.358 13.75 10C13.75 7.92896 12.0711 6.25 10 6.25C9.64205 6.25 9.2958 6.30016 8.9679 6.39384L6.99198 4.41792ZM7.6067 9.27528C7.53732 9.50467 7.50002 9.74798 7.50002 10C7.50002 11.3806 8.6194 12.5 10 12.5C10.252 12.5 10.4954 12.4627 10.7247 12.3933L7.6067 9.27528ZM10.0752 7.50111L12.4989 9.92485C12.4599 8.60394 11.3961 7.54011 10.0752 7.50111Z'
          fill='#798BB2'
        />
        <line x1='2.68658' y1='2.21967' x2='16.8287' y2='16.3618' stroke='#798BB2' strokeWidth='1.5' />
      </g>
    </svg>
  );
}

export function IconReload({width = 24, height = 24, fill, bg, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 0C5.38329 0 0 5.3833 0 12C0 18.6167 5.38329 24 12 24C18.6167 24 24 18.6167 24 12C24 5.38327 18.6167 0 12 0Z'
        fill={bg || theme.dpButton}
      />
      <path
        opacity='0.8'
        d='M18 12.503C17.9204 13.4703 17.6061 14.4037 17.0845 15.2223C16.5629 16.0408 15.8497 16.72 15.0065 17.2009C14.0149 17.7675 12.8835 18.0426 11.7425 17.9946C9.73385 17.9162 7.80738 16.8566 6.72738 15.0042C6.72092 14.9941 6.71631 14.9821 6.70985 14.971L6.20031 15.2617C6.17864 15.2748 6.15353 15.2809 6.12831 15.2793C6.11133 15.2786 6.09466 15.2745 6.07925 15.2674C6.06385 15.2602 6.05 15.2501 6.03851 15.2376C6.02702 15.225 6.01812 15.2104 6.0123 15.1944C6.00648 15.1785 6.00387 15.1615 6.00462 15.1445L6.09231 13.4315L6.11631 12.9516C6.11739 12.9339 6.12211 12.9166 6.13015 12.9008C6.14628 12.8704 6.17364 12.8475 6.2064 12.837C6.23916 12.8265 6.27473 12.8292 6.30554 12.8445L7.12062 13.258L8.27908 13.845C8.30002 13.8553 8.31772 13.8712 8.33026 13.8909C8.34279 13.9106 8.34967 13.9333 8.35015 13.9567C8.35062 13.98 8.34468 14.003 8.33296 14.0232C8.32124 14.0434 8.3042 14.06 8.28369 14.0711L7.60985 14.4569L7.62646 14.4911C8.56338 16.097 10.2711 16.9868 12.0203 16.9738C12.8858 16.9682 13.7353 16.7396 14.4868 16.3102C15.1727 15.919 15.755 15.3692 16.1849 14.7068C16.6148 14.0444 16.8799 13.2888 16.9578 12.503H18ZM12.2575 6.00534C14.2662 6.08379 16.1935 7.14335 17.2735 8.99574C17.2791 9.00589 17.2837 9.01789 17.2911 9.02897L17.8006 8.73823C17.8207 8.72672 17.8435 8.72078 17.8667 8.72103C17.8899 8.72128 17.9126 8.72771 17.9324 8.73966C17.9523 8.75161 17.9686 8.76864 17.9796 8.789C17.9907 8.80935 17.9961 8.83229 17.9954 8.85545L17.9077 10.5685L17.8837 11.0484C17.8837 11.0659 17.8791 11.0835 17.8698 11.0992C17.8539 11.1297 17.8265 11.1528 17.7937 11.1633C17.7609 11.1739 17.7252 11.171 17.6945 11.1555L16.8794 10.742L15.7218 10.155C15.7013 10.1445 15.6839 10.1287 15.6716 10.1093C15.6593 10.0898 15.6524 10.0673 15.6517 10.0443C15.6511 10.0213 15.6566 9.99846 15.6678 9.97831C15.679 9.95815 15.6955 9.94139 15.7154 9.92978L16.3902 9.54306L16.3735 9.50891C15.4366 7.90295 13.7298 7.01321 11.9797 7.02614C11.1142 7.03191 10.2648 7.26045 9.51323 7.68975C8.82744 8.0811 8.24533 8.63096 7.81559 9.29332C7.38584 9.95568 7.12095 10.7113 7.04308 11.497H6C6.07979 10.5297 6.39408 9.59639 6.91567 8.77784C7.43726 7.95928 8.15045 7.28012 8.99354 6.79909C9.98513 6.23258 11.1165 5.95745 12.2575 6.00534Z'
        fill={fill || (active && theme.dpTheme) || theme.dpNormal}
      />
    </svg>
  );
}

export function IconExpand({width = 24, height = 24, fill, active, theme}: SvgIconProps) {
  return (
    <svg className='icon-expand' xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 10 5" fill="none">
      <path d="M1 0.5L5 4.5L9 0.500001" stroke="#798BB2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconTV({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <path
        d='M4.16667 17.5C3.70833 17.5 3.31583 17.3367 2.98917 17.01C2.6625 16.6833 2.49945 16.2911 2.5 15.8333V4.16667C2.5 3.70833 2.66333 3.31583 2.99 2.98917C3.31667 2.6625 3.70889 2.49945 4.16667 2.5H15.8333C16.2917 2.5 16.6842 2.66333 17.0108 2.99C17.3375 3.31667 17.5006 3.70889 17.5 4.16667V15.8333C17.5 16.2917 17.3367 16.6842 17.01 17.0108C16.6833 17.3375 16.2911 17.5006 15.8333 17.5H4.16667ZM6.66667 8.33334V12.5C6.66667 12.7361 6.74667 12.9342 6.90667 13.0942C7.06667 13.2542 7.26445 13.3339 7.5 13.3333C7.73611 13.3333 7.93417 13.2533 8.09417 13.0933C8.25417 12.9333 8.33389 12.7356 8.33334 12.5V8.33334H9.79167L11.4792 12.8333C11.5347 12.9861 11.6286 13.1078 11.7608 13.1983C11.8931 13.2889 12.0422 13.3339 12.2083 13.3333H12.7917C12.9583 13.3333 13.1075 13.2881 13.2392 13.1975C13.3708 13.1069 13.4647 12.9856 13.5208 12.8333L15.3542 7.95834C15.4653 7.63889 15.4269 7.34361 15.2392 7.0725C15.0514 6.80139 14.7911 6.66611 14.4583 6.66667C14.25 6.66667 14.0589 6.72917 13.885 6.85417C13.7111 6.97917 13.5897 7.13889 13.5208 7.33334L12.5 10.4167L11.4375 7.22917C11.3819 7.0625 11.2814 6.92695 11.1358 6.8225C10.9903 6.71806 10.8269 6.66611 10.6458 6.66667H5C4.76389 6.66667 4.56583 6.74667 4.40583 6.90667C4.24583 7.06667 4.16611 7.26445 4.16667 7.5C4.16667 7.73611 4.24667 7.93417 4.40667 8.09417C4.56667 8.25417 4.76445 8.33389 5 8.33334H6.66667Z'
        fill={fill || (active && theme.dpTheme) || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconScore({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.5 3C1.39543 3 0.5 3.89543 0.5 5V16C0.5 17.1046 1.39543 18 2.5 18H17.5C18.6046 18 19.5 17.1046 19.5 16V5C19.5 3.89543 18.6046 3 17.5 3H2.5ZM6.16 14.12H4.52V8.75L3 10.07V8.32L4.52 7H6.16V14.12ZM17.58 12.02C17.58 13.49 16.47 14.24 15.29 14.24C14.11 14.24 13 13.49 13 12.02V9.22C13 7.75 14.11 7 15.29 7C16.47 7 17.58 7.75 17.58 9.22V12.02ZM15.94 12.03V9.22C15.94 8.72 15.64 8.48 15.29 8.48C14.94 8.48 14.64 8.72 14.64 9.22V12.03C14.64 12.53 14.94 12.76 15.29 12.76C15.64 12.76 15.94 12.53 15.94 12.03ZM9.75 8C9.33579 8 9 8.33579 9 8.75C9 9.16421 9.33579 9.5 9.75 9.5C10.1642 9.5 10.5 9.16421 10.5 8.75C10.5 8.33579 10.1642 8 9.75 8ZM9 12.75C9 12.3358 9.33579 12 9.75 12C10.1642 12 10.5 12.3358 10.5 12.75C10.5 13.1642 10.1642 13.5 9.75 13.5C9.33579 13.5 9 13.1642 9 12.75Z'
        fill={fill || (active && theme.dpTheme) || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconLive({width = 40.016, height = 8.52}: SvgIconProps) {
  return (
    <img src={require('../../assets/images/svg/live.svg')} width={width} height={height} alt="" />
  );
}

export function IconAnimate({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 3C1.89543 3 1 3.89543 1 5V15C1 16.1046 1.89543 17 3 17L9.25 17V12.7118C7.95608 12.401 7 11.3047 7 10C7 8.6953 7.95609 7.59903 9.25002 7.28821V3H3ZM10.75 12.7118V17H17C18.1046 17 19 16.1046 19 15V5C19 3.89543 18.1046 3 17 3H10.75V7.28822C12.0439 7.59905 13 8.69532 13 10C13 11.3047 12.0439 12.401 10.75 12.7118ZM10 11.4C9.17157 11.4 8.5 10.7732 8.5 10C8.5 9.2268 9.17157 8.6 10 8.6C10.8284 8.6 11.5 9.2268 11.5 10C11.5 10.7732 10.8284 11.4 10 11.4ZM2.5 12.8L2.5 7.2H4L4 12.8H2.5ZM16 7.2V12.8H17.5V7.2H16Z'
        fill={fill || (active && theme.dpTheme) || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconFullScreen({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <path
        d='M9.99998 0.625C4.8307 0.625 0.625 4.8307 0.625 9.99999C0.625 15.1693 4.8307 19.375 10 19.375C15.1693 19.375 19.375 15.1693 19.375 9.99999C19.375 4.83068 15.1693 0.625 9.99998 0.625Z'
        fill={theme.dpButton}
      />
      <path
        opacity='0.88'
        d='M5 5V8.33333H6.11111V6.11111H8.33333V5H5ZM6.11111 11.6667H5V15H8.33333V13.8889H6.11111V11.6667ZM13.8889 13.8889H11.6667V15H15V11.6667H13.8889V13.8889ZM13.8889 5H11.6667V6.11111H13.8889V8.33333H15V5H13.8889Z'
        fill={fill || (active && theme.dpTheme) || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconCollectLight({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
      <path
        d='M7.54597 0.984332C7.72468 0.596897 8.27532 0.596897 8.45403 0.984332L10.1399 4.63923C10.2127 4.79713 10.3623 4.90585 10.535 4.92633L14.532 5.40023C14.9557 5.45047 15.1258 5.97416 14.8126 6.26385L11.8575 8.9966C11.7299 9.11467 11.6727 9.29058 11.7066 9.46114L12.491 13.4089C12.5742 13.8274 12.1287 14.1511 11.7564 13.9427L8.24422 11.9767C8.09248 11.8918 7.90752 11.8918 7.75578 11.9767L4.24361 13.9427C3.8713 14.1511 3.42583 13.8274 3.50898 13.4089L4.2934 9.46114C4.32729 9.29058 4.27013 9.11467 4.14246 8.9966L1.1874 6.26385C0.874151 5.97416 1.04431 5.45047 1.46801 5.40023L5.46497 4.92633C5.63765 4.90585 5.7873 4.79713 5.86013 4.63923L7.54597 0.984332Z'
        fill='#3586FF'
      />
    </svg>
  );
}
export function IconCollect({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <path
        d='M9.83002 3.31185C9.87614 3.21826 9.94754 3.13944 10.0361 3.08432C10.1247 3.02921 10.227 3 10.3314 3C10.4357 3 10.538 3.02921 10.6266 3.08432C10.7152 3.13944 10.7866 3.21826 10.8327 3.31185L12.6654 7.02524C12.7055 7.1065 12.7647 7.17678 12.838 7.23004C12.9114 7.2833 12.9965 7.31794 13.0862 7.33096L17.1841 7.92676C17.2874 7.94175 17.3843 7.98533 17.4641 8.05257C17.5438 8.11981 17.6032 8.20803 17.6354 8.30724C17.6676 8.40645 17.6714 8.5127 17.6464 8.61397C17.6214 8.71523 17.5685 8.80747 17.4938 8.88025L14.5282 11.7704C14.4634 11.8336 14.4149 11.9117 14.387 11.9979C14.359 12.0841 14.3524 12.1757 14.3678 12.265L15.0675 16.3467C15.0851 16.4494 15.0736 16.555 15.0343 16.6515C14.995 16.748 14.9295 16.8316 14.8452 16.8929C14.7609 16.9541 14.6612 16.9906 14.5573 16.9982C14.4534 17.0058 14.3494 16.9842 14.2571 16.9358L10.5912 15.0087C10.5111 14.9666 10.4219 14.9446 10.3314 14.9446C10.2408 14.9446 10.1516 14.9666 10.0715 15.0087L6.40615 16.9358C6.31384 16.9843 6.20981 17.0061 6.1058 16.9985C6.00178 16.991 5.90195 16.9546 5.81758 16.8933C5.73321 16.832 5.66766 16.7483 5.62836 16.6517C5.58906 16.5551 5.57756 16.4495 5.59517 16.3467L6.29492 12.265C6.31027 12.1757 6.30369 12.0841 6.27575 11.9979C6.2478 11.9117 6.19934 11.8336 6.13452 11.7704L3.16895 8.88025C3.09422 8.80747 3.04136 8.71523 3.01633 8.61397C2.9913 8.5127 2.99511 8.40645 3.02733 8.30724C3.05954 8.20803 3.11888 8.11981 3.19863 8.05257C3.27838 7.98533 3.37536 7.94175 3.47859 7.92676L7.5765 7.33096C7.66618 7.31794 7.75135 7.2833 7.82466 7.23004C7.89798 7.17678 7.95725 7.1065 7.99736 7.02524L9.83057 3.31185H9.83002Z'
        fill={fill || (active && theme.dpTheme) || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconCollect2({width = 16, height = 16, fill, active}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M7.54597 0.984332C7.72468 0.596897 8.27532 0.596897 8.45403 0.984332L10.1399 4.63923C10.2127 4.79713 10.3623 4.90585 10.535 4.92633L14.532 5.40023C14.9557 5.45047 15.1258 5.97416 14.8126 6.26385L11.8575 8.9966C11.7299 9.11467 11.6727 9.29058 11.7066 9.46114L12.491 13.4089C12.5742 13.8274 12.1287 14.1511 11.7564 13.9427L8.24422 11.9767C8.09248 11.8918 7.90752 11.8918 7.75578 11.9767L4.24361 13.9427C3.8713 14.1511 3.42583 13.8274 3.50898 13.4089L4.2934 9.46114C4.32729 9.29058 4.27013 9.11467 4.14246 8.9966L1.1874 6.26385C0.874151 5.97416 1.04431 5.45047 1.46801 5.40023L5.46497 4.92633C5.63765 4.90585 5.7873 4.79713 5.86013 4.63923L7.54597 0.984332Z" fill={!active ? '#798BB2' : '#65DEEB'} fillOpacity={!active && '0.4'}/>
    </svg>
  );
}

export function IconN({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <rect x='3' y='3' width='14' height='14' rx='2' fill={fill || (active && theme.dpTheme) || theme.dpAncillary} />
      <path d='M13 14H11.6349L8.53028 9.08989V14H7V6H8.36514L11.4697 10.8989V6H13V14Z' fill='white' />
    </svg>
  );
}
export function IconGoback({width = 24, height = 24, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <circle cx='7' cy='7' r='5.75' fill={theme.dpCar} stroke={theme.dpOutline} strokeWidth='0.5' />
      <path
        d='M8.35785 9.74713C8.50043 9.88894 8.5146 10.1041 8.39027 10.2281C8.26561 10.352 8.04873 10.3375 7.90619 10.196L5.11573 7.43893C5.03488 7.35846 4.99664 7.25488 5.00033 7.15743C4.99601 7.05911 5.03428 6.95459 5.11544 6.87352L7.90619 4.11644C8.04873 3.97463 8.26531 3.96044 8.39027 4.08438C8.5146 4.20831 8.50044 4.42351 8.35785 4.56531L5.73437 7.15623L8.35785 9.74713Z'
        fill={theme.dpNormal}
      />
    </svg>
  );
}

export function IconChart({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <path d='M5 11H7.5V16H5V11Z' fill={fill || (active && theme.dpTheme) || theme.dpAncillary} />
      <path d='M9 4H11.5V16H9V4Z' fill={fill || (active && theme.dpTheme) || theme.dpAncillary} />
      <path d='M13 7H15.5V16H13V7Z' fill={fill || (active && theme.dpTheme) || theme.dpAncillary} />
    </svg>
  );
}

export function IconSun({width = 10, height = 10, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 10 10' fill='none'>
      <path
        d='M2.31551 7.24649L1.65914 7.90286C1.53865 8.02334 1.53865 8.22038 1.65914 8.34086C1.77962 8.46135 1.97666 8.46135 2.09714 8.34086L2.75351 7.68449C2.874 7.56401 2.874 7.36697 2.75351 7.24649C2.63303 7.126 2.43599 7.126 2.31551 7.24649ZM2.12726 2.56903C2.249 2.69076 2.44729 2.69076 2.56903 2.56903C2.69076 2.44729 2.69076 2.249 2.56903 2.12726L1.90638 1.46461C1.78464 1.34287 1.58635 1.34287 1.46461 1.46461C1.34287 1.58635 1.34287 1.78464 1.46461 1.90638L2.12726 2.56903ZM1.25 4.6875H0.3125C0.139307 4.6875 0 4.82681 0 5C0 5.17319 0.140562 5.3125 0.3125 5.3125H1.25C1.42319 5.3125 1.5625 5.17319 1.5625 5C1.5625 4.82806 1.42194 4.6875 1.25 4.6875ZM5 1.5625C5.17319 1.5625 5.3125 1.42319 5.3125 1.25V0.3125C5.3125 0.139307 5.17319 0 5 0C4.82681 0 4.6875 0.139307 4.6875 0.3125V1.25C4.6875 1.42319 4.82806 1.5625 5 1.5625ZM8.00703 2.43097L8.6634 1.7746C8.78389 1.65412 8.78389 1.45708 8.6634 1.3366C8.54292 1.21611 8.34588 1.21611 8.2254 1.3366L7.56903 1.99297C7.44854 2.11345 7.44854 2.31049 7.56903 2.43097C7.68951 2.55271 7.88655 2.55271 8.00703 2.43097ZM9.6875 4.6875H8.75C8.57681 4.6875 8.4375 4.82681 8.4375 5C8.4375 5.17319 8.57681 5.3125 8.75 5.3125H9.6875C9.86069 5.3125 10 5.17319 10 5C10 4.82806 9.86069 4.6875 9.6875 4.6875ZM7.87274 7.43097C7.751 7.30924 7.55271 7.30924 7.43097 7.43097C7.30924 7.55271 7.30924 7.751 7.43097 7.87274L8.09362 8.53539C8.21536 8.65713 8.41365 8.65713 8.53539 8.53539C8.65713 8.41366 8.65713 8.21536 8.53539 8.09363L7.87274 7.43097ZM5 2.18625C3.44503 2.18625 2.18499 3.44629 2.18499 5.00126C2.18499 6.55623 3.44503 7.81627 5 7.81627C6.55497 7.81627 7.81501 6.55623 7.81501 5.00126C7.81501 3.44629 6.55497 2.18625 5 2.18625ZM5 8.4375C4.82681 8.4375 4.6875 8.57681 4.6875 8.75V9.6875C4.6875 9.86069 4.82681 10 5 10C5.17319 10 5.3125 9.86069 5.3125 9.6875V8.75C5.3125 8.57806 5.17319 8.4375 5 8.4375Z'
        fill={fill || (active && 'white') || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconMoon({width = 10, height = 10, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 10 10' fill='none'>
      <path
        d='M6.24842 0C6.36192 0.422446 6.42497 0.870114 6.42497 1.33039C6.42497 4.1425 4.1488 6.41866 1.3367 6.41866C0.876419 6.41866 0.428752 6.35561 0 6.24212C0.586381 8.40479 2.5599 10 4.91173 10C7.72383 10 10 7.72383 10 4.91173C10 2.5599 8.4111 0.586381 6.24842 0Z'
        fill={fill || (active && 'white') || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconEye({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <g opacity='0.4'>
        <path
          d='M9.9999 3.75C13.0555 3.75 15.7816 5.67833 18.172 9.44542C18.2773 9.6112 18.3333 9.80357 18.3333 10C18.3333 10.1964 18.2773 10.3888 18.172 10.5546C15.7816 14.3217 13.0555 16.25 9.9999 16.25C6.94428 16.25 4.21824 14.3217 1.82782 10.5546C1.72246 10.3888 1.6665 10.1964 1.6665 10C1.6665 9.80357 1.72246 9.6112 1.82782 9.44542C4.21824 5.67833 6.94428 3.75 9.9999 3.75ZM9.9999 6.25C7.92886 6.25 6.2499 7.92896 6.2499 10C6.2499 12.071 7.92886 13.75 9.9999 13.75C12.0709 13.75 13.7499 12.071 13.7499 10C13.7499 7.92896 12.0709 6.25 9.9999 6.25ZM9.9999 12.5C11.3805 12.5 12.4999 11.3806 12.4999 10C12.4999 8.61937 11.3805 7.5 9.9999 7.5C8.61928 7.5 7.4999 8.61937 7.4999 10C7.4999 11.3806 8.61928 12.5 9.9999 12.5Z'
          fill='#798BB2'
        />
      </g>
    </svg>
  );
}

// export function IconAlert({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
//   return (
//     <svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
//       <path
//         d='M7 0C10.866 0 14 3.13396 14 7C14 10.866 10.866 14 7 14C3.13396 14 0 10.866 0 7C0 3.13396 3.13396 0 7 0ZM7 9.39779C6.41456 9.39779 5.93992 9.87229 5.93992 10.4579C5.93992 11.0433 6.41456 11.518 7 11.518C7.58544 11.518 8.06008 11.0433 8.06008 10.4579C8.06008 9.87229 7.58544 9.39779 7 9.39779ZM6.96951 8.56903C7.4738 8.56903 7.88253 8.16015 7.88253 7.65601V3.39506C7.88253 2.89078 7.4738 2.48205 6.96951 2.48205C6.46523 2.48205 6.0565 2.89092 6.0565 3.39506V7.65601C6.0565 8.16029 6.46523 8.56903 6.96951 8.56903Z'
//         fill={fill || 'white'}
//       />
//     </svg>
//   );
// }

export function IconLeague({width = 18, height = 18, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 18 18' fill='none'>
      <path
        d='M14.34 3.78H12.96V3.13C12.96 3.0585 12.906 3 12.84 3H5.16C5.094 3 5.04 3.0585 5.04 3.13V3.78H3.66C3.2955 3.78 3 4.10012 3 4.495V6.9C3 8.22762 3.9 9.331 5.073 9.5325C5.3055 11.4207 6.705 12.9076 8.46 13.1156V14.8251H5.52C5.2545 14.8251 5.04 15.0575 5.04 15.3451V15.87C5.04 15.9415 5.094 16 5.16 16H12.84C12.906 16 12.96 15.9415 12.96 15.87V15.3451C12.96 15.0575 12.7455 14.8251 12.48 14.8251H9.54V13.1156C11.295 12.9076 12.6945 11.4207 12.927 9.5325C14.1 9.331 15 8.22762 15 6.9V4.495C15 4.10012 14.7045 3.78 14.34 3.78ZM4.08 6.9V4.95H5.04V8.3235C4.4835 8.13175 4.08 7.56625 4.08 6.9ZM11.88 8.98C11.88 9.77787 11.5935 10.5302 11.0715 11.0941C10.5495 11.6596 9.8565 11.97 9.12 11.97H8.88C8.1435 11.97 7.449 11.6596 6.9285 11.0941C6.4065 10.5286 6.12 9.77787 6.12 8.98V4.17H11.88V8.98ZM13.92 6.9C13.92 7.56625 13.5165 8.13175 12.96 8.3235V4.95H13.92V6.9Z'
        fill={fill || (active && theme.dpTheme) || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconTeam({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 41 40' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M30.764 5.74838L37.2184 12.2026C38.1272 13.1116 38.1272 14.591 37.2188 15.5L32.5568 20.1614C32.1681 20.5523 31.6525 20.7916 31.103 20.836V32.5804C31.103 33.8784 30.0468 34.9346 28.7488 34.9346H12.2354C10.9374 34.9346 9.88138 33.8784 9.88138 32.5804V21.3148C9.33804 21.2671 8.82905 21.0288 8.44438 20.6422L3.78298 15.9808C3.34258 15.5404 3.09998 14.9548 3.09998 14.332C3.09998 13.7092 3.34258 13.1238 3.78298 12.6832L10.1628 6.30318C10.3634 5.92823 10.6622 5.61493 11.0273 5.39688C11.3924 5.17883 11.8099 5.06423 12.2352 5.06538H15.674L15.9152 5.19958C17.189 5.90818 18.8144 6.29838 20.492 6.29838C22.1696 6.29838 23.7952 5.90818 25.069 5.19958L25.31 5.06538H28.7488C28.8114 5.06555 28.874 5.06835 28.9364 5.07378C29.2717 5.04718 29.6088 5.09372 29.9243 5.2102C30.2399 5.32668 30.5264 5.5103 30.764 5.74838ZM31.052 18.657L35.7136 13.9954C35.7518 13.9572 35.7733 13.9053 35.7734 13.8512C35.7734 13.7971 35.752 13.7453 35.7138 13.707L29.2594 7.25278C29.198 7.19138 29.1338 7.18998 29.0854 7.19678L28.9336 7.21878L28.7814 7.19698L28.7784 7.19654C28.7683 7.19507 28.7579 7.19354 28.7474 7.19318H25.8536C24.2962 8.00078 22.4494 8.42598 20.492 8.42598C18.5348 8.42598 16.688 8.00078 15.1308 7.19318H12.2354C12.1903 7.19326 12.1463 7.2068 12.1089 7.23206C12.0716 7.25732 12.0426 7.29316 12.0258 7.33498L11.9338 7.56278L11.728 7.74738L5.28758 14.1878C5.23838 14.2372 5.22798 14.2934 5.22798 14.332C5.22798 14.3706 5.23818 14.4268 5.28758 14.476L9.94898 19.1376C9.96755 19.1564 9.9897 19.1713 10.0141 19.1814C10.0385 19.1915 10.0647 19.1966 10.0912 19.1964C10.1272 19.1964 10.1806 19.1872 10.2288 19.1432L12.0092 17.522V27.2308H28.9746V16.9666L30.769 18.6604C30.8178 18.7064 30.8724 18.716 30.9094 18.716C30.9359 18.7162 30.9622 18.7111 30.9867 18.701C31.0112 18.6909 31.0334 18.6759 31.052 18.657ZM28.9746 29.2308H12.0092V32.5806C12.0092 32.6103 12.015 32.6397 12.0263 32.6671C12.0377 32.6946 12.0543 32.7195 12.0753 32.7405C12.0963 32.7615 12.1212 32.7782 12.1486 32.7896C12.1761 32.8009 12.2055 32.8068 12.2352 32.8068H28.7484C28.8732 32.8068 28.9746 32.7056 28.9746 32.5806V29.2308Z'
        fill={fill || (active && theme.dpBasicWhite) || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconClock({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path
        d='M7 13.1667C3.6862 13.1667 1 10.4805 1 7.16675C1 3.85295 3.6862 1.16675 7 1.16675C10.3138 1.16675 13 3.85295 13 7.16675C13 10.4805 10.3138 13.1667 7 13.1667ZM7 11.9667C8.27304 11.9667 9.49394 11.461 10.3941 10.5609C11.2943 9.66069 11.8 8.43979 11.8 7.16675C11.8 5.89371 11.2943 4.67281 10.3941 3.77264C9.49394 2.87246 8.27304 2.36675 7 2.36675C5.72696 2.36675 4.50606 2.87246 3.60589 3.77264C2.70571 4.67281 2.2 5.89371 2.2 7.16675C2.2 8.43979 2.70571 9.66069 3.60589 10.5609C4.50606 11.461 5.72696 11.9667 7 11.9667ZM7.6 7.16675H10V8.36675H6.4V4.16675H7.6V7.16675Z'
        fill={fill || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconLinkAdd({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path
        d='M7.02746 9.00824L4.68433 11.3514C4.54575 11.4905 4.38105 11.6009 4.1997 11.6762C4.01834 11.7516 3.82389 11.7903 3.62751 11.7903C3.43114 11.7903 3.23669 11.7516 3.05533 11.6762C2.87398 11.6009 2.70928 11.4905 2.57069 11.3514C2.43083 11.2132 2.31979 11.0486 2.244 10.8672C2.16821 10.6858 2.12919 10.4911 2.12919 10.2945C2.12919 10.0979 2.16821 9.90328 2.244 9.72187C2.31979 9.54046 2.43083 9.3759 2.57069 9.23772L4.91382 6.8946C5.02753 6.78088 5.09142 6.62665 5.09142 6.46583C5.09142 6.30501 5.02753 6.15078 4.91382 6.03707C4.8001 5.92335 4.64587 5.85946 4.48505 5.85946C4.32423 5.85946 4.17 5.92335 4.05628 6.03707L1.71316 8.38623C1.24113 8.90002 0.985839 9.57631 1.00061 10.2739C1.01537 10.9714 1.29906 11.6363 1.79241 12.1296C2.28577 12.623 2.95064 12.9067 3.6482 12.9214C4.34575 12.9362 5.02204 12.6809 5.53583 12.2089L7.88499 9.86577C7.9413 9.80947 7.98596 9.74262 8.01644 9.66905C8.04691 9.59549 8.06259 9.51664 8.06259 9.43701C8.06259 9.35738 8.04691 9.27853 8.01644 9.20496C7.98596 9.13139 7.9413 9.06455 7.88499 9.00824C7.82868 8.95193 7.76184 8.90727 7.68827 8.8768C7.6147 8.84632 7.53585 8.83064 7.45622 8.83064C7.37659 8.83064 7.29774 8.84632 7.22418 8.8768C7.15061 8.90727 7.08376 8.95193 7.02746 9.00824ZM5.04667 8.87538C5.1031 8.93135 5.17002 8.97563 5.2436 9.00569C5.31718 9.03574 5.39596 9.05097 5.47544 9.05051C5.55492 9.05097 5.6337 9.03574 5.70728 9.00569C5.78086 8.97563 5.84778 8.93135 5.90421 8.87538L8.87538 5.90421C8.9891 5.79049 9.05298 5.63626 9.05298 5.47544C9.05298 5.31462 8.9891 5.16039 8.87538 5.04667C8.76167 4.93296 8.60743 4.86907 8.44662 4.86907C8.2858 4.86907 8.13156 4.93296 8.01785 5.04667L5.04667 8.01785C4.99007 8.07399 4.94514 8.14078 4.91449 8.21437C4.88383 8.28796 4.86804 8.36689 4.86804 8.44662C4.86804 8.52634 4.88383 8.60527 4.91449 8.67886C4.94514 8.75245 4.99007 8.81924 5.04667 8.87538ZM12.3961 10.5844H11.7922V9.98051C11.7922 9.82035 11.7286 9.66675 11.6153 9.55349C11.5021 9.44024 11.3485 9.37662 11.1883 9.37662C11.0281 9.37662 10.8745 9.44024 10.7613 9.55349C10.648 9.66675 10.5844 9.82035 10.5844 9.98051V10.5844H9.98051C9.82035 10.5844 9.66675 10.648 9.55349 10.7613C9.44024 10.8745 9.37662 11.0281 9.37662 11.1883C9.37662 11.3485 9.44024 11.5021 9.55349 11.6153C9.66675 11.7286 9.82035 11.7922 9.98051 11.7922H10.5844V12.3961C10.5844 12.5563 10.648 12.7099 10.7613 12.8231C10.8745 12.9364 11.0281 13 11.1883 13C11.3485 13 11.5021 12.9364 11.6153 12.8231C11.7286 12.7099 11.7922 12.5563 11.7922 12.3961V11.7922H12.3961C12.5563 11.7922 12.7099 11.7286 12.8231 11.6153C12.9364 11.5021 13 11.3485 13 11.1883C13 11.0281 12.9364 10.8745 12.8231 10.7613C12.7099 10.648 12.5563 10.5844 12.3961 10.5844ZM9.86577 7.88499L12.2089 5.53583C12.6809 5.02204 12.9362 4.34575 12.9214 3.6482C12.9067 2.95064 12.623 2.28577 12.1296 1.79241C11.6363 1.29906 10.9714 1.01537 10.2739 1.00061C9.57631 0.985839 8.90002 1.24113 8.38623 1.71316L6.03707 4.05628C5.98076 4.11259 5.93609 4.17943 5.90562 4.253C5.87515 4.32657 5.85946 4.40542 5.85946 4.48505C5.85946 4.56468 5.87515 4.64353 5.90562 4.7171C5.93609 4.79066 5.98076 4.85751 6.03707 4.91382C6.09337 4.97012 6.16022 5.01479 6.23379 5.04526C6.30735 5.07573 6.3862 5.09142 6.46583 5.09142C6.54546 5.09142 6.62431 5.07573 6.69788 5.04526C6.77145 5.01479 6.83829 4.97012 6.8946 4.91382L9.23772 2.57069C9.37631 2.43156 9.541 2.32116 9.72236 2.24583C9.90372 2.1705 10.0982 2.13172 10.2945 2.13172C10.4909 2.13172 10.6854 2.1705 10.8667 2.24583C11.0481 2.32116 11.2128 2.43156 11.3514 2.57069C11.4912 2.70887 11.6023 2.87343 11.6781 3.05485C11.7538 3.23626 11.7929 3.43091 11.7929 3.62751C11.7929 3.82412 11.7538 4.01877 11.6781 4.20018C11.6023 4.3816 11.4912 4.54616 11.3514 4.68433L9.00824 7.02746C8.95164 7.0836 8.90671 7.15039 8.87605 7.22398C8.84539 7.29757 8.82961 7.3765 8.82961 7.45622C8.82961 7.53595 8.84539 7.61488 8.87605 7.68847C8.90671 7.76206 8.95164 7.82885 9.00824 7.88499C9.06438 7.94159 9.13117 7.98652 9.20476 8.01718C9.27835 8.04784 9.35729 8.06362 9.43701 8.06362C9.51673 8.06362 9.59566 8.04784 9.66925 8.01718C9.74284 7.98652 9.80963 7.94159 9.86577 7.88499Z'
        fill={fill || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconListAdd({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path
        d='M11.8333 8.53846V6.46154H10.3889V8.53846H8.22222V9.92308H10.3889V12H11.8333V9.92308H14V8.53846H13.3233H11.8333ZM1 3H8.94444V4.38462H1V3ZM1 5.76923H8.94444V7.15385H1V5.76923ZM1 8.53846H6.77778V9.92308H1V8.53846Z'
        fill={fill || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconPaperClip({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path
        d='M9.14503 4.85919L5.28938 8.71485C5.22428 8.77772 5.17236 8.85293 5.13663 8.93608C5.10091 9.01924 5.08211 9.10867 5.08133 9.19917C5.08054 9.28967 5.09778 9.37942 5.13205 9.46318C5.16632 9.54694 5.21693 9.62304 5.28093 9.68704C5.34492 9.75103 5.42102 9.80164 5.50478 9.83591C5.58855 9.87018 5.6783 9.88742 5.76879 9.88664C5.85929 9.88585 5.94873 9.86705 6.03188 9.83133C6.11504 9.79561 6.19025 9.74369 6.25312 9.67859L10.1088 5.82362C10.4923 5.44013 10.7077 4.92 10.7077 4.37766C10.7077 3.83532 10.4923 3.3152 10.1088 2.93171C9.72528 2.54822 9.20515 2.33277 8.66282 2.33277C8.12048 2.33277 7.60035 2.54822 7.21686 2.93171L3.36121 6.78736C2.73553 7.42919 2.38791 8.29169 2.39365 9.18801C2.39939 10.0843 2.75804 10.9423 3.39189 11.5761C4.02574 12.2098 4.88377 12.5684 5.78009 12.574C6.67641 12.5796 7.53886 12.2318 8.1806 11.6061L12.0363 7.7511L13 8.71485L9.14503 12.5705C8.25025 13.4653 7.03666 13.968 5.77125 13.968C4.50583 13.968 3.29225 13.4653 2.39747 12.5705C1.50268 11.6757 1 10.4621 1 9.19672C1 7.9313 1.50268 6.71772 2.39747 5.82294L6.25312 1.96796C6.89486 1.34219 7.75731 0.994451 8.65363 1.00007C9.54996 1.00568 10.408 1.36421 11.0418 1.99797C11.6757 2.63173 12.0343 3.4897 12.0401 4.38603C12.0458 5.28235 11.6982 6.14484 11.0725 6.78668L7.21686 10.6437C6.83328 11.0271 6.3131 11.2424 5.77077 11.2423C5.22843 11.2422 4.70835 11.0266 4.32495 10.643C3.94155 10.2594 3.72623 9.73925 3.72636 9.19692C3.72649 8.65458 3.94205 8.1345 4.32563 7.7511L8.1806 3.89545L9.14503 4.85919Z'
        fill={fill || theme.dpAncillary}
      />
    </svg>
  );
}

export function IconRight({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path d='M5.5 9L8.5 6L5.5 3' stroke={fill || theme.dpAncillary} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function IconCalendar({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <g clipPath='url(#clip0_1789_243)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.06357 0.705566C5.33097 0.705566 5.54774 0.922338 5.54774 1.18973V1.38303C6.0555 1.36356 6.55285 1.3513 7.00024 1.3513C7.44764 1.3513 7.94499 1.36356 8.45275 1.38303V1.18973C8.45275 0.922338 8.66953 0.705566 8.93692 0.705566C9.20431 0.705566 9.42109 0.922338 9.42109 1.18973V1.42745C10.1823 1.4675 10.9101 1.51663 11.4694 1.55755C12.3282 1.62039 13.0107 2.29594 13.0806 3.15493C13.1706 4.25979 13.2944 6.01546 13.2944 7.32271C13.2944 8.62997 13.1706 10.3856 13.0806 11.4905C13.0107 12.3495 12.3282 13.0251 11.4694 13.0879C10.3037 13.1731 8.40556 13.2941 7.00024 13.2941C5.59496 13.2941 3.6968 13.1731 2.53107 13.0879C1.67226 13.0251 0.989765 12.3495 0.919838 11.4905C0.829892 10.3856 0.706055 8.62997 0.706055 7.32271C0.706055 6.01546 0.829892 4.25979 0.919838 3.15493C0.989765 2.29594 1.67226 1.62039 2.53107 1.55755C3.09036 1.51663 3.81824 1.4675 4.5794 1.42746V1.18973C4.5794 0.922338 4.79617 0.705566 5.06357 0.705566ZM8.45275 2.35207V2.80363C8.45275 3.07103 8.66953 3.2878 8.93692 3.2878C9.20431 3.2878 9.42109 3.07103 9.42109 2.80363V2.39715C10.152 2.43608 10.8525 2.48333 11.3988 2.5233C11.7822 2.55136 12.0844 2.85101 12.1155 3.23351C12.2054 4.33749 12.3261 6.05852 12.3261 7.32271C12.3261 8.58691 12.2054 10.308 12.1155 11.4119C12.0844 11.7944 11.7822 12.0941 11.3988 12.1221C10.2336 12.2074 8.3667 12.3258 7.00024 12.3258C5.63381 12.3258 3.76694 12.2074 2.60174 12.1221C2.21827 12.0941 1.91612 11.7944 1.88498 11.4119C1.7951 10.308 1.67439 8.58691 1.67439 7.32271C1.67439 6.05852 1.7951 4.33749 1.88498 3.23351C1.91612 2.85101 2.21827 2.55136 2.60174 2.5233C3.14802 2.48333 3.84853 2.43608 4.5794 2.39715V2.80363C4.5794 3.07103 4.79617 3.2878 5.06357 3.2878C5.33097 3.2878 5.54774 3.07103 5.54774 2.80363V2.35207C6.0573 2.3322 6.5553 2.31964 7.00024 2.31964C7.44519 2.31964 7.94319 2.3322 8.45275 2.35207ZM4.41792 6.99994C4.77445 6.99994 5.06348 6.71092 5.06348 6.35438C5.06348 5.99784 4.77445 5.70882 4.41792 5.70882C4.06139 5.70882 3.77236 5.99784 3.77236 6.35438C3.77236 6.71092 4.06139 6.99994 4.41792 6.99994ZM4.41792 9.58181C4.77445 9.58181 5.06348 9.29279 5.06348 8.93625C5.06348 8.57971 4.77445 8.29069 4.41792 8.29069C4.06139 8.29069 3.77236 8.57971 3.77236 8.93625C3.77236 9.29279 4.06139 9.58181 4.41792 9.58181ZM7.64589 8.93625C7.64589 9.29279 7.35688 9.58181 7.00033 9.58181C6.64379 9.58181 6.35478 9.29279 6.35478 8.93625C6.35478 8.57971 6.64379 8.29069 7.00033 8.29069C7.35688 8.29069 7.64589 8.57971 7.64589 8.93625ZM7.00033 6.99994C7.35688 6.99994 7.64589 6.71092 7.64589 6.35438C7.64589 5.99784 7.35688 5.70882 7.00033 5.70882C6.64379 5.70882 6.35478 5.99784 6.35478 6.35438C6.35478 6.71092 6.64379 6.99994 7.00033 6.99994ZM10.228 6.35438C10.228 6.71092 9.93902 6.99994 9.58248 6.99994C9.22593 6.99994 8.93692 6.71092 8.93692 6.35438C8.93692 5.99784 9.22593 5.70882 9.58248 5.70882C9.93902 5.70882 10.228 5.99784 10.228 6.35438Z'
          fill='#BFBFC0'
        />
      </g>
      <defs>
        <clipPath id='clip0_1789_243'>
          <rect width='14' height='14' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconSearch({width = 12, height = 12, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 12 12' fill='none'>
      <path
        d='M8.5 8.5L10.5 10.5M1.5 5.5C1.5 6.56087 1.92143 7.57828 2.67157 8.32843C3.42172 9.07857 4.43913 9.5 5.5 9.5C6.56087 9.5 7.57828 9.07857 8.32843 8.32843C9.07857 7.57828 9.5 6.56087 9.5 5.5C9.5 4.43913 9.07857 3.42172 8.32843 2.67157C7.57828 1.92143 6.56087 1.5 5.5 1.5C4.43913 1.5 3.42172 1.92143 2.67157 2.67157C1.92143 3.42172 1.5 4.43913 1.5 5.5Z'
        stroke={fill || '#BFBFC0'}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function IconHelper({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
      <g clipPath='url(#clip0_1667_136517)'>
        <path
          d='M7.22 12C7.22 12.1319 7.2591 12.2607 7.33236 12.3704C7.40561 12.48 7.50973 12.5655 7.63155 12.6159C7.75337 12.6664 7.88741 12.6796 8.01673 12.6539C8.14605 12.6281 8.26484 12.5646 8.35808 12.4714C8.45131 12.3782 8.5148 12.2594 8.54053 12.1301C8.56625 12.0007 8.55305 11.8667 8.50259 11.7449C8.45213 11.6231 8.36668 11.5189 8.25705 11.4457C8.14742 11.3724 8.01853 11.3333 7.88667 11.3333C7.70986 11.3333 7.54029 11.4036 7.41527 11.5286C7.29024 11.6536 7.22 11.8232 7.22 12ZM7.88667 10.3533H7.83334C7.75967 10.3467 7.68806 10.3254 7.62263 10.2909C7.55721 10.2564 7.49927 10.2093 7.45216 10.1523C7.40505 10.0952 7.36971 10.0295 7.34817 9.95869C7.32663 9.88793 7.31932 9.8136 7.32667 9.74C7.52602 8.93002 7.99946 8.21397 8.66667 7.71333C9.67334 6.70667 9.69334 6.38 9.70667 6.04667C9.71575 5.8479 9.68373 5.6494 9.61261 5.46357C9.54149 5.27774 9.4328 5.10858 9.29334 4.96667C9.12648 4.79255 8.92551 4.65473 8.70297 4.56182C8.48044 4.4689 8.24113 4.42289 8 4.42667C7.55444 4.42667 7.12713 4.60367 6.81206 4.91873C6.497 5.23379 6.32 5.6611 6.32 6.10667C6.32 6.25607 6.26065 6.39936 6.15501 6.505C6.04936 6.61065 5.90608 6.67 5.75667 6.67C5.60726 6.67 5.46398 6.61065 5.35833 6.505C5.25269 6.39936 5.19334 6.25607 5.19334 6.10667C5.20037 5.36754 5.49939 4.66117 6.02517 4.14163C6.55095 3.6221 7.26084 3.33154 8 3.33333C8.39126 3.3326 8.77857 3.41141 9.13843 3.56498C9.49828 3.71855 9.82316 3.94367 10.0933 4.22667C10.3315 4.47643 10.5168 4.77165 10.6382 5.09468C10.7596 5.4177 10.8146 5.76189 10.8 6.10667C10.76 6.83333 10.54 7.4 9.42667 8.50667C8.86667 9.06667 8.50667 9.49333 8.47334 9.84C8.46654 9.98271 8.40546 10.1174 8.3026 10.2166C8.19973 10.3157 8.06286 10.3718 7.92 10.3733L7.88667 10.3533ZM12.8267 12.84C12.1126 13.5718 11.2443 14.1351 10.285 14.4888C9.32566 14.8426 8.29951 14.9778 7.2813 14.8847C6.26309 14.7916 5.27847 14.4725 4.3992 13.9507C3.51993 13.4289 2.76816 12.7174 2.19867 11.8683C1.62918 11.0191 1.25631 10.0536 1.10724 9.04203C0.958166 8.03049 1.03665 6.99845 1.33696 6.02109C1.63728 5.04373 2.15186 4.14568 2.84321 3.39239C3.53457 2.6391 4.38527 2.04954 5.33334 1.66667C6.80176 1.04947 8.43895 0.961446 9.96509 1.41763C11.4912 1.87382 12.8115 2.8459 13.7003 4.16771C14.5892 5.48952 14.9913 7.079 14.838 8.66446C14.6848 10.2499 13.9856 11.7329 12.86 12.86L12.8267 12.84ZM8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0Z'
          fill='#BFBFC0'
        />
      </g>
      <defs>
        <clipPath id='clip0_1667_136517'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconCopy({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M5 1C4.44772 1 4 1.44772 4 2L10 2C10.5523 2 11 2.44772 11 3V10C11.5523 10 12 9.55229 12 9V2C12 1.44772 11.5523 1 11 1H5Z" fill="#798BB2"/>
      <rect x="2" y="3" width="8" height="9" rx="1" fill="#798BB2"/>
    </svg>
  );
}

export function IconClear({width = 12, height = 12, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.99852 6.70563L8.78976 9.49687L9.49687 8.78976L6.70563 5.99852L9.49705 3.20711L8.78994 2.5L5.99852 5.29142L3.20711 2.5L2.5 3.20711L5.29142 5.99852L2.50018 8.78976L3.20729 9.49687L5.99852 6.70563Z" fill="#EB302A"/>
    </svg>
  );
}

export function IconConfirmed({width = 6, height = 6, fill, active, theme}: SvgIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame 1556237568">
        <circle id="Ellipse 2026" cx="8" cy="8" r="8" fill="#65DEEB" fillOpacity="0.2"/>
        <path id="Vector 578" d="M3 8L6.5 11L13 5" stroke="#65DEEB"/>
      </g>
    </svg>
  );
}

export function IconAdd({width = 6, height = 6, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
      <path d='M3.5 3.5V0H4.5V3.5H8V4.5H4.5V8H3.5V4.5H0V3.5H3.5Z' fill='#3586FF' />
    </svg>
  );
}
export function IconAdd2({width = 6, height = 6, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.33333 4.66536V8H4.66667V4.66536H8V3.33203H4.66667V0H3.33333V3.33203H0V4.66536H3.33333Z'
        fill='#B2B2B2'
      />
    </svg>
  );
}
export function IconDel({width = 6, height = 6, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
      <g clipPath='url(#clip0_4470_117712)'>
        <path
          d='M1.04801 3.14306H1.48667L2.40934 11.5364C2.43601 11.7817 2.64401 11.9684 2.89067 11.9684H9.09734C9.34401 11.9684 9.55201 11.7817 9.57867 11.5364L10.5013 3.14306H10.94C11.208 3.14306 11.4253 2.92573 11.4253 2.65773C11.4253 2.38973 11.208 2.1724 10.94 2.1724H8.51467V0.524396C8.51467 0.256396 8.29734 0.0390625 8.02934 0.0390625H3.95734C3.68934 0.0390625 3.47201 0.256396 3.47201 0.524396V2.17373H1.04667C0.778674 2.17373 0.56134 2.39106 0.56134 2.65906C0.562674 2.92573 0.780007 3.14306 1.04801 3.14306ZM4.44134 1.00973H7.54401V2.17373H4.44134V1.00973ZM3.95734 3.14306H9.52667L8.66401 10.9977H3.32534L2.46267 3.14306H3.95734ZM4.05601 9.67773L3.66801 4.7324C3.64667 4.46573 3.84667 4.2324 4.11334 4.21106C4.38134 4.18973 4.61334 4.38973 4.63467 4.6564L5.02267 9.60173C5.04401 9.86839 4.84401 10.1017 4.57734 10.1231C4.56401 10.1244 4.55201 10.1244 4.53867 10.1244C4.28801 10.1257 4.07467 9.93239 4.05601 9.67773ZM5.60534 9.6404V4.69506C5.60534 4.42706 5.82267 4.20973 6.09067 4.20973C6.35867 4.20973 6.57601 4.42706 6.57601 4.69506V9.6404C6.57601 9.90839 6.35867 10.1257 6.09067 10.1257C5.82267 10.1257 5.60534 9.90839 5.60534 9.6404ZM7.15867 9.60306L7.54667 4.6564C7.56801 4.38973 7.80134 4.18973 8.06801 4.21106C8.33467 4.2324 8.53467 4.46573 8.51334 4.7324L8.12534 9.67773C8.10534 9.93239 7.89334 10.1244 7.64267 10.1244C7.62934 10.1244 7.61734 10.1244 7.60401 10.1231C7.33734 10.1031 7.13734 9.86973 7.15867 9.60306Z'
          fill='#BFBFC0'
        />
      </g>
      <defs>
        <clipPath id='clip0_4470_117712'>
          <rect width='12' height='12' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconWin({width = 14, height = 15, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 14 15' fill='none'>
      <path
        d='M10.5003 3.9333V2.73047H3.50033V3.9333H1.16699V5.64714C1.16699 7.12005 2.26891 8.3293 3.68933 8.52414C3.89278 9.12077 4.25364 9.65135 4.73377 10.0598C5.2139 10.4683 5.79546 10.7394 6.41699 10.8446V11.4805C6.41699 11.7899 6.29408 12.0866 6.07528 12.3054C5.85649 12.5242 5.55974 12.6471 5.25033 12.6471H4.66699V13.8138H9.33366V12.6471H8.75033C8.44091 12.6471 8.14416 12.5242 7.92537 12.3054C7.70658 12.0866 7.58366 11.7899 7.58366 11.4805V10.8446C8.20519 10.7394 8.78675 10.4683 9.26688 10.0598C9.74701 9.65135 10.1079 9.12077 10.3113 8.52414C11.7317 8.3293 12.8337 7.12005 12.8337 5.64714V3.9333H10.5003ZM2.33366 5.64714V5.09997H3.50033V7.2968C3.15936 7.17589 2.86418 6.95242 2.65529 6.65705C2.4464 6.36168 2.33405 6.0089 2.33366 5.64714ZM11.667 5.64714C11.6666 6.00896 11.5542 6.36179 11.3453 6.65724C11.1364 6.95269 10.8413 7.1763 10.5003 7.29739V5.09997H11.667V5.64714Z'
        fill={fill || (active && theme.dpTheme) || '#A8A8A8'}
      />
    </svg>
  );
}

<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
  <path
    d='M13.912 8.61494V15.8967C13.912 15.9636 13.8586 16.0183 13.7924 16.0183H6.20009C6.18434 16.0183 6.16875 16.0151 6.15422 16.009C6.13969 16.0029 6.12651 15.9939 6.11542 15.9826C6.10433 15.9712 6.09556 15.9578 6.08958 15.9431C6.08361 15.9284 6.08054 15.9126 6.08055 15.8966V8.87436L5.28825 9.60985L13.912 8.61494ZM13.912 8.61494L14.7105 9.38338L14.7105 9.38338C14.7367 9.4085 14.7661 9.41379 14.7858 9.4138C14.7858 9.4138 14.7858 9.4138 14.7858 9.4138L13.912 8.61494ZM2.99462 7.26485L2.99464 7.26482L5.95574 4.24614L5.95633 4.24554L5.95635 4.24555L6.04831 4.16146L6.08928 4.05805C6.09815 4.0356 6.11342 4.01631 6.13316 4.00269C6.15292 3.98906 6.17624 3.98174 6.20015 3.9817L6.20018 3.9817H7.53139H7.53966L7.5387 3.98351C8.25216 4.36073 9.09871 4.55953 9.99631 4.55953C10.894 4.55953 11.7406 4.36073 12.4541 3.98351L12.4614 3.97965V3.9817H13.7919H13.7924V3.98171C13.7982 3.98191 13.8039 3.98276 13.8084 3.98344L13.8098 3.98365L13.8098 3.98365L13.8775 3.99353L13.945 3.98356L13.9451 3.98355C13.9701 3.97996 14.0055 3.98069 14.0384 4.01432L17.006 7.03947L17.006 7.03948C17.0265 7.06038 17.0379 7.08863 17.0379 7.11803C17.0378 7.14742 17.0264 7.17566 17.0059 7.19653L14.8627 9.38137C14.8627 9.38139 14.8627 9.38142 14.8627 9.38144L14.8626 9.38147L2.99462 7.26485ZM2.99462 7.26485C2.96831 7.29177 2.96276 7.32255 2.96276 7.34335C2.96276 7.36412 2.9682 7.39495 2.99466 7.42181M2.99462 7.26485L5.13774 9.60666L2.99466 7.42181M2.99466 7.42181L3.00579 7.41085L2.99464 7.42179L2.99466 7.42181ZM14.7079 3.33106L14.7079 3.33107L17.6754 6.35622C18.0873 6.7762 18.0873 7.45989 17.6756 7.87986L15.5322 10.0647L15.5322 10.0647C15.356 10.2453 15.1225 10.3558 14.8736 10.3763L14.8593 10.3775V10.3918V15.8966C14.8593 16.4966 14.3804 16.9844 13.7925 16.9844H6.20018C5.61231 16.9844 5.13351 16.4966 5.13351 15.8966V10.6163V10.602L5.11927 10.6007C4.87322 10.5787 4.64266 10.4687 4.46837 10.2901L4.46835 10.2901L2.32518 8.10522C2.12559 7.90175 2.01562 7.63122 2.01562 7.34335C2.01562 7.05549 2.12559 6.78505 2.32518 6.58148L5.25841 3.59111L5.25891 3.5916L5.2611 3.58743C5.35203 3.41417 5.48747 3.26944 5.65288 3.16873C5.81828 3.06801 6.00743 3.0151 6.20004 3.01563H6.20009H7.77702L7.88433 3.0765L7.89203 3.06293L7.88433 3.0765C8.47266 3.41014 9.2227 3.59355 9.99631 3.59355C10.7699 3.59355 11.5201 3.41014 12.1084 3.0765L12.1084 3.07649L12.2156 3.01563H13.7925C13.8209 3.01571 13.8492 3.017 13.8774 3.01951L13.8774 3.01973L13.88 3.01952C14.0319 3.00723 14.1846 3.02872 14.3275 3.08251C14.4704 3.13629 14.6002 3.22109 14.7079 3.33106ZM5.17284 9.63071C5.18599 9.63625 5.2001 9.63906 5.21434 9.63897L5.13781 9.60673L5.13777 9.60669C5.14775 9.61699 5.15968 9.62516 5.17284 9.63071Z'
    fill='#fff'
    stroke='#BFBFC0'
    strokeWidth='0.03125'
  />
  <line x1='6' y1='14.5' x2='14' y2='14.5' stroke='#BFBFC0' />
</svg>;

export function IconGameBriefView({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path
        d='M13 3.24949V10.7504C13 11.3692 12.7785 11.9 12.3393 12.3392C11.9001 12.7785 11.3692 13 10.7505 13H3.24952C2.63081 13 2.09994 12.7785 1.66073 12.3392C1.22151 11.9 1 11.3692 1 10.7504V3.24949C1 2.63078 1.22151 2.09991 1.66073 1.6607C2.09994 1.22148 2.63081 0.999969 3.24952 0.999969H10.7505C11.3692 0.999969 11.9001 1.22148 12.3393 1.6607C12.7785 2.09991 13 2.63078 13 3.24949ZM10.9987 7.04962V6.95032C10.9987 6.81665 10.9491 6.69825 10.8498 6.59895C10.7505 6.49965 10.6321 6.45 10.4984 6.45H7.54997V3.49774C7.54997 3.36407 7.50032 3.24567 7.40102 3.14637C7.30172 3.04707 7.18332 2.99742 7.04965 2.99742H6.95035C6.81668 2.99742 6.69828 3.04707 6.59898 3.14637C6.49968 3.24567 6.45003 3.36407 6.45003 3.49774V6.44618H3.50159C3.36792 6.44618 3.24952 6.49583 3.15022 6.59513C3.05092 6.69443 3.00127 6.81283 3.00127 6.9465V7.0458C3.00127 7.17947 3.05092 7.29787 3.15022 7.39717C3.24952 7.49647 3.3641 7.54612 3.50159 7.54612H6.45003V10.4946C6.45003 10.6282 6.49968 10.7466 6.59898 10.8459C6.69828 10.9452 6.81286 10.9949 6.95035 10.9949H7.04965C7.18332 10.9949 7.30172 10.9452 7.40102 10.8459C7.50032 10.7466 7.54997 10.6282 7.54997 10.4946V7.54612H10.4984C10.6321 7.54612 10.7505 7.49647 10.8498 7.39717C10.9491 7.30169 10.9987 7.18329 10.9987 7.04962Z'
        fill='#BFBFC0'
      />
    </svg>
  );
}

export function IconGameDetailView({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path
        d='M13 3.24952V10.7505C13 11.3692 12.7785 11.9001 12.3393 12.3393C11.9001 12.7785 11.3692 13 10.7505 13H3.24952C2.63081 13 2.09994 12.7785 1.66073 12.3393C1.22151 11.9001 1 11.3692 1 10.7505V3.24952C1 2.63081 1.22151 2.09994 1.66073 1.66073C2.09994 1.22151 2.63081 1 3.24952 1H10.7505C11.3692 1 11.9001 1.22151 12.3393 1.66073C12.7785 2.09994 13 2.63081 13 3.24952Z'
        fill='#3586FF'
      />
      <rect x='3' y='6.5' width='8' height='1' rx='0.5' fill='white' />
    </svg>
  );
}

export function IconFilterDescending({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path d='M5.85977 1.3644L1.3125 5.53022L2.23945 6.54194L4.48711 4.48433V12.4919H5.85977V1.3644Z' fill='#BFBFC0' />
      <path
        d='M9.51291 1.50796H8.14026V12.6355L12.6875 8.46968L11.7606 7.45796L9.51291 9.51558V1.50796Z'
        fill='#3586FF'
      />
    </svg>
  );
}

export function IconFilterAscending({width = 14, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 14 14' fill='none'>
      <path d='M5.85977 1.3644L1.3125 5.53022L2.23945 6.54194L4.48711 4.48433V12.4919H5.85977V1.3644Z' fill='#3586FF' />
      <path
        d='M9.51291 1.50796H8.14026V12.6355L12.6875 8.46968L11.7606 7.45796L9.51291 9.51558V1.50796Z'
        fill='#BFBFC0'
      />
    </svg>
  );
}

export function IconVideoPrev({width = 24, height = 24, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://wVideoww.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <rect x='0.25' y='0.25' width='23.5' height='23.5' rx='11.75' stroke='#DBDBDB' strokeWidth='0.5' />
      <path d='M14 16L10 12L14 8' stroke='#787878' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function IconVideoNext({width = 24, height = 24, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <rect
        x='-0.25'
        y='0.25'
        width='23.5'
        height='23.5'
        rx='11.75'
        transform='matrix(-1 0 0 1 23.5 0)'
        stroke='#DBDBDB'
        strokeWidth='0.5'
      />
      <path d='M10 16L14 12L10 8' stroke='#787878' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function IconVideoPlay({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <g clipPath='url(#clip0_3430_1968)'>
        <path
          d='M19.1666 11.6667L15.5 8.91671L16.5 7.58337L17.2733 8.16337C16.9294 6.80177 16.2101 5.56409 15.1973 4.59121C14.1845 3.61834 12.9189 2.94937 11.5446 2.66046C10.1703 2.37155 8.74245 2.47431 7.42366 2.95704C6.10487 3.43977 4.94811 4.28308 4.08507 5.39095C3.22202 6.49883 2.68737 7.82676 2.54198 9.22358C2.39659 10.6204 2.6463 12.03 3.26268 13.2918C3.87906 14.5537 4.83735 15.6172 6.02846 16.3611C7.21956 17.1051 8.59562 17.4997 9.99998 17.5C11.4597 17.5003 12.8878 17.0747 14.1093 16.2754C15.3307 15.476 16.2925 14.3378 16.8766 13L17.21 12.2359L18.7375 12.9034L18.4041 13.6667C17.6903 15.3017 16.515 16.693 15.0222 17.6699C13.5294 18.6469 11.784 19.167 9.99998 19.1667C4.93748 19.1667 0.833313 15.0625 0.833313 10C0.833313 4.93754 4.93748 0.833374 9.99998 0.833374C15.0625 0.833374 19.1666 4.93754 19.1666 10V11.6667ZM14.0025 10L7.91665 14.0575V5.94171L14.0025 10Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_3430_1968'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconLine({width = 2, height = 14, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none'>
      <path
        d='M2 0.5L1.65836 0.670821C0.642007 1.179 0 2.21779 0 3.3541V10.6459C0 11.7822 0.642007 12.821 1.65836 13.3292L2 13.5V0.5Z'
        fill={fill || theme.dpTheme}
      />
    </svg>
  );
}

export function IconArrow2({width = 8, height = 7, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 8 7' fill='none'>
      <path
        d='M5.23299 6.22033C4.63647 7.08134 3.36353 7.08134 2.76701 6.22033L0.434915 2.85424C-0.254305 1.85944 0.457678 0.5 1.66791 0.5L6.33209 0.5C7.54232 0.5 8.25431 1.85944 7.56509 2.85424L5.23299 6.22033Z'
        fill={fill || theme.dpTheme}
      />
    </svg>
  );
}

export function IconReturn({width = 20, height = 20, fill, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
      <rect width='20' height='20' fill='none' />
      <path
        d='M2.27083 9.99999L8.39583 16.125C8.60417 16.3333 8.705 16.5764 8.69833 16.8542C8.69167 17.1319 8.58389 17.375 8.375 17.5833C8.16667 17.7917 7.92361 17.8958 7.64583 17.8958C7.36806 17.8958 7.125 17.7917 6.91667 17.5833L0.5 11.1875C0.333334 11.0208 0.208333 10.8333 0.125 10.625C0.0416667 10.4167 0 10.2083 0 9.99999C0 9.79166 0.0416667 9.58333 0.125 9.37499C0.208333 9.16666 0.333334 8.97916 0.5 8.81249L6.91667 2.39583C7.125 2.18749 7.37167 2.08666 7.65667 2.09333C7.94167 2.09999 8.18806 2.20777 8.39583 2.41666C8.60417 2.62499 8.70833 2.86805 8.70833 3.14583C8.70833 3.42361 8.60417 3.66666 8.39583 3.87499L2.27083 9.99999Z'
        fill={theme.dpStrong}
      />
    </svg>
  );
}

export function IconAll({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 16 16' fill='none'>
      <path
        d='M4.20802 1C5.06442 1.00062 5.88554 1.34126 6.49089 1.94704C7.09623 2.55283 7.43628 3.37419 7.43628 4.23059V7.45885H4.20802C3.36655 7.43623 2.56714 7.08607 1.97996 6.4829C1.39279 5.87973 1.06423 5.0712 1.06423 4.22942C1.06423 3.38765 1.39279 2.57912 1.97996 1.97595C2.56714 1.37278 3.36655 1.02262 4.20802 1ZM4.20802 8.53649H7.43628V11.7659C7.43605 12.4049 7.24632 13.0295 6.8911 13.5607C6.53587 14.0918 6.0311 14.5057 5.44063 14.75C4.85017 14.9942 4.20052 15.0579 3.57386 14.9329C2.9472 14.808 2.37168 14.5 1.92008 14.0479C1.46848 13.5958 1.1611 13.0199 1.0368 12.3931C0.91251 11.7663 0.976887 11.1168 1.22179 10.5266C1.4667 9.93636 1.88114 9.43204 2.41269 9.07739C2.94424 8.72274 3.56902 8.53369 4.20802 8.53415V8.53649ZM11.7422 1C12.5836 1.02262 13.3831 1.37278 13.9702 1.97595C14.5574 2.57912 14.886 3.38765 14.886 4.22942C14.886 5.0712 14.5574 5.87973 13.9702 6.4829C13.3831 7.08607 12.5836 7.43623 11.7422 7.45885H8.51509V4.23059C8.51508 3.37439 8.85497 2.55321 9.46007 1.94745C10.0652 1.3417 10.886 1.00093 11.7422 1ZM8.51509 8.53649H11.7445C12.3835 8.53649 13.0082 8.72599 13.5394 9.08102C14.0707 9.43605 14.4848 9.94067 14.7293 10.5311C14.9738 11.1214 15.0377 11.7711 14.9129 12.3978C14.7882 13.0245 14.4804 13.6001 14.0285 14.0519C13.5765 14.5036 13.0008 14.8112 12.374 14.9357C11.7473 15.0603 11.0977 14.9961 10.5074 14.7514C9.91711 14.5067 9.41265 14.0925 9.0578 13.561C8.70296 13.0296 8.51369 12.4049 8.51392 11.7659V8.53415L8.51509 8.53649Z'
        fill='#65DEEB'
      />
    </svg>
  );
}

export function IconGoBack2({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.4001 3.19987L7.91997 8L14.4001 12.8001L14.4001 16L3.60015 8L14.4001 0V3.19987Z" fill="#798BB2"/>
      <path d="M14.4001 10.6667V5.33334L11.1601 8.00001L14.4001 10.6667Z" fill="#65DEEB"/>
    </svg>
  );
}

export function IconToggle({width = 16, height = 16, fill, active, theme}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 8" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.3998 0.399902L5.99988 4.72L9.59996 0.399902H12L6 7.5999L0 0.399902H2.3998Z" fill="#798BB2"/>
      <path d="M7.99988 0.399902H3.99988L5.99988 2.5599L7.99988 0.399902Z" fill="#65DEEB"/>
    </svg>
  );
}

export function IconExpand2({width = 24, height = 24, fill, active, theme}: SvgIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon-expand2'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M11.2467 1.00467C11.7128 0.735541 12.2872 0.735541 12.7533 1.00467L21.1456 5.84997C21.6117 6.11909 21.8989 6.61645 21.8989 7.1547V16.8453C21.8989 17.3836 21.6117 17.8809 21.1456 18.15L12.7533 22.9953C12.2872 23.2645 11.7128 23.2645 11.2467 22.9953L2.85441 18.15C2.38827 17.8809 2.10112 17.3835 2.10112 16.8453V7.1547C2.10112 6.61645 2.38827 6.11909 2.85441 5.84997L11.2467 1.00467Z'
        fill='url(#paint0_linear_71_363)'
        stroke='url(#paint1_linear_71_363)'
        strokeWidth='0.986842'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.5766 6.11007C11.7069 6.02466 11.8559 5.9906 12 6.00294C12.144 5.9906 12.2931 6.02466 12.4234 6.11007L17.1586 9.21454C17.4676 9.41709 17.5538 9.83174 17.3513 10.1407C17.1487 10.4496 16.7341 10.5359 16.4251 10.3333L12 7.43218L7.57482 10.3333C7.26587 10.5359 6.85122 10.4496 6.64867 10.1407C6.44612 9.83174 6.53237 9.41709 6.84132 9.21454L11.5766 6.11007ZM11.5766 11.888C11.7068 11.8025 11.8559 11.7685 11.9999 11.7808C12.144 11.7685 12.2931 11.8025 12.4233 11.888L17.1586 14.9924C17.4675 15.195 17.5538 15.6096 17.3512 15.9186C17.1487 16.2275 16.734 16.3138 16.4251 16.1112L11.9999 13.2101L7.57479 16.1112C7.26584 16.3138 6.85119 16.2275 6.64864 15.9186C6.44609 15.6096 6.53235 15.195 6.8413 14.9924L11.5766 11.888Z'
        fill='#65DEEB'
      />
      <defs>
        <linearGradient id='paint0_linear_71_363' x1='12' y1='0' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#798BB2' stopOpacity='0.4' />
          <stop offset='0.71' stopColor='#798BB2' stopOpacity='0.4' />
          <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
        </linearGradient>
        <linearGradient id='paint1_linear_71_363' x1='12' y1='9.50049' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#65DEEB' stopOpacity='0' />
          <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconExpand2Hover({width = 24, height = 24, fill, active, theme, className}: SvgIconProps) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      {hover ? (<>
        <path d="M12.7533 1.00467L21.1456 5.84997C21.6117 6.11909 21.8989 6.61645 21.8989 7.1547V16.8453C21.8989 17.3835 21.6117 17.8809 21.1456 18.15L12.7533 22.9953C12.2872 23.2645 11.7128 23.2645 11.2467 22.9953L2.85441 18.15C2.38827 17.8809 2.10112 17.3835 2.10112 16.8453V7.1547C2.10112 6.61645 2.38827 6.11909 2.85441 5.84997L11.2467 1.00467C11.7128 0.735541 12.2872 0.735541 12.7533 1.00467Z" fill="url(#paint0_linear_741_551)" stroke="url(#paint1_linear_741_551)" strokeWidth="0.986842"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.5766 6.11007C11.7069 6.02466 11.8559 5.9906 12 6.00294C12.144 5.9906 12.2931 6.02466 12.4234 6.11007L17.1586 9.21454C17.4676 9.41709 17.5538 9.83174 17.3513 10.1407C17.1487 10.4496 16.7341 10.5359 16.4251 10.3333L12 7.43218L7.57482 10.3333C7.26587 10.5359 6.85122 10.4496 6.64867 10.1407C6.44612 9.83174 6.53237 9.41709 6.84132 9.21454L11.5766 6.11007ZM11.5766 11.888C11.7068 11.8025 11.8559 11.7685 11.9999 11.7808C12.144 11.7685 12.2931 11.8025 12.4233 11.888L17.1586 14.9924C17.4675 15.195 17.5538 15.6096 17.3512 15.9186C17.1487 16.2275 16.734 16.3138 16.4251 16.1112L11.9999 13.2101L7.57479 16.1112C7.26584 16.3138 6.85119 16.2275 6.64864 15.9186C6.44609 15.6096 6.53235 15.195 6.8413 14.9924L11.5766 11.888Z" fill="#65DEEB"/>
        <defs>
          <linearGradient id="paint0_linear_741_551" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#798BB2" stopOpacity="0.7"/>
            <stop offset="0.71" stopColor="#798BB2" stopOpacity="0.7"/>
            <stop offset="1" stopColor="#65DEEB" stopOpacity="0.8"/>
          </linearGradient>
          <linearGradient id="paint1_linear_741_551" x1="12" y1="9.50049" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#65DEEB" stopOpacity="0.1"/>
            <stop offset="1" stopColor="#65DEEB" stopOpacity="0.7"/>
          </linearGradient>
        </defs></>
      ) : (
        <>
          <path
            d='M11.2467 1.00467C11.7128 0.735541 12.2872 0.735541 12.7533 1.00467L21.1456 5.84997C21.6117 6.11909 21.8989 6.61645 21.8989 7.1547V16.8453C21.8989 17.3836 21.6117 17.8809 21.1456 18.15L12.7533 22.9953C12.2872 23.2645 11.7128 23.2645 11.2467 22.9953L2.85441 18.15C2.38827 17.8809 2.10112 17.3835 2.10112 16.8453V7.1547C2.10112 6.61645 2.38827 6.11909 2.85441 5.84997L11.2467 1.00467Z'
            fill='url(#paint0_linear_71_363)'
            stroke='url(#paint1_linear_71_363)'
            strokeWidth='0.986842'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.5766 6.11007C11.7069 6.02466 11.8559 5.9906 12 6.00294C12.144 5.9906 12.2931 6.02466 12.4234 6.11007L17.1586 9.21454C17.4676 9.41709 17.5538 9.83174 17.3513 10.1407C17.1487 10.4496 16.7341 10.5359 16.4251 10.3333L12 7.43218L7.57482 10.3333C7.26587 10.5359 6.85122 10.4496 6.64867 10.1407C6.44612 9.83174 6.53237 9.41709 6.84132 9.21454L11.5766 6.11007ZM11.5766 11.888C11.7068 11.8025 11.8559 11.7685 11.9999 11.7808C12.144 11.7685 12.2931 11.8025 12.4233 11.888L17.1586 14.9924C17.4675 15.195 17.5538 15.6096 17.3512 15.9186C17.1487 16.2275 16.734 16.3138 16.4251 16.1112L11.9999 13.2101L7.57479 16.1112C7.26584 16.3138 6.85119 16.2275 6.64864 15.9186C6.44609 15.6096 6.53235 15.195 6.8413 14.9924L11.5766 11.888Z'
            fill='#65DEEB'
          />
          <defs>
            <linearGradient id='paint0_linear_71_363' x1='12' y1='0' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#798BB2' stopOpacity='0.4' />
              <stop offset='0.71' stopColor='#798BB2' stopOpacity='0.4' />
              <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
            </linearGradient>
            <linearGradient id='paint1_linear_71_363' x1='12' y1='9.50049' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#65DEEB' stopOpacity='0' />
              <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
            </linearGradient>
          </defs></>
      )}
    </svg>
  );
}

export function IconFullScreen2({width = 24, height = 24, fill, bg, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <path
        d='M11.2467 1.00467C11.7128 0.735541 12.2872 0.735541 12.7533 1.00467L21.1456 5.84997C21.6117 6.11909 21.8989 6.61645 21.8989 7.1547V16.8453C21.8989 17.3836 21.6117 17.8809 21.1456 18.15L12.7533 22.9953C12.2872 23.2645 11.7128 23.2645 11.2467 22.9953L2.85441 18.15C2.38827 17.8809 2.10112 17.3835 2.10112 16.8453V7.1547C2.10112 6.61645 2.38827 6.11909 2.85441 5.84997L11.2467 1.00467Z'
        fill='url(#paint0_linear_71_1039)'
        stroke='url(#paint1_linear_71_1039)'
        strokeWidth='0.986842'
      />
      <path
        d='M7 10.3333V7.95238C7 7.42639 7.4264 7 7.95238 7H10.3333'
        stroke='#65DEEB'
        strokeWidth='1.2381'
        strokeLinecap='round'
      />
      <path
        d='M17 10.3333V7.95238C17 7.42639 16.5736 7 16.0476 7H13.6667'
        stroke='#65DEEB'
        strokeWidth='1.2381'
        strokeLinecap='round'
      />
      <path
        d='M7 13.6667V16.0476C7 16.5736 7.4264 17 7.95238 17H10.3333'
        stroke='#65DEEB'
        strokeWidth='1.2381'
        strokeLinecap='round'
      />
      <path
        d='M17 13.6667V16.0476C17 16.5736 16.5736 17 16.0476 17H13.6667'
        stroke='#65DEEB'
        strokeWidth='1.2381'
        strokeLinecap='round'
      />
      <defs>
        <linearGradient id='paint0_linear_71_1039' x1='12' y1='0' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#798BB2' stopOpacity='0.4' />
          <stop offset='0.71' stopColor='#798BB2' stopOpacity='0.4' />
          <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
        </linearGradient>
        <linearGradient id='paint1_linear_71_1039' x1='12' y1='9.50049' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#65DEEB' stopOpacity='0' />
          <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconReload2({width = 24, height = 24, fill, bg, active, theme}: SvgIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M11.2467 1.00467C11.7128 0.735541 12.2872 0.735541 12.7533 1.00467L21.1456 5.84997C21.6117 6.11909 21.8989 6.61645 21.8989 7.1547V16.8453C21.8989 17.3836 21.6117 17.8809 21.1456 18.15L12.7533 22.9953C12.2872 23.2645 11.7128 23.2645 11.2467 22.9953L2.85441 18.15C2.38827 17.8809 2.10112 17.3835 2.10112 16.8453V7.1547C2.10112 6.61645 2.38827 6.11909 2.85441 5.84997L11.2467 1.00467Z'
        fill='url(#paint0_linear_602_840)'
        stroke='url(#paint1_linear_602_840)'
        strokeWidth='0.986842'
      />
      <path
        d='M8.553 7.0842C8.5842 7.065 8.613 7.0464 8.6388 7.029C9.63075 6.35689 10.8018 5.99839 12 6.00001C15.3138 6.00001 18 8.6862 18 12C18.0016 13.1225 17.687 14.2227 17.0922 15.1746C17.0744 15.203 17.0495 15.2263 17.0199 15.2422C16.9903 15.2581 16.9571 15.266 16.9236 15.2651C16.8901 15.2643 16.8573 15.2547 16.8286 15.2374C16.7999 15.22 16.7762 15.1955 16.7598 15.1662L15.2478 12.4458C15.2224 12.4001 15.2094 12.3486 15.21 12.2964C15.2106 12.2441 15.2249 12.1929 15.2514 12.1479C15.2779 12.1029 15.3157 12.0655 15.361 12.0396C15.4064 12.0136 15.4577 12 15.51 12H16.8C16.8002 11.1126 16.5544 10.2426 16.0899 9.48645C15.6254 8.73034 14.9604 8.1178 14.1688 7.71685C13.3771 7.3159 12.4899 7.14225 11.6055 7.21519C10.7211 7.28812 9.87425 7.60478 9.159 8.13C9.09765 8.17502 9.02743 8.20646 8.95299 8.22225C8.87856 8.23804 8.80161 8.23781 8.72727 8.22158C8.65293 8.20535 8.5829 8.17349 8.52182 8.12812C8.46073 8.08274 8.41001 8.02489 8.373 7.9584L8.3394 7.8984C8.26334 7.76129 8.2431 7.60012 8.28289 7.44846C8.32268 7.2968 8.41943 7.16632 8.553 7.0842ZM15.366 16.968C14.3731 17.6422 13.2002 18.0018 12 18C8.6862 18 6 15.3138 6 12C6 10.8756 6.3096 9.8232 6.8472 8.9238C6.87041 8.88488 6.90346 8.85275 6.94303 8.83066C6.9826 8.80857 7.02729 8.79729 7.07261 8.79796C7.11792 8.79863 7.16226 8.81122 7.20116 8.83447C7.24006 8.85772 7.27215 8.89081 7.2942 8.9304L8.7522 11.5542C8.77759 11.5999 8.79062 11.6514 8.78999 11.7036C8.78936 11.7559 8.77509 11.8071 8.7486 11.8521C8.72211 11.8971 8.68431 11.9345 8.63896 11.9604C8.5936 11.9864 8.54225 12 8.49 12H7.2C7.19998 12.8877 7.44612 13.758 7.91105 14.5142C8.37598 15.2703 9.0415 15.8828 9.83363 16.2834C10.6258 16.6841 11.5135 16.8572 12.3981 16.7836C13.2827 16.7099 14.1296 16.3925 14.8446 15.8664C14.9075 15.8194 14.9796 15.7862 15.0562 15.7689C15.1328 15.7515 15.2122 15.7504 15.2892 15.7657C15.3662 15.781 15.4392 15.8122 15.5034 15.8575C15.5676 15.9027 15.6215 15.961 15.6618 16.0284C15.749 16.1741 15.7757 16.348 15.7364 16.5132C15.697 16.6783 15.5947 16.8215 15.4512 16.9122C15.4229 16.9301 15.3949 16.9485 15.3672 16.9674L15.366 16.968Z'
        fill='#65DEEB'
      />
      <defs>
        <linearGradient id='paint0_linear_602_840' x1='12' y1='0' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#798BB2' stopOpacity='0.4' />
          <stop offset='0.71' stopColor='#798BB2' stopOpacity='0.4' />
          <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
        </linearGradient>
        <linearGradient id='paint1_linear_602_840' x1='12' y1='9.50049' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#65DEEB' stopOpacity='0' />
          <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconReload2Hover({width = 24, height = 24, fill, bg, active, theme}: SvgIconProps) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
      {hover ? (<>
        <path
          d='M11.2467 1.00467C11.7128 0.735541 12.2872 0.735541 12.7533 1.00467L21.1456 5.84997C21.6117 6.11909 21.8989 6.61645 21.8989 7.1547V16.8453C21.8989 17.3836 21.6117 17.8809 21.1456 18.15L12.7533 22.9953C12.2872 23.2645 11.7128 23.2645 11.2467 22.9953L2.85441 18.15C2.38827 17.8809 2.10112 17.3835 2.10112 16.8453V7.1547C2.10112 6.61645 2.38827 6.11909 2.85441 5.84997L11.2467 1.00467Z'
          fill='url(#paint0_linear_741_550)'
          stroke='url(#paint1_linear_741_550)'
          strokeWidth='0.986842'
        />
        <path
          d='M8.553 7.0842C8.5842 7.065 8.613 7.0464 8.6388 7.029C9.63075 6.35689 10.8018 5.99839 12 6.00001C15.3138 6.00001 18 8.6862 18 12C18.0016 13.1225 17.687 14.2227 17.0922 15.1746C17.0744 15.203 17.0495 15.2263 17.0199 15.2422C16.9903 15.2581 16.9571 15.266 16.9236 15.2651C16.8901 15.2643 16.8573 15.2547 16.8286 15.2374C16.7999 15.22 16.7762 15.1955 16.7598 15.1662L15.2478 12.4458C15.2224 12.4001 15.2094 12.3486 15.21 12.2964C15.2106 12.2441 15.2249 12.1929 15.2514 12.1479C15.2779 12.1029 15.3157 12.0655 15.361 12.0396C15.4064 12.0136 15.4577 12 15.51 12H16.8C16.8002 11.1126 16.5544 10.2426 16.0899 9.48645C15.6254 8.73034 14.9604 8.1178 14.1688 7.71685C13.3771 7.3159 12.4899 7.14225 11.6055 7.21519C10.7211 7.28812 9.87425 7.60478 9.159 8.13C9.09765 8.17502 9.02743 8.20646 8.95299 8.22225C8.87856 8.23804 8.80161 8.23781 8.72727 8.22158C8.65293 8.20535 8.5829 8.17349 8.52182 8.12812C8.46073 8.08274 8.41001 8.02489 8.373 7.9584L8.3394 7.8984C8.26334 7.76129 8.2431 7.60012 8.28289 7.44846C8.32268 7.2968 8.41943 7.16632 8.553 7.0842ZM15.366 16.968C14.3731 17.6422 13.2002 18.0018 12 18C8.6862 18 6 15.3138 6 12C6 10.8756 6.3096 9.8232 6.8472 8.9238C6.87041 8.88488 6.90346 8.85275 6.94303 8.83066C6.9826 8.80857 7.02729 8.79729 7.07261 8.79796C7.11792 8.79863 7.16226 8.81122 7.20116 8.83447C7.24006 8.85772 7.27215 8.89081 7.2942 8.9304L8.7522 11.5542C8.77759 11.5999 8.79062 11.6514 8.78999 11.7036C8.78936 11.7559 8.77509 11.8071 8.7486 11.8521C8.72211 11.8971 8.68431 11.9345 8.63896 11.9604C8.5936 11.9864 8.54225 12 8.49 12H7.2C7.19998 12.8877 7.44612 13.758 7.91105 14.5142C8.37598 15.2703 9.0415 15.8828 9.83363 16.2834C10.6258 16.6841 11.5135 16.8572 12.3981 16.7836C13.2827 16.7099 14.1296 16.3925 14.8446 15.8664C14.9075 15.8194 14.9796 15.7862 15.0562 15.7689C15.1328 15.7515 15.2122 15.7504 15.2892 15.7657C15.3662 15.781 15.4392 15.8122 15.5034 15.8575C15.5676 15.9027 15.6215 15.961 15.6618 16.0284C15.749 16.1741 15.7757 16.348 15.7364 16.5132C15.697 16.6783 15.5947 16.8215 15.4512 16.9122C15.4229 16.9301 15.3949 16.9485 15.3672 16.9674L15.366 16.968Z'
          fill='#65DEEB'/>
        <defs>
          <linearGradient id='paint0_linear_741_550' x1='12' y1='0' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#798BB2' stopOpacity='0.7'/>
            <stop offset='0.71' stopColor='#798BB2' stopOpacity='0.7'/>
            <stop offset='1' stopColor='#65DEEB' stopOpacity='0.8'/>
          </linearGradient>
          <linearGradient id='paint1_linear_741_550' x1='12' y1='9.50049' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#65DEEB' stopOpacity='0.1'/>
            <stop offset='1' stopColor='#65DEEB' stopOpacity='0.7'/>
          </linearGradient>
        </defs>
      </>) : (<>
        <path
          d='M11.2467 1.00467C11.7128 0.735541 12.2872 0.735541 12.7533 1.00467L21.1456 5.84997C21.6117 6.11909 21.8989 6.61645 21.8989 7.1547V16.8453C21.8989 17.3836 21.6117 17.8809 21.1456 18.15L12.7533 22.9953C12.2872 23.2645 11.7128 23.2645 11.2467 22.9953L2.85441 18.15C2.38827 17.8809 2.10112 17.3835 2.10112 16.8453V7.1547C2.10112 6.61645 2.38827 6.11909 2.85441 5.84997L11.2467 1.00467Z'
          fill='url(#paint0_linear_71_1038)'
          stroke='url(#paint1_linear_71_1038)'
          strokeWidth='0.986842'
        />
        <path
          d='M8.553 7.0842C8.5842 7.065 8.613 7.0464 8.6388 7.029C9.63075 6.35689 10.8018 5.99839 12 6.00001C15.3138 6.00001 18 8.6862 18 12C18.0016 13.1225 17.687 14.2227 17.0922 15.1746C17.0744 15.203 17.0495 15.2263 17.0199 15.2422C16.9903 15.2581 16.9571 15.266 16.9236 15.2651C16.8901 15.2643 16.8573 15.2547 16.8286 15.2374C16.7999 15.22 16.7762 15.1955 16.7598 15.1662L15.2478 12.4458C15.2224 12.4001 15.2094 12.3486 15.21 12.2964C15.2106 12.2441 15.2249 12.1929 15.2514 12.1479C15.2779 12.1029 15.3157 12.0655 15.361 12.0396C15.4064 12.0136 15.4577 12 15.51 12H16.8C16.8002 11.1126 16.5544 10.2426 16.0899 9.48645C15.6254 8.73034 14.9604 8.1178 14.1688 7.71685C13.3771 7.3159 12.4899 7.14225 11.6055 7.21519C10.7211 7.28812 9.87425 7.60478 9.159 8.13C9.09765 8.17502 9.02743 8.20646 8.95299 8.22225C8.87856 8.23804 8.80161 8.23781 8.72727 8.22158C8.65293 8.20535 8.5829 8.17349 8.52182 8.12812C8.46073 8.08274 8.41001 8.02489 8.373 7.9584L8.3394 7.8984C8.26334 7.76129 8.2431 7.60012 8.28289 7.44846C8.32268 7.2968 8.41943 7.16632 8.553 7.0842ZM15.366 16.968C14.3731 17.6422 13.2002 18.0018 12 18C8.6862 18 6 15.3138 6 12C6 10.8756 6.3096 9.8232 6.8472 8.9238C6.87041 8.88488 6.90346 8.85275 6.94303 8.83066C6.9826 8.80857 7.02729 8.79729 7.07261 8.79796C7.11792 8.79863 7.16226 8.81122 7.20116 8.83447C7.24006 8.85772 7.27215 8.89081 7.2942 8.9304L8.7522 11.5542C8.77759 11.5999 8.79062 11.6514 8.78999 11.7036C8.78936 11.7559 8.77509 11.8071 8.7486 11.8521C8.72211 11.8971 8.68431 11.9345 8.63896 11.9604C8.5936 11.9864 8.54225 12 8.49 12H7.2C7.19998 12.8877 7.44612 13.758 7.91105 14.5142C8.37598 15.2703 9.0415 15.8828 9.83363 16.2834C10.6258 16.6841 11.5135 16.8572 12.3981 16.7836C13.2827 16.7099 14.1296 16.3925 14.8446 15.8664C14.9075 15.8194 14.9796 15.7862 15.0562 15.7689C15.1328 15.7515 15.2122 15.7504 15.2892 15.7657C15.3662 15.781 15.4392 15.8122 15.5034 15.8575C15.5676 15.9027 15.6215 15.961 15.6618 16.0284C15.749 16.1741 15.7757 16.348 15.7364 16.5132C15.697 16.6783 15.5947 16.8215 15.4512 16.9122C15.4229 16.9301 15.3949 16.9485 15.3672 16.9674L15.366 16.968Z'
          fill='#65DEEB'
        />
        <defs>
          <linearGradient id='paint0_linear_71_1038' x1='12' y1='0' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#798BB2' stopOpacity='0.4' />
            <stop offset='0.71' stopColor='#798BB2' stopOpacity='0.4' />
            <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
          </linearGradient>
          <linearGradient id='paint1_linear_71_1038' x1='12' y1='9.50049' x2='12' y2='24' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#65DEEB' stopOpacity='0' />
            <stop offset='1' stopColor='#65DEEB' stopOpacity='0.5' />
          </linearGradient>
        </defs>
      </>)}
    </svg>
  );
}

export function IconHexagon({width, height}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 84 26`} fill="none">
      <g filter="url(#filter0_i_944_1204)">
        <path d="M82.6065 10.835C83.4552 12.1535 83.4552 13.8463 82.6065 15.1649L76.8136 24.1648C76.0774 25.3086 74.8103 25.9998 73.4501 25.9999L10.5499 26C9.18966 26 7.92264 25.3087 7.18642 24.1649L1.3935 15.165C0.544807 13.8465 0.544807 12.1537 1.3935 10.8351L7.18643 1.8352C7.92265 0.691411 9.18966 0.000148533 10.5499 0.000145484L73.4501 4.52483e-06C74.8104 1.47651e-06 76.0774 0.691264 76.8136 1.83506L82.6065 10.835Z" fill="#22293C"/>
      </g>
      <path d="M82.1861 11.1056C82.9287 12.2593 82.9287 13.7405 82.1861 14.8943L76.3931 23.8942C75.749 24.895 74.6403 25.4998 73.4501 25.4999L10.5499 25.5C9.35969 25.5 8.25105 24.8951 7.60686 23.8943L1.81393 14.8944C1.07133 13.7407 1.07133 12.2595 1.81393 11.1057L7.60686 2.10581C8.25105 1.105 9.35969 0.500148 10.5499 0.500146L73.4501 0.500005C74.6403 0.500002 75.749 1.10486 76.3932 2.10567L82.1861 11.1056Z" stroke="#55AEBF"/>
      <defs>
        <filter id="filter0_i_944_1204" x="0.756989" y="0" width="82.486" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="3"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.682353 0 0 0 0 0.74902 0 0 0 1 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_944_1204"/>
        </filter>
      </defs>
    </svg>
  );
}

export function IconLeftCaret2({width = 18, height = 16, fill, bg, active, theme}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.4001 3.19987L7.91997 8L14.4001 12.8001L14.4001 16L3.60015 8L14.4001 0V3.19987Z" fill="#798BB2"/>
      <path d="M14.4001 10.6666V5.33331L11.1601 7.99998L14.4001 10.6666Z" fill="#65DEEB"/>
    </svg>
  );
}

export function IconDownCaret2({width = 12, height = 12, fill, bg, active, theme}: SvgIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 12" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.3998 2.40039L5.99988 6.72049L9.59996 2.40039H12L6 9.60039L0 2.40039H2.3998Z" fill="#798BB2"/>
      <path d="M8 2.40039H4L6 4.56039L8 2.40039Z" fill="#65DEEB"/>
    </svg>
  );
}

export function IconLockCircle({width = 14, height = 16, fill, bg, active, theme}: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6 4.90909H10.64V3.54545C10.64 2.60514 10.2565 1.70334 9.57387 1.03844C8.89124 0.373538 7.96539 0 7 0C6.03461 0 5.10876 0.373538 4.42613 1.03844C3.7435 1.70334 3.36 2.60514 3.36 3.54545V4.90909H1.4C1.0287 4.90909 0.672601 5.05276 0.41005 5.30849C0.1475 5.56422 0 5.91107 0 6.27273V13.9091C0 14.2708 0.1475 14.6176 0.41005 14.8733C0.672601 15.1291 1.0287 15.2727 1.4 15.2727H12.6C12.9713 15.2727 13.3274 15.1291 13.5899 14.8733C13.8525 14.6176 14 14.2708 14 13.9091V6.27273C14 5.91107 13.8525 5.56422 13.5899 5.30849C13.3274 5.05276 12.9713 4.90909 12.6 4.90909ZM5.04 3.54545C5.04 3.03913 5.2465 2.55355 5.61407 2.19552C5.98164 1.8375 6.48018 1.63636 7 1.63636C7.51982 1.63636 8.01836 1.8375 8.38593 2.19552C8.7535 2.55355 8.96 3.03913 8.96 3.54545V4.90909H5.04V3.54545ZM12.32 13.6364H1.68V6.54545H12.32V13.6364ZM8.12 10.0909C8.12 10.3067 8.05431 10.5176 7.93125 10.697C7.80818 10.8764 7.63326 11.0162 7.42861 11.0988C7.22395 11.1813 6.99876 11.203 6.7815 11.1609C6.56424 11.1188 6.36468 11.0149 6.20804 10.8623C6.05141 10.7097 5.94474 10.5154 5.90152 10.3037C5.8583 10.0921 5.88048 9.87277 5.96525 9.67344C6.05002 9.4741 6.19358 9.30372 6.37776 9.18385C6.56194 9.06398 6.77848 9 7 9C7.29704 9 7.58192 9.11493 7.79196 9.31952C8.002 9.52411 8.12 9.80158 8.12 10.0909Z" fill="#798BB2"/>
    </svg>
  );
}
