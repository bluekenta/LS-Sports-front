import usePublicState from '@core/hooks/usePublicState';
import {undecodeData} from '@helpers/unit';
import {TMitt} from '@constants/enum/mitt';

export type TVideo = {
  sourceName: string;
  srouceUrl: string;
  screenshot: string;
  m3u8: string;
}

interface IProps{
  videoId: string | number;
  matchId: number;
}
export default ({videoId, matchId}: IProps) => {
  const [available, setAvailable] = React.useState([]);
  const {dispatch, ACTIONS} = usePublicState();
  const [data, setData] = React.useState<{
    videos: Array<TVideo>;
    animation: string;
  }>(null);

  React.useEffect(() => {
    if (!videoId && !matchId) {
      setData(null);
      setAvailable([]);
      return;
    }

    const params = videoId ? {videoId} : {eid: matchId};
    dispatch(ACTIONS.SPORT.getMatchVideos({params, cb: (res: any) => {
      const data = undecodeData(res.x1);
      _console.log('## MATCH MEDIA INFOS: ', data);
      const videos = data?.list?.map((item: any) => ({
        sourceName: item.name,
        srouceUrl: decodeURIComponent(_.chain(item.flv_url).split('.html?url=').last().value()),
        screenshot: item.screenshot,
        m3u8: decodeURIComponent(_.chain(item.play_url).split('.html?url=').last().value()),
      }));
      setData({
        videos,
        animation: data.animation_url,
      });
      const canUse:TMitt['syncMediaSelected']['selected'][] = [];
      if (videos?.length > 0) {
        canUse.push('video');
      }
      if (data.animation_url) {
        canUse.push('animation');
      }
      setAvailable(canUse);
    }}));
  }, [videoId, matchId]);

  return {
    mediaData: data,
    mediaAvailableStatus: available,
  };
};
