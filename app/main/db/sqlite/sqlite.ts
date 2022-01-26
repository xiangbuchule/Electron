import fs from 'fs';
import path from 'path';
import sqlite from 'sqlite3';

// 设置db文件位置
const dbFilePath: string = path.join(__dirname, '../../db/sys.db');
/**
 * 如果目录不存在创建，方便打开db时创建db
 * 如果目录不存在，创建db会失败
 */
if (!fs.existsSync(dbFilePath)) {
    fs.mkdirSync(path.dirname(dbFilePath));
}

class Sqlite {
    // 数据库路径
    dbPath: string;
    // 连接信息
    dbConnect: Promise<sqlite.Database>;
    // 构造函数
    constructor(dbPath: string) {
        this.dbPath = dbPath;
        this.dbConnect = this.connect();
    }

    // 连接数据库
    connect(): Promise<sqlite.Database> {
        return null === this.dbConnect || typeof this.dbConnect === 'undefined'
            ? new Promise((resolve, reject): void => {
                  const connect: sqlite.Database = new sqlite.Database(
                      this.dbPath,
                      (err: Error | null): void => {
                          if (null !== err) {
                              reject(err);
                          }
                      },
                  );
                  resolve(connect);
              })
            : this.dbConnect;
    }

    /**
     * 执行单个sql, 不带参数、回调
     * 也无数据返回
     */
    run(sql: string): Promise<sqlite.RunResult> {
        /**
         * 首先判断是否获得了数据库连接
         * 如果没有获得就去获取
         */
        if (null === this.dbConnect) {
            this.dbConnect = this.connect();
        }
        return new Promise((resolve, reject): void => {
            this.dbConnect
                .then((connect: sqlite.Database): void => {
                    connect.run(sql, (runResult: sqlite.RunResult, err: Error | null): void => {
                        if (null === err) {
                            resolve(runResult);
                        } else {
                            reject(err);
                        }
                    });
                })
                .catch((err: Error): void => {
                    reject(err);
                });
        });
    }
}

export default Sqlite;
