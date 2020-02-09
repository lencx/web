#!/usr/bin/env bash

# build
cd rust/genfile && cargo build --release

# copy genfile to /bin directories
cp target/release/genfile ../../bin && cd ...