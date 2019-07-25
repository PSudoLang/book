cd ./guide
mdbook build
cd ../

cd ./nomicon
mdbook build
cd ../

cd ./reference
mdbook build
cd ../

mkdir build
cp -r ./guide/book ./build/guide
cp -r ./nomicon/book ./build/nomicon
cp -r ./reference/book ./build/reference
cp -r ./basis ./build