# 应用层 Application Layer

- 应用层原理
- Web & HTTP
- FTP
- Email
  - SMTP
  - POP3
  - IMAP
- DNS
- P2P应用
- CDN

## 可能的应用架构

- 客户端/服务器模式 C/S Client/Server
  - 服务器一直运行、有固定的IP和约定好的端口号，客户端主动与服务器通信
  - 客户端间歇性和服务器通信、可能是动态IP、不直接与其他客户端通信
  - 服务器可扩展性差、遇到性能瓶颈时服务能力断崖式下跌
- 对等模式 P2P Peer To Peer
  - 几乎没有一直运行的服务器
  - 任意端之间可以互相通信
  - 每一个节点既是服务器又是客户端，具有自扩展性：每新增一个peer带来新的服务能力和服务请求
  - 每个主机间歇性连接且IP可变，难以管理
- 混合模式
  - 多种服务模式混合，例如：[Napster](https://zhuanlan.zhihu.com/p/457122646)
