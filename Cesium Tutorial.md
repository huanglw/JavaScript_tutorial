## 问题1：如何将3D MAX的模型文件导入到Cesium
Cesium支持GLTF的3D数据格式，所以如果我们拿到的初始数据是3D max格式的数据，那么首先需要进行格式转换。    
参考地址：https://blog.csdn.net/u011394175/article/details/78919281
- step1: 将3dmax的数据转换为导出为OBJ格式;
- step2: 将OBJ格式的数据转换为OpenCollada类型的DAE格式的数据;
- step3: 将DAE格式转成GLTF格式;
