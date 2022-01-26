export const createSysLogTable = `DROP TABLE IF EXISTS sys_log;
                                CREATE TABLE sys_log (
                                    id            INTEGER  PRIMARY KEY AUTOINCREMENT
                                                        UNIQUE
                                                        NOT NULL,
                                    user_name     VARCHAR  NOT NULL,
                                    user_password VARCHAR  NOT NULL,
                                    user_sex      TINYINT,
                                    state         TINYINT  NOT NULL
                                                        DEFAULT (1),
                                    create_time   DATETIME NOT NULL,
                                    update_time   DATETIME NOT NULL
                                );`;
