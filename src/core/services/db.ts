import Dexie from 'dexie';
import CONFIG from '@this/configs';
import {TMatch} from './Table.d';

// 继承 Dexie 并声明表的类型
class SportsDatabase extends Dexie {
  public matches: Dexie.Table<TMatch, number>;

  constructor() {
    super(CONFIG.SPORT.DATABASE_NAME);
    // this.version(CONFIG.SPORT.DATABASE_VERSION).stores({
    this.version(Date.now()).stores({
      matches: 'matchId,updateTime,leagueId',
    });
    this.matches = this.table('matches');
  }
}

// 创建数据库实例
const db = new SportsDatabase();

export default db;
