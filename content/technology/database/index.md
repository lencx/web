---
title: Database
date: 2020-07-24
type: technology
category:
spoiler:
tags:
# readtime:
---

* 响应时间：系统对请求做出响应的时间，一般取平均响应时间
* 吞吐量：单位时间内处理的请求数量
* QPS：每秒处理的查询次数
* TPS：每秒处理的事务数
* 并发用户数：同时承载正常使用系统功能的用户数量

### 数据库的架构设计中主要有三种方法论

* `Shared Everything`: 一般是针对单个系统，完全透明共享 CPU/MEMORY/IO，并行处理能力是最差的，典型的代表 SQL Server
* `Shared Nothing`: 系统中的各个处理单元都有私有的 CPU/MEMORY/IO 等，不存在共享资源，类似于 MPP（大规模并行处理）模式，各处理单元之间相互独立，各自处理自己的数据，它们之间通过协议通信，处理后的结果或向上层汇总或在节点间流转。这种方式的并行处理和扩展能力更好。典型的代表 DB2 DPF、Hadoop、GreenPlum 等
* `Shared Disk`: 系统中的各个处理单元使用私有 CPU 和 MEMORY，共享磁盘系统。典型的代表 Oracle Rac、AWS Aurora 和极数云舟自主研发的 ArkDB 等，它们都是数据共享，可通过增加节点来提高并行处理的能力，做到了计算与存储分离，扩展能力较好

### 数据库

* MySQL
* Oracle
* SQL Server
* DB2
* MongoDB
* PostgreSQL
* ArkDB

### 消息队列

* ActiveMQ
* RabbitMQ
* Kafka
* RocketMQ
* MemcacheQ

### 搜索引擎

* ES
* Solr
* Sphinx

### KV存储

* Pika
* Aerospike

### 缓存

* Memcached
* Redis
* Codis

### 数据同步ETL

* Arkgate
* Goldengate
* go-mysql
* DataX
* Canal

### 中间件