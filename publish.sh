#!/bin/bash

cp ~/Nextcloud/Documents/Resume/out/Resume\ -\ Kyle\ Weaver.pdf resume.pdf
cp ~/Nextcloud/Documents/Resume/out/Resume\ -\ Kyle\ Weaver.html resume.html
scp {*.html,*.pdf} kweave.net:~/www/