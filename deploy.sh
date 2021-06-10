#!/bin/bash
# Publishes site via SSH

# Immediately exits script if any command gives non-zero status
set -e

tar -czf out.tar.gz -C out .
scp -r out.tar.gz kweave.net:~/www.tar.gz
ssh kweave.net 'tar -zxf www.tar.gz -C www'
