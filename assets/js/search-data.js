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
        },{id: "nav-学术活动",
          title: "学术活动",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
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
        },{id: "post-基于时空混合的modis产品降尺度模型-以海表叶绿素为例",
      
        title: "基于时空混合的MODIS产品降尺度模型-以海表叶绿素为例",
      
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
    },{id: "post-基于光学微波特征融合的新疆典型经济作物提取",
      
        title: "基于光学微波特征融合的新疆典型经济作物提取",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/SAR-OPT/";
        
      },
    },{id: "post-基于对抗神经网络isrgan的多源遥感数据融合与超分辨模型",
      
        title: "基于对抗神经网络ISRGAN的多源遥感数据融合与超分辨模型",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/SRGAN/";
        
      },
    },{id: "post-usfpdec",
      
        title: "Usfpdec",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/USFPDEC/";
        
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
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
