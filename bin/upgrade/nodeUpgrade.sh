#!/bin/bash
#./callUpgrade.sh ip user passwd service_name upgrade_pkg
#./callUpgrade.sh 10.244.1.143 root HitryVRoom123 log_service upgrade_pkg
ip=$1
user=$2
passwd=$3
service_name=$4
upgrade_pkg=$5
scp /opt/upgradePkg/${service_name}/${upgrade_pkg} ${user}@${ip}:/opt

/usr/bin/expect <<-EOF
set time 600
spawn ssh $user@$ip
expect {
"yes/no" { send "yes\r"; exp_continue }
"password" { send "${passwd}\n";exp_continue }
}
send "if [ ! -d "/opt/${service_name}.bak" ]; then mkdir /opt/${service_name}.bak;fi;\r"
send "cd /opt/${service_name}.bak;tar -zcvf ${service_name}.$(date -d "today" +"%Y%m%d_%H%M%S").tar.gz /opt/${service_name};\r"
send "tar -zxvf /opt/${upgrade_pkg};cd /opt/${service_name}/bin;./restart1.sh;\r"
send "rm -rf /opt/${service_name}/${upgrade_pkg};\r"
expect eof
EOF