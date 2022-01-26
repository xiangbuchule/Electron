#!/bin/bash
# 该脚本文件所处路径
thisShellFilePath=$(cd "$(dirname "$0")";pwd)
# 需要删除的目录
dictionaries=`find $thisShellFilePath -type d \
              -name 'out' \
              -or -name 'release' \
              -or -name 'db'
# 如果不为空就删除
if [[ "$dictionaries" != '' ]];then
    oldIFS=$IFS
    IFS=$'\n'
    for dictionary in $dictionaries
    do
        # 输出删除了那些目录
        echo "delete : $dictionary"
        rm -rf $dictionary
    done
    IFS=$oldIFS
fi