
# スクリーンショットファイルをまとめて、改名するシェルスクリプト
var_img=`ls ./img | awk -F'[png]' '{print $1$2$3}'`

num=0
echo $var_img | while read img
do
    num=$(($num + 1))
    mv ./img/$img"png" ./img/ws-$num
done