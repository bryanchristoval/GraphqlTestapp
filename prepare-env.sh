sourceEnv=$1
targetEnv=$2
if [ ! -f $1 ];
then
    echo "WARNING: Source Config file can't be found!"
    exit 1
fi
echo "# Auto generated file, don't modify. Please refer to [.env.prod]" > $targetEnv
echo "" >> $targetEnv
cat $sourceEnv >> $targetEnv