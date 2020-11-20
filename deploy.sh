#!/bin/bash
# Publishes site via SSH
# TODO: Compress site to tar.gz, scp that, then extract on server

scp -r out/* kweave.net:~/www/