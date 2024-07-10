import KeepAlive from 'react-activation';

interface IKeepLiveProps {
  children: React.ReactNode;
  cacheKey: string;
}
export default ({cacheKey, children}: IKeepLiveProps) => {
  return (
    <KeepAlive cacheKey={cacheKey}>
      {children}
    </KeepAlive>
  );
};
