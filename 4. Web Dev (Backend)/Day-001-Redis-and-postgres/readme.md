# Redis
Redis is like session storage or local storage that stores a huge JSON object [json object is `key:"value"` pair]<br>

## Installation of Redis

Linux : 
```
apt-get redis
``` 
MacOS : 
```
brew install redis
``` 
Windows: 
```
(switch to linux, then install) or (unofficial) go to https://github.com/microsoftarchive, then 'redis' Repo, then download the zip file of latest version from there.
```

### To Start Redis server(for windows)
```
redis-server
```

### To Start Redis Cli (common for all)
```
redis-cli
```

### Operations

```
SET name Riya  -> OK
GET name  -> "Riya"
SET age 30  -> OK
GET age  -> "30"
DEL age  -> (integer)1 [here 1 says, 1 value deleted]
EXISTS name  -> (integer)1
KEYS *  -> 1) "name"
```