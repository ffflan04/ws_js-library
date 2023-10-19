
# １７箇所の、ファイル内の文章を、一括で変換するシェルスクリプト
num=0
cat ./index.html | grep -n "data-lightbox=" | awk -F'[:]' '{print $1}' | while read line
do
    num=$(($num + 1))
    echo $line" lines named $num"
    sed -i -e "${line}s/ws-2/ws-$num/" ./index.html
done

num=0
cat ./index.html | grep -n 'alt=""' | awk -F'[:]' '{print $1}' | while read line
do
    num=$(($num + 1))
    sed -i -e "${line}s/ws-2/ws-$num/" ./index.html
done


