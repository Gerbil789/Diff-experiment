One app that acts as http client for the client, and also as backend


## Build

```
mkdir -p build && cd build
cmake -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ..
make -j$(nproc)
```

## Run

- Run from the project root!

```
./server/build/server
```