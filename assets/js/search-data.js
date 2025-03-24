// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-主页",
    title: "主页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-论文发表",
          title: "论文发表",
          description: "这里主要收录课题组在多源数据融合、人工智能算法及生态环境监测等方面的研究成果。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-研究课题",
          title: "研究课题",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-研究团队",
          title: "研究团队",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-招生启事",
          title: "招生启事",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/recruitment/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-基于时空融合的modis产品降尺度模型-以海表叶绿素为例",
      
        title: "基于时空融合的MODIS产品降尺度模型-以海表叶绿素为例",
      
      description: "本文提出了一种基于U-STFM模型的时空数据融合方法，用于将MODIS 1km叶绿素-a产品降尺度至30m。研究解决了卫星传感器在空间分辨率和时间分辨率之间的权衡问题，通过整合MODIS和Landsat数据，提升了近海水域的空间细节，同时保持了时间一致性。U-STFM模型利用时间序列变化率和线性分解方法预测高分辨率反射率，并通过回归模型生成高分辨率叶绿素-a浓度产品。实验在渤海湾和深港海域验证了该方法的有效性，结果表明其能够显著改善近海水域的纹理细节，同时保持与原始MODIS产品一致的精度。该方法为近海水域的生物过程研究和卫星数据利用提供了重要支持。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/HOCPD/";
        
      },
    },{id: "post-面向地表快速变化场景的时空融合的动态神经网络i-ustfm-以地表温度为例",
      
        title: "面向地表快速变化场景的时空融合的动态神经网络I-USTFM：以地表温度为例",
      
      description: "由于卫星轨道和传感器设计的限制，热波段的空间分辨率和时间分辨率之间通常存在权衡。日常传感器只能提供较低空间分辨率的数据，如分辨率为 1 公里的 MODIS LST。精细分辨率（100 米或更低）的传感器通常受限于其扫描带宽度和轨道高度，只能提供数天内的数据，如 Landsat 系列卫星的八天内数据。因此，如何整合多个卫星传感器的数据以获得高时空分辨率的观测数据，成为提升卫星资源利用率的关键挑战之一。这一挑战的解决将进一步推动地表能量建模和精准农业等综合应用的发展。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/IUSTFM/";
        
      },
    },{id: "post-对抗样本噪声的遥感深度学习分类网络模型",
      
        title: "对抗样本噪声的遥感深度学习分类网络模型",
      
      description: "针对样本标签噪声造成的地物提取精度不足问题，本文提出了一种抗噪声标签的卷积神经网络框架，Weight Loss Net（WLN）。WLN主要包含三部分：（1）分割子网络，用于产生图像的逐像素分类结果，可以使用其他的分割模型进行替换；（2）损失权重参数，用于对每个训练样本赋权重，对干净样本赋予高权重值，对噪声样本赋予低权重值，降低噪声样本对网络训练过程中的影响，提高网络的抗噪性能；（3）类别平衡系数，帮助网络平等地学习每一个类别，避免由于不同类别之间的不平衡导致模型过拟合。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/WLN/";
        
      },
    },{id: "post-快速评估监督学习中常用遥感分类算法的时间效率",
      
        title: "快速评估监督学习中常用遥感分类算法的时间效率",
      
      description: "本文提出了全参数时间复杂度（Full Parameter Time Complexity，以下简称FPTC），该方法考虑了所有可能影响时间消耗的参数。同时，我们定义了一个系数$\omega$，用于模拟不同分类器在不同计算平台之间的物理差异。在本文的后续章节中，我们将基于FPTC的定义，具体推导以下几种算法的FPTC，包括：$k$NN（$k$-nearest neighbors）、LR（logistic regression）、CART（classification and regression tree）、RF（random forest）和SVM（support vector machine）。为了验证FPTC及其系数$\omega$的有效性，我们选择了新疆维吾尔自治区和Sentinel-2A数据集作为案例研究。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/FPTC/";
        
      },
    },{id: "post-基于光学微波特征融合的典型经济作物提取",
      
        title: "基于光学微波特征融合的典型经济作物提取",
      
      description: "针对异物同谱效应导致的作物提取精度不足问题，本研究提出了一种集成光学和微波特征的方法，通过特征融合提升作物提取精度。本研究基于Sentinel-1合成孔径雷达影像和Sentinel-2多光谱数据，对新疆巴州地区典型绿洲农业区进行作物分类制图。为提高雷达数据特征提取质量，采用SHP-DSI方法对时间序列Sentinel-1数据的后向散射强度进行相干斑抑制，并精确估计和去偏相干系数。此外，首次在研究中提取了合成孔径雷达干涉（InSAR）产品用于作物分类，包括干涉相干系数、主从影像后向散射强度比以及SAR时间序列的振幅色离散度指数等。为探索红边特征在绿洲作物类型识别中的作用，本研究提取了Sentinel-2的3个红边波段并导出了11个红边指数，结合常规多光谱特征，与雷达特征集成以提升作物分类精度。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/SAR-OPT/";
        
      },
    },{id: "post-基于对抗神经网络isrgan的多源遥感数据融合与超分辨模型",
      
        title: "基于对抗神经网络ISRGAN的多源遥感数据融合与超分辨模型",
      
      description: "为满足具体监测任务尤其是应急响应任务对时空分辨率的要求，需要对多时间、空间尺度的遥感数据进行融合。传统数据融合方法鲁棒性较低，模型无法跨区域、跨传感器应用，因此，本研究基于人工智能领域的超分辨率生成对抗网络（以下简称SRGAN），开展多尺度数据融合方法研究，提出ISRGAN影像超分辨模型。ISRGAN模型以超分辨率生成对抗网络SRGAN为基础，为解决SRGAN模型训练不稳定以及在跨区域和跨传感器上的迁移性不足的问题，针对性地修改了SRGAN的损失函数并对其网络结构进行了改进，使模型训练地更加稳定，在跨区域和跨传感器上有着良好的迁移能力。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/SRGAN/";
        
      },
    },{id: "post-统一不同蒸发条件下的土壤反馈模式以改善平坦地区的土壤数字制图",
      
        title: "统一不同蒸发条件下的土壤反馈模式以改善平坦地区的土壤数字制图",
      
      description: "由于卫星轨道和传感器设计的限制，热波段的空间分辨率和时间分辨率之间通常存在权衡。日常传感器只能提供较低空间分辨率的数据，如分辨率为 1 公里的 MODIS LST。精细分辨率（100 米或更低）的传感器通常受限于其扫描带宽度和轨道高度，只能提供数天内的数据，如 Landsat 系列卫星的八天内数据。因此，如何整合多个卫星传感器的数据以获得高时空分辨率的观测数据，成为提升卫星资源利用率的关键挑战之一。这一挑战的解决将进一步推动地表能量建模和精准农业等综合应用的发展。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/USFPDEC/";
        
      },
    },{id: "post-什么是生命",
      
        title: "什么是生命",
      
      description: "本文从个人视角探讨了生命的本质与意义，结合成长经历、记忆的重要性以及幸福感的来源，分析了生命旅程中的体验与感悟。文章通过对“真、善、美”的追求，阐述了生命体在熵减过程中的努力与价值，提出了如何在有限的生命中创造美好体验的思考。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/LifeThinking/";
        
      },
    },{id: "post-级联多级检测器的多分辨率遥感图像的高质量目标检测",
      
        title: "级联多级检测器的多分辨率遥感图像的高质量目标检测",
      
      description: "基于深度学习的物体检测器在精度和自动化程度方面显著提升了遥感图像中的目标检测性能。然而，由于物体尺度的巨大变化，在多分辨率遥感图像中实现高质量检测仍然具有挑战性。检测质量通常由训练中使用的交并比（IoU）阈值定义。此外，多分辨率图像中正负样本的不平衡问题也会进一步降低检测精度。近期研究表明，基于级联的区域卷积神经网络（R-CNN）通过引入三级级联结构并逐步提高IoU阈值，可以实现更高的检测质量。然而，当增加到第四级时，级联R-CNN的性能却出现下降。我们通过研究发现，ROI特征与分类器之间的不匹配可能是导致性能下降的主要原因。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/HQODMRSI-CMD/";
        
      },
    },{id: "post-基于解混策略的时空融合模型稳定性分析",
      
        title: "基于解混策略的时空融合模型稳定性分析",
      
      description: "地表温度（Land Surface Temperature，LST）在地球表面与大气能量交换过程中有着重要的作用。然而受传感器性能的制约，利用单一的星载热红外传感器无法反演出同时具有高时间和高空间分辨率的地表温度，从而限制地表温度数据的应用。时空融合模型是解决这一问题的有效途径。目前，基于解混的时空融合模型稳定性的影响因素存在不确定性。针对此问题本文从同质变化单元（homogeneous change regions，HCRs）分类方式、解混次数以及HCRs数量三方面来分析模型稳定性。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/USTFM-LST/";
        
      },
    },{id: "post-基于hru-net的中高分辨率地表要素提取模型",
      
        title: "基于HRU-Net的中高分辨率地表要素提取模型",
      
      description: "在多光谱遥感中，由于同物异谱效应，传统分类方法（如支持向量机、随机森林）在提取复合要素（如耕地）时精度较低，尤其是在休耕、弃耕或轮种情况下，耕地的光谱差异较大。相比之下，卷积神经网络（CNN）对同类地物的特征差异具有较高的容忍度，泛化能力强，因此在同物异谱情况下有望提高复合要素的提取精度。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/HRUNET/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-deep-contextualized-word-representations-elmo",
          title: 'Deep contextualized word representations (ELMo)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-02-deep-contextualized-word-representations/";
            },},{id: "projects-多卫星数据融合开展高时空分辨率地表状态的观测",
          title: '多卫星数据融合开展高时空分辨率地表状态的观测',
          description: "利用多课卫星开展时空连续光谱监测",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-地表状态序列特征空间构建",
          title: '地表状态序列特征空间构建',
          description: "构建地表物理状态序列，重构光谱",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-海岸带城市陆海碳通量高分辨率遥感监测与时空演变分析",
          title: '海岸带城市陆海碳通量高分辨率遥感监测与时空演变分析',
          description: "面向近岸海域陆地、海洋碳参量估算难题，研发基于卫星、无人机等多种传感设备的碳汇监测模型。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-深度神经网络在遥感跨场景迁移",
          title: '深度神经网络在遥感跨场景迁移',
          description: "构建地表物理状态序列，重构光谱",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-基于基础视觉大模型的遥感影像高效微调",
          title: '基于基础视觉大模型的遥感影像高效微调',
          description: "如何让前沿AI技术更高效地服务于遥感数据的深度挖掘？",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-人工智能模型与遥感物理机理模型的协同",
          title: '人工智能模型与遥感物理机理模型的协同',
          description: "构建地表物理状态序列，重构光谱",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
