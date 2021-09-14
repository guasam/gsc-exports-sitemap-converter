@echo off
set target_dir=%cd%
:: Open new Windows Terminal window in Quake mode with target directory;
:: Split a new vertical pane with target directory
wt -w _quake -d %target_dir%; sp -V -d %target_dir%