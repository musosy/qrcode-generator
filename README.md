# qrcode-generator

A simple RWAR (Rust WAsm and React) app to generator a QRCode given an url

# About

This app is composed by 2 folders:
- libs: it is a Cargo Workspace containing the custom libraries built in Rust
- client: a React App (ts) using those libraries

Those two folders are orchestrated by a Makefile simply calling either the yarn commands defined in the client/package.json file or the commands in libs/Makefile

# Commands

To build the libraries run:
```bash
make build-wasm
```
It will compile each library to a wasm package that can be used by the client

To build the client run:
```bash
make build-client
```

To run the client:
```bash
make start
```

To format code:
```bash
make pretty
```