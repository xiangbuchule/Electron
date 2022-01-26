@REM 禁止默认输出
@echo off
@REM 跳过方法
goto:skipFunction
@REM 判断目录是否存在，存在就输出并删除
:deleteFunction
    if not "%1" == "" if exist "%cd%\%1" (
        echo delete : "%cd%\%1"
        rd /s /q "%cd%\%1"
    )
goto:eof
:skipFunction
@REM 设置当前路径
set nowPath=%cd%
@REM 进入该脚本路径
cd /d %~dp0
@REM 查找out release目录并删除
call:deleteFunction out
call:deleteFunction release
call:deleteFunction db
@REM cd还原回去原来的路径
cd /d %nowPath%