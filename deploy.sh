#!/bin/bash
# Publishes site via SSH

tar -czf out.tar.gz -C out .
scp -r out.tar.gz kweave.net:~/www.tar.gz
ssh kweave.net 'tar -zxf www.tar.gz -C www'
