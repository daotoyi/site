(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{607:function(s,e,n){"use strict";n.r(e);var t=n(20),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Remote_XDMCP(RedHat6.6)")]),s._v(" "),n("p",[s._v("[toc]")]),s._v(" "),n("h1",{attrs:{id:"linux-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-配置"}},[s._v("#")]),s._v(" Linux 配置")]),s._v(" "),n("h2",{attrs:{id:"etc-gdm-custom-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etc-gdm-custom-conf"}},[s._v("#")]),s._v(" "),n("strong",[s._v("/etc/gdm/custom.conf")])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("[daemon]\nRemoteGreeter=/usr/libexec/gdm-simple-greeter\n\n[security]\nAllowRemoteRoot=true\n\n[xdmcp]\nEnable=1\nPort=177\nDisplaysPerHost=5\n\n[greeter]\nBrowser=true\n\n[chooser]\n\n[debug]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("另外，如果想开机免登录，可以在[daemon]字段下添加")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("[daemon]\nTimedLoginEnable=True\nAutomaticLoginEnable=false\nTimedLogin=root\nAutomaticLogin=false\nTimedLoginDelay=3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"etc-init-prefdm-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etc-init-prefdm-conf"}},[s._v("#")]),s._v(" "),n("strong",[s._v("/etc/init/prefdm.conf")])]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("start on stopped rc RUNLEVEL=5\nstop on starting rc RUNLEVEL=[!5]\n\nconsole output\nrespawn\nrespawn limit 10 120\n\n#exec /etc/X11/prefdm -nodaemon\nexec /usr/sbin/gdm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"关闭防火墙-或开放177端口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙-或开放177端口"}},[s._v("#")]),s._v(" 关闭防火墙，或开放177端口")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("service iptables stop")]),s._v("(推荐)")])]),s._v(" "),n("p",[s._v("or")]),s._v(" "),n("blockquote",[n("p",[s._v("iptables  -A  INPUT  -p udp -s 0/0 -d 0/0 --dport 177 -j ACCEPT")])]),s._v(" "),n("p",[s._v("or")]),s._v(" "),n("blockquote",[n("p",[s._v("在/etc/sysconfig/iptables文件中加入：\n-A RH-Firewall-1-INPUT -m state --state NEW -m udp -p udp --dport 177 -j ACCEPT")])]),s._v(" "),n("p",[s._v("之后重启防火墙")]),s._v(" "),n("blockquote",[n("p",[s._v("$service iptables restart")])]),s._v(" "),n("h2",{attrs:{id:"确认xdmcp启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#确认xdmcp启动"}},[s._v("#")]),s._v(" 确认xdmcp启动")]),s._v(" "),n("blockquote",[n("p",[s._v("#lsof -i:177\nCOMMAND    PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\ngdm-binar 1839 root   11u  IPv4  11907      0t0  UDP *:xdmcp")])]),s._v(" "),n("p",[s._v("出现上面的文字，说明已经启动。（注意要用root用户执行，否则可能命令不报错，但是没有输出。）")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/kadwf123/article/details/79564293",target:"_blank",rel:"noopener noreferrer"}},[s._v("通过xmanager连接linux远程主机桌面"),n("OutboundLink")],1)]),s._v(" "),n("h1",{attrs:{id:"windos-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windos-配置"}},[s._v("#")]),s._v(" Windos 配置")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/mineskey/article/details/110929469",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows闭防火墙入站规则之开放端口"),n("OutboundLink")],1)]),s._v(" "),n("h1",{attrs:{id:"xdmcp-界面配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xdmcp-界面配置"}},[s._v("#")]),s._v(" XDMCP 界面配置")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/jeshy/p/11058865.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("单击键盘出现两个字符的问题解决办法"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("点击"),n("code",[s._v("Xmanager6")]),s._v("上面的"),n("code",[s._v("工具")]),s._v("菜单，并点击 "),n("code",[s._v("Xconfig 开始（C)")]),s._v(","),n("code",[s._v("右键")]),s._v("点击"),n("code",[s._v("Default Profile")]),s._v(",选择"),n("code",[s._v("属性")]),s._v("。")]),s._v(" "),n("p",[s._v("在打开的界面里面选择"),n("code",[s._v("高级")]),s._v(","),n("code",[s._v("XKEYBOARD")]),s._v("字段默认是打上对勾的，"),n("code",[s._v("取消选择")]),s._v("，重新远程登录即可。")])])}),[],!1,null,null,null);e.default=a.exports}}]);