import $t from '@core/helpers/i18n';

interface IProps{
  children:React.ReactNode,
  kw?: string,
  params?: {
    [key: string]: any
  }
}
export default ({children, params = {}, kw = ''}: IProps) => (
  $t(<>{children}</>, params, {kw})
);
