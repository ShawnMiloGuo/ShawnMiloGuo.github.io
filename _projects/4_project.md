---
layout: page
title: 深度神经网络在遥感跨场景迁移
description: 如何实现神经网络在跨传感器，跨尺度和跨地域的泛化迁移？
img: assets/img/joep-lan-KrztrcWCRFs-unsplash.jpg
importance: 3
category: 人工智能

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


## 研究背景：
随着深度神经网络模型在计算机视觉领域的快速发展，近年来基于深度神经网络的遥感地物解译模型层出不穷。但是，一方面受限于遥感传感器和卫星轨道，不同卫星载荷平台在光谱谱段设置、观测尺度上存在巨大的差异；另一方面，地表被观测变量在时间和空间上表现出很强的时空异质性。在这两个因素的综合作用下，导致现有的深度神经网络在跨场景迁移泛化过程中存在很大的困难。
具体表现为：
1. **硬件异质性**：多源传感器平台在光谱响应函数、空间分辨率等参数层面的差异
2. **数据时空异质性**：地表参数在时间（物候期）和空间（地域）维度的动态变化特征

这导致训练模型在跨场景迁移时普遍存在显著性能衰减（典型场景下精度下降>30%），严重制约智能模型在广域遥感监测中的实际部署。

## 研究现状：迁移学习框架的遥感适配困境
### 方法分类
- **域自适应方法**  
  依赖目标域数据可访问性，通过特征分布对齐实现迁移
- **域泛化方法**  
  基于多源域特征融合提升模型泛化能力

### 现存挑战
1. **跨模态影响未量化**  
   缺乏对光谱尺度迁移（如Landsat→Sentinel-2）、时相迁移的系统评估
2. **迁移预判无标准**  
   尚未建立可迁移性先验评估指标体系
3. **任务适配不完善**  
   分类与反演任务的迁移策略尚未形成统一框架

## 关键科学问题与技术路线
### 核心科学问题
**如何量化跨平台/跨时空场景中迁移性影响因子，并建立可控的迁移增强机制？**

### 四阶段研究框架
1. **因子筛选**  
   构建多场景基准数据集，采用SHAP值量化12个候选因子（含光谱差异、空间尺度等）对迁移损失的贡献度
2. **可迁移性度量**  
   提出MTI指标，联合域间特征相似度（MMD距离）与模型置信度（Softmax熵）
3. **特征重构迁移**  
   设计谱段-尺度双适应投影网络，通过对抗训练实现跨域特征对齐
4. **不确定性评估**  
   建立贝叶斯框架输出预测置信区间，提供工程可靠性判据

## 预期贡献与学术价值
### 理论创新
- 揭示多维度迁移因子的作用机制
- 建立遥感专属的模型迁移能力评估体系

**应用价值**：为遥感智能模型的跨平台工程化部署提供理论方法支撑，推动：
- 多源遥感数据协同解译
- 长时序大区域动态监测
- 新型传感器快速适配

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
