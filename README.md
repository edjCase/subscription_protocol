# Overview

# Package

## Vessel

# API

# Library Devlopment:

## First time setup

To build the library, the `Vessel` library must be installed. It is used to pull down packages and locate the compiler for building.

https://github.com/dfinity/vessel

## Building

To build, run the `./build.sh` file. It will output wasm files to the `./build` directory

## Testing

To run tests, use the `./test.sh` file.
The entry point for all tests is `test/Tests.mo` file
It will compile the tests to a wasm file and then that file will be executed.
Currently there are no testing frameworks and testing will stop at the first broken test. It will then output the error to the console

// "internet_identity": {
// "**0": "The development build of Internet Identity. For more information, see https://github.com/dfinity/internet-identity#build-features-and-flavors",
// "type": "custom",
// "candid": "https://github.com/dfinity/internet-identity/releases/latest/download/internet_identity.did",
// "wasm": "https://github.com/dfinity/internet-identity/releases/latest/download/internet_identity_dev.wasm",
// "**1": "Currently, dfx tries to shrink already optimized wasm modules. This is why we disable it here.",
// "shrink": false,
// "build": []
// }
