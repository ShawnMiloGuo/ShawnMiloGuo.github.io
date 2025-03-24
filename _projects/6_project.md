---
layout: page
title: 人工智能模型与遥感物理机理模型的协同
description: 构建地表物理状态序列，重构光谱
img: assets/img/roman-mager-5mZ_M06Fc9g-unsplash.jpg
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


遥感辐射传输建模领域正经历着物理机理与数据驱动方法的深度融合。PROSAIL作为最具代表性的叶片-冠层耦合辐射传输模型，其严格的物理方程与深度神经网络(Deep Neural Network, DNN)强大的非线性映射能力形成天然的互补优势。本课题希望建立方法模型将两者更好的融合，为遥感参数反演开辟了新的方法论体系。

### 一、物理约束的神经网络架构设计

传统DNN在植被参数反演中面临物理可解释性缺失的固有缺陷。本课题希望突破性地将PROSAIL的核心方程转化为DNN的结构化约束：在输入层嵌入叶片光学属性光谱数据库，隐层设计双流网络分别处理叶片光学参数和冠层结构参数，输出层引入辐射传输方程的正向验证模块。这种物理信息神经网络(Physics-Informed Neural Network)通过自适应惩罚函数，使网络预测值自动满足辐射传输方程的边界条件。

### 二、多尺度特征耦合建模框架

针对PROSAIL模拟数据与真实观测数据间的domain gap问题，构建双分支混合建模架构。PROSAIL分支通过可微分编程实现辐射传输过程的全可微计算，真实数据分支采用自注意力机制提取多尺度特征。两个分支在特征空间通过动态权重进行知识蒸馏。

### 三、反问题求解的正则化新范式

针对传统物理反演模型面临的病态问题，本课题希望提出基于变分自编码器的正则化方法，将PROSAIL参数先验分布编码到潜空间约束，同时引入辐射传输残差作为解码器的物理正则项。将物理模型转化为正则化约束的范式，为解决遥感反演中的不适定问题提供框架。



<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
