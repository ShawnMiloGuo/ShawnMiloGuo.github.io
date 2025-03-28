---
layout: page
title: 多卫星数据融合开展高时空分辨率地表状态的观测
description: 利用多课卫星开展时空连续光谱监测
img: assets/img/7.jpg
importance: 1
category: 卫星遥感
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## 国家需求与应用背景  
随着全球气候变化加剧与人类活动影响深化，高精度、高频次的地表状态观测已成为国家资源管理、生态保护与灾害应急的核心需求。我国《"十四五"规划和2035年远景目标纲要》明确提出构建"空天地一体化生态监测网络"，要求突破单一卫星传感器的时空分辨率限制，实现地表动态的精细化感知。例如：   
- **农业监测**：需每日10米级分辨率识别作物长势与病虫害，支撑粮食安全决策；  
- **环境评估**：需高光谱数据（10nm级）定量反演水质、大气污染物浓度；  
- **灾害应急**：需无云雾干扰的连续影像支持海洋、林火实时监测。  

现有卫星体系存在显著短板：  
- MODIS等卫星虽能每日成像，但空间分辨率（≥250米）难以区分农田地块；  
- Landsat-8、Sentinel-2等高分辨率卫星重访周期长（5-16天），易受云雾干扰导致数据缺失。  
多源卫星数据融合技术成为破解国家重大应用瓶颈的必由之路。

---

## 研究点1：高时空分辨率数据融合——从"鱼与熊掌"到协同增效  
### 原理与方法  
通过整合高时间分辨率（如MODIS）与高空间分辨率（如Sentinel-2）数据，构建时空融合模型，生成兼具每日频次与10米分辨率的地表影像：  
1. **经典时空融合算法**  
   - 采用时空自适应反射率融合模型 
   - 通过加权相似像元实现数据融合
2. **深度学习模型**  
   - 基于双分支卷积神经网络
   - 基于物理模型与深度解混模型融合的架构  

### 应用价值  
- 支持农田精准管理（如每日监测灌溉效率）  
- 近岸海域高时空分辨率赤潮监测

---

## 研究点2：时间序列云雾插补——破解光学遥感"无晴空"难题  
### 问题与挑战  
- 我国南方地区年均云覆盖率超60%  
- 传统EOF类插值方法无法处理大片云雾导致的数据缺失问题

### 基础思路  
1. **多时相协同重建**  
   - 基于历史无云影像库构建物候曲线  
   - 采用动态时间规整（DTW）算法匹配相似曲线  
2. **时空插值**  
   - 构建协方差模型
   - 构建改进的EOF类方法

### 典型应用  
- 近岸海域状态监测
- 遥感数据与站点观测数据对齐 

---

## 研究点3：多光谱至高光谱重建——从"有限波段"到连续光谱解析  
### 科学意义  
- 高光谱数据可识别叶绿素含量、重金属污染等特征  
- 多光谱成像系统价格便宜，但光谱应用受限

### 基础技术路径  
1. **物理驱动模型**  
   - 基于线性光谱混合模型（LSMM）分解像元  
   - 基于光谱退化模型的光谱重建技术 
2. **数据驱动模型**  
   - 构建unrolling网络学习非线性映射  

### 应用场景  
- 精准农业、低成本碳循环监测、林业碳汇

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>





