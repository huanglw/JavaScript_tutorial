## 问题1：如何将3D MAX的模型文件导入到Cesium
Cesium支持GLTF的3D数据格式，所以如果我们拿到的初始数据是3D max格式的数据，那么首先需要进行格式转换。    
参考地址：https://blog.csdn.net/u011394175/article/details/78919281
- step1: 将3dmax的数据转换为导出为OBJ格式;
- step2: 将OBJ格式的数据转换为OpenCollada类型的DAE格式的数据;
- step3: 将DAE格式转成GLTF格式;
官方提供在线转换工具：converts COLLADA (.dae) models or OBJ models to glTF   
在线地址：http://52.4.31.236/convertmodel.html    
[转换页面图片](https://github.com/huanglw/JavaScript_tutorial/blob/master/Snipaste_2018-06-22_11-25-18.png)

## 过程记录
### 1、.max--.obj--.gltf
尝试直接把.max的文件用3ds Max软件直接导出成.obj文件，然后用工具吧.obj文件转换成.gltl文件。但是导入到cesium的时候没有效果
有可能是原始文件有问题

### 2、下载OpenCOLLADA到处.dae的插件
下载地址：https://github.com/KhronosGroup/OpenCOLLADA/releases

### 2、.max--.obj--.dae--.gltf
下载转换工具ColladaToGltf.exe(地址：https://github.com/KhronosGroup/COLLADA2GLTF/releases)
