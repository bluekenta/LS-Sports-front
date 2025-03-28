import {createPortal} from 'react-dom';
import css from './overlay.scss';

interface IProps {
  children: any,
  display: boolean,
  hasMask?: boolean,
  zIndex?: number,
  close?: Function,
  closeOnClickBlank?: boolean;
  containerStyle?: React.CSSProperties;
  containerClassname?: string
  maskClickClose?: boolean;
}

const Overlay = ({
  children, display, zIndex, close, closeOnClickBlank = true, containerStyle, containerClassname, hasMask = false, maskClickClose,
}: IProps) => {
  const thisNode = React.useRef<any>(document.createElement('div'));
  thisNode.current.className = `${css.wrapper} ${display ? 'block' : 'hidden'} global-overlay ${hasMask ? 'hasMask' : ''}`;
  if (zIndex === 0) {
    thisNode.current.style.zIndex = 0;
  } else {
    thisNode.current.style.zIndex = zIndex || 10;
  }

  // 使用Portal脱离文档流
  React.useEffect(() => {
    document.body.appendChild(thisNode.current);
    return () => {
      window.document.body.removeChild(thisNode.current);
    };
  }, []);

  return (
    createPortal(
        <div style={containerStyle} className={containerClassname} onClick={() => maskClickClose && close()}>
          { hasMask && close && display && closeOnClickBlank && <div className="close" onClick={() => close()} /> }
          { display && children }
        </div>,
        thisNode.current,
    )
  );
};

export default Overlay;
