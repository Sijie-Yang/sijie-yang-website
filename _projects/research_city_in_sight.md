---
layout: page
title: City in Sight
title_zh: 城市在眼前
description: Research on urban visibility, perception, and visual experience of the city.
description_zh: 研究城市可见性、感知与城市视觉体验。
bilingual: true
default_lang: en
img: assets/research/City_In_Sight_Cover.png
importance: 2
category: research
year: 2023 - present
related_publications: peng2026citylandscape, yang2025thermal, yang2023role
content_zh: |
  大多数城市分析仍从外部*俯视*城市——卫星图、路网、用地斑块。**城市在眼前**提出一个互补问题：从人们真实居住、行走与停留的位置看，城市是什么样、感受如何？该研究将城市视觉体验视为可测量、可制图、可回馈规划与设计的对象，而非形态或房价分析的装饰性附庸。

  从信息论视角看，城市是一个被无数局部观察者**持续采样的复杂系统**。没有任何单一视点能捕捉全貌。窗边的居民、街道上的行人——各自通过特定的视觉通道，获得关于城市形态与氛围的局部读数。日常城市生活因此构成一个庞大的分布式观测过程：建成环境是 latent state，视觉通道是测量算子，人类感知是结构化但含噪的 sensing。

  一个简洁的形式化表述如下。设 $X(\mathbf{s})$ 表示位置 $\mathbf{s}$ 处的城市环境。观察者 $i$ 锚定于 $a_i$，通过视觉通道 $c_i \in \lbrace\mathrm{window}, \mathrm{street}, \ldots\rbrace$ 采样，产生感知响应 $Y_i = h(g(X, a_i, c_i)) + \varepsilon_i$。每次观测必然是局部的——它告知城市的某个邻域，而非整个系统。随时间推移，城市生活生成数据流 $\mathcal{O}=\{(a_i,c_i,I_i,Y_i)\}$。城市在眼前要解决的问题是：如何从 $\mathcal{O}$ 恢复城市尺度的感知场 $\hat{P}(\mathbf{s},d)$——即位置 $\mathbf{s}$ 沿维度 $d$（偏好、生动性、热舒适可供性等）的期望人类响应，通过稀疏判断在影像与空间结构上的传播进行推断。

  为此，我们结合三类要素：反映生活体验的影像来源（房产窗景、沿步行网络的街景）；严格的人类感知数据（众包成对比较、调查型视觉指标）；以及可扩展至城市地图、同时保留组合语义的 interpretable 模型。

  目前已有两条主线。**从窗户**，研究城市景观如何通过居家视窗被阅读——楼层、天空、绿化与建成形态如何塑造整座城市中的偏好与生动性。**沿街道**，研究可见街景如何信号化热舒适潜力（*thermal affordance*）及相关视觉—感知线索。垂直与水平的视线共同构成进入城市体验的双重入口——主张将*眼前所见*与几何、可达性与环境模拟并列对待。

  相关实证工作见下文。
---

Most urban analytics still look *at* the city from the outside—satellite tiles, street networks, land-use parcels. **City in Sight** asks a complementary question: what does the city look and feel like *from where people actually live, walk, and dwell*? The programme treats urban visual experience as something that can be measured, mapped, and linked back to planning and design—not as a decorative afterthought to morphology or property markets.

From an information-theoretic view, the city is a complex system **continuously sampled by countless partial observers**. No single vantage captures the whole. A resident at a window, a pedestrian on a street—each obtains a local, channel-specific readout of urban form and atmosphere. Everyday urban life is therefore a vast, distributed observation process: the built environment as latent state, visual channels as measurement operators, human perception as structured but noisy sensing.

A compact formalisation makes this precise. Let $X(\mathbf{s})$ denote the urban environment at location $\mathbf{s}$. Observer $i$, anchored at $a_i$, samples through a visual channel $c_i \in \lbrace\mathrm{window}, \mathrm{street}, \ldots\rbrace$ and produces a perceptual response $Y_i = h(g(X, a_i, c_i)) + \varepsilon_i$. Each observation is necessarily partial—it informs a neighbourhood of the city, not the system as a whole. Over time, urban life generates a stream $\mathcal{O}=\{(a_i,c_i,I_i,Y_i)\}$. City in Sight asks how to recover a city-wide perceptual field $\hat{P}(\mathbf{s},d)$ from $\mathcal{O}$: the expected human response at $\mathbf{s}$ along dimension $d$ (preference, vividness, thermal affordance, and others), inferred by propagating sparse judgments through imagery and spatial structure.

To do this, we combine three ingredients: image sources that reflect lived experience (real-estate window views, street view imagery along pedestrian networks); rigorous human-perception data (crowdsourced pairwise comparisons, survey-based visual indicators); and interpretable models that scale local labels to urban maps while preserving compositional meaning.

Two strands anchor the work so far. **From the window**, we study how city landscapes read through domestic views—how floor level, sky, greenery, and built form shape preference and vividness across a metropolis. **Along the street**, we study how the visible streetscape signals thermal comfort potential (*thermal affordance*) and related visual-perceptual cues. Together, vertical and horizontal sight lines offer dual portals into urban experience—a case for treating *what is in sight* alongside geometry, accessibility, and environmental simulation.

Related empirical work is listed below.
