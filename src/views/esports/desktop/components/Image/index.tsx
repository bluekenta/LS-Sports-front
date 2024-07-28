import {ImageProps} from 'antd';
import DpIcon from '../Icon';
import {useMemo} from 'react';
import {ESportType} from '@core/constants/enum/sport';
import {isEsportsById} from '@core/utils';
import G from '@constants/global';
interface IProps extends ImageProps {
  type?: 'league' | 'team';
  size?: number;
  active?: boolean;
  sportId?: number;
  src?: string;
}

const DpImage = (props: IProps) => {
  const sid = props.sportId;
  const [imgSrc, setImgSrc] = React.useState(props.src);
  const imgName = React.useMemo(() => {
    if (!props.src) return '';
    const arr = props.src.split('/');
    return arr[arr.length - 1];
  }, [props.src]);
  React.useEffect(() => {
    if (props.src) {
      const imgEl = document.createElement('img');
      imgEl.src = props.src;
      imgEl.onerror = () => {
        setImgSrc('');
        G.SET('ERROR_IMG', {...G.GET('ERROR_IMG'), [imgName]: true});
      };
    }
  }, [props.src]);
  const errNode = useMemo(() => {
    switch (props.type) {
      case 'league':
        return <DpIcon className={props.className} type="league" width={props.size} height={props.size} />;
      case 'team':
        const {size = 20, active} = props;
        if (isEsportsById(sid)) {
          const map: Record<number, string> = {
            [ESportType.LOL]: 'lol',
            [ESportType.DOTA]: 'dota',
            [ESportType.KING]: 'king',
            [ESportType.CSGO]: 'csgo',
            [ESportType.VALORANT]: 'val',
            [ESportType.Overwatch]: 'over',
          };
          return <img width={size} src={require(`@my/assets/images/sport-icons/${map[sid] ? sid : ESportType.LOL}-u.webp`)} alt='' className={props.className} />;
        }
        return <DpIcon active={active} width={size} height={size} className={props.className} type="team" />;
    }
  }, [props.type, props.active, sid]);
  return (imgSrc && !G.GET('ERROR_IMG')[imgName]) ? <img className={props.className} width={props.width || props.size} height={props.height || props.size} src={props.src} /> : errNode;
};

export default React.memo(DpImage);
