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
        },{id: "post-面向地表快速变化场景的时空融合的动态神经网络i-ustfm-以地表温度为例",
      
        title: "面向地表快速变化场景的时空融合的动态神经网络I-USTFM：以地表温度为例",
      
      description: "由于卫星轨道和传感器设计的限制，热波段的空间分辨率和时间分辨率之间通常存在权衡。日常传感器只能提供较低空间分辨率的数据，如分辨率为 1 公里的 MODIS LST。精细分辨率（100 米或更低）的传感器通常受限于其扫描带宽度和轨道高度，只能提供数天内的数据，如 Landsat 系列卫星的八天内数据。因此，如何整合多个卫星传感器的数据以获得高时空分辨率的观测数据，成为提升卫星资源利用率的关键挑战之一。这一挑战的解决将进一步推动地表能量建模和精准农业等综合应用的发展。",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/IUSTFM/";
        
      },
    },{id: "post-基于hru-net的中高分辨率地表要素提取模型",
      
        title: "基于HRU-Net的中高分辨率地表要素提取模型",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/HRUNET/";
        
      },
    },{id: "post-hocpd",
      
        title: "Hocpd",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/HOCPD/";
        
      },
    },{id: "post-基于解混策略的时空融合模型稳定性分析-以地表温度为例",
      
        title: "基于解混策略的时空融合模型稳定性分析—以地表温度为例",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/USTFM-LST/";
        
      },
    },{id: "post-使用级联多级检测器的多分辨率遥感图像的高质量目标检测",
      
        title: "使用级联多级检测器的多分辨率遥感图像的高质量目标检测",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/HQODMRSI-CMD/";
        
      },
    },{id: "post-快速评估监督学习中常用遥感分类算法的时间效率",
      
        title: "快速评估监督学习中常用遥感分类算法的时间效率",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/FPTC/";
        
      },
    },{id: "post-基于光学微波特征融合的新疆典型经济作物提取",
      
        title: "基于光学微波特征融合的新疆典型经济作物提取",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/SAR-OPT/";
        
      },
    },{id: "post-对抗样本噪声的遥感深度学习分类网络模型",
      
        title: "对抗样本噪声的遥感深度学习分类网络模型",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/WLN/";
        
      },
    },{id: "post-基于hru-net的中高分辨率地表要素提取模型",
      
        title: "基于HRU-Net的中高分辨率地表要素提取模型",
      
      description: "蒸散空间下的土壤特征空间构建",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/HRUNET/";
        
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
