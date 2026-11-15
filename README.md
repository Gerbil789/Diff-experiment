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

or

```
nohup ./server/build/server > server.log 2>&1 &
```

to keep it running
