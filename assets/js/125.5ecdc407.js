(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{615:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"ref-ref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ref-ref"}},[s._v("#")]),s._v(" Ref {#ref}")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.dockerinfo.net/fig%e9%a1%b9%e7%9b%ae%e4%bb%8b%e7%bb%8d",target:"_blank",rel:"noopener noreferrer"}},[s._v("Fig项目介绍"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://www.dockerinfo.net/docker-compose-%e9%a1%b9%e7%9b%ae",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Compose 项目"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"fig-fig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fig-fig"}},[s._v("#")]),s._v(" Fig {#fig}")]),s._v(" "),t("h3",{attrs:{id:"introduction-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-introduction"}},[s._v("#")]),s._v(" introduction {#introduction}")]),s._v(" "),t("p",[s._v("Docker Compose 的前身是 Fig。")]),s._v(" "),t("p",[s._v("Fig 是一个基于 Docker 的 Python 工具，允许用户基于一个 YAML 文件定义多容器应用，从而可以使用 fig 命令行工具进行应用的部署。")]),s._v(" "),t("p",[s._v("内部实现上，Fig 会解析 YAML 文件，并通过 Docker API 进行应用的部署和管理。")]),s._v(" "),t("p",[s._v("在 2014 年，Docker 公司收购了 Orchard 公司，并将 Fig 更名为 Docker Compose。and Compose 向下兼容 Fig。")]),s._v(" "),t("h3",{attrs:{id:"install-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-install"}},[s._v("#")]),s._v(" install {#install}")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法一：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://github.com/docker/fig/releases/download/1.0.1/fig-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v("\n-s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/fig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/fig\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法二：")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-pip python-dev\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -U fig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"useage-useage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useage-useage"}},[s._v("#")]),s._v(" useage {#useage}")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\nfig up      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nfig up -d   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动并后台运行")]),s._v("\nfig stop    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\nfig logs    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志")]),s._v("\nfig port    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口")]),s._v("\nfig --version\npip uninstall fig  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载Fig:")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"compose-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-compose"}},[s._v("#")]),s._v(" Compose {#compose}")]),s._v(" "),t("h3",{attrs:{id:"introduction-introduction-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-introduction-2"}},[s._v("#")]),s._v(" introduction {#introduction}")]),s._v(" "),t("p",[s._v("Docker Compose 并不是通过脚本和各种冗长的 docker 命令来将应用组件组织起来，而是通过一个声明式的配置文件描述整个应用，从而使用一条命令完成部署。")]),s._v(" "),t("p",[s._v("Compose 中有两个重要的概念：")]),s._v(" "),t("ul",[t("li",[s._v("服务 ( service )：⼀个应⽤的容器，实际上可以包括若⼲运⾏相同镜像的容器实例")]),s._v(" "),t("li",[s._v("项⽬ ( project )：由⼀组关联的应⽤容器组成的⼀个完整业务单元，在 docker-compose.yml⽂件中定义")])]),s._v(" "),t("h3",{attrs:{id:"install-install-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-install-2"}},[s._v("#")]),s._v(" install {#install}")]),s._v(" "),t("p",[s._v("install via python-pip tool.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-pip\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -U "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"commands-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands-commands"}},[s._v("#")]),s._v(" commands {#commands}")]),s._v(" "),t("div",{staticClass:"language-cfg line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker-compose 命令 --help                     获得一个命令的帮助\ndocker-compose version\ndocker-compose up -d nginx                     构建启动 nignx 容器\ndocker-compose exec nginx bash                 登录到 nginx 容器中\ndocker-compose down                            此命令将会停止 up 命令所启动的容器，并移除网络\ndocker-compose ps                              列出项目中目前的所有容器\ndocker-compose restart nginx                   重新启动 nginx 容器\ndocker-compose build nginx                     构建镜像\ndocker-compose build --no-cache nginx          不带缓存的构建\ndocker-compose top                             查看各个服务容器内运行的进程\ndocker-compose logs -f nginx                   查看 nginx 的实时日志\ndocker-compose images                          列出 Compose 文件包含的镜像\ndocker-compose config                          验证文件配置，当配置正确时，不输出任何内容，当文件配置错误，输出错误信息。\ndocker-compose events --json nginx             以 json 的形式输出 nginx 的 docker 日志\ndocker-compose pause nginx                     暂停 nignx 容器\ndocker-compose unpause nginx                   恢复 ningx 容器\ndocker-compose rm nginx                        删除容器（删除前必须关闭容器，执行 stop）\ndocker-compose stop nginx                      停止 nignx 容器\ndocker-compose start nginx                     启动 nignx 容器\ndocker-compose restart nginx                   重启项目中的 nignx 容器\ndocker-compose run --no-deps --rm php-fpm php -v   在 php-fpm 中不启动关联容器，并容器执行 php -v 执行完成后删除容器\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"compose-tamplate-compose-tamplate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compose-tamplate-compose-tamplate"}},[s._v("#")]),s._v(" compose tamplate {#compose-tamplate}")]),s._v(" "),t("h3",{attrs:{id:"instance-example-instance-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instance-example-instance-example"}},[s._v("#")]),s._v(" instance(example) {#instance--example}")]),s._v(" "),t("h4",{attrs:{id:"需求-需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求-需求"}},[s._v("#")]),s._v(" 需求 {#需求}")]),s._v(" "),t("p",[s._v("一个项目需要用 docker 部署 mysql,并且 mysql 的 项目数据库名：mproject,帐号：mao,密码为 mao123,端口为：33307")]),s._v(" "),t("h4",{attrs:{id:"方法-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法-方法"}},[s._v("#")]),s._v(" 方法 {#方法}")]),s._v(" "),t("p",[s._v("mysql 默认帐号为 root,常用两种方案新增用户修改密码:")]),s._v(" "),t("ul",[t("li",[s._v("方式一：在容器启动时通过初始化 sql 新增用户名 mao 和密码 mao123")]),s._v(" "),t("li",[s._v("方式二：在容器启动之后进入 mysql,新增用户名 mao 和密码 mao123")]),s._v(" "),t("li",[s._v("recommend "),t("a",{attrs:{href:"#compose-tamplate"}},[s._v("compose tamplate")])])]),s._v(" "),t("h3",{attrs:{id:"example-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-example"}},[s._v("#")]),s._v(" example {#example}")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 33307"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("                             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将外部端口33307映射为内部默认创建的3306")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data/mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将容器中运行的mysql数据保存到宿主机，防止容器删除后数据丢失")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./init"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("entrypoint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("initdb.d/    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/docker-entrypoint-initdb.d/这是数据库提供的初始化目录，数据库在启动时会默认执行当期目录下的以.sql或者.sh结尾的文件。")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库初始话为root用户设置的默认密码")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_DATABASE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mproject                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库名")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mao                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自定义数据库的用户，权限只作用于MYSQL_DATABASE配置的数据库")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mao123                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自定义数据库的用户，权限只作用于MYSQL_DATABASE配置的数据库")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("failure                    \t  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启条件")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" my_pro\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("my_pro")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridge\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("subnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.0.0/16   \t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置子网")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);