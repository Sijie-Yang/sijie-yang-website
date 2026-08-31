# Heat Resilience & Thermal Affordance Research Summary Table

## Project Information

| Field | Details |
|-------|---------|
| **Project Title** | Thermal Comfort in Sight: Thermal Affordance and Its Visual Assessment for Sustainable Streetscape Design |
| **Chinese Title** | 热舒适可供性:基于视觉评估的可持续街景设计 |
| **Research Programme** | City in Sight |
| **Project Period** | 2023 - present |
| **Research Focus** | Urban heat resilience, thermal comfort, streetscape visual assessment |
| **Key Concept** | Thermal Affordance - the integrated inherent capacity of a streetscape to influence human thermal comfort based on its visual and physical features |

## Publication Details

| Field | Details |
|-------|---------|
| **Journal** | Building and Environment |
| **Publication Year** | 2025 |
| **DOI** | 10.1016/j.buildenv.2025.112569 |
| **Authors** | Sijie Yang, Adrian Chong, Pengyuan Liu, Filip Biljecki* |
| **Affiliation** | National University of Singapore (NUS) |
| **Status** | Published |
| **PDF Link** | https://arxiv.org/pdf/2410.11887 |
| **Blog Post** | /blog/2025/thermal-comfort/ |

## Research Objectives

| Objective # | Description |
|-------------|-------------|
| 1 | Introduce the concept of thermal affordance - formalizing the integrated capacity of streetscapes to influence human thermal comfort |
| 2 | Develop Visual Assessment of Thermal Affordance (VATA) framework for efficient evaluation |
| 3 | Combine street view imagery (SVI), surveys, and statistical learning for cost-effective assessment |
| 4 | Validate predictions with field-investigated outdoor thermal comfort (OTC) data |
| 5 | Generate geospatially explicit mapping of thermal affordance at urban scale |
| 6 | Provide actionable insights for sustainable streetscape design |

## Methodology Framework: VATA (Visual Assessment of Thermal Affordance)

| Component | Details |
|-----------|---------|
| **Data Source** | Street View Imagery (SVI) |
| **Survey Types** | Online surveys + In-field surveys |
| **Image Features (IF)** | 5 categories extracted from SVI data |
| **Visual-Perceptual Indicators (VPI)** | 19 indicators for streetscape visual assessment |
| **Statistical Methods** | Multi-task neural network + Elastic net regression |
| **Prediction Model** | Chained relationship: IF → VPI → VATA score |
| **Validation** | Cross-validation with field-investigated OTC data |
| **Study Area** | Singapore |

## Key Features and Innovations

| Feature | Description |
|---------|-------------|
| **Cost-Effective** | Reduces resource-intensive field campaigns by leveraging existing street view imagery |
| **Scalable** | Applicable at urban scale rather than limited site-specific studies |
| **Transferable** | Framework can be adapted to different cities and contexts |
| **Interpretable** | Two-stage prediction (IF-VPI-VATA) provides explainable results |
| **Actionable** | Directly informs streetscape improvement strategies |
| **Geospatially Explicit** | Generates city-wide thermal affordance maps |

## Data Collection Summary

| Data Type | Purpose | Collection Method |
|-----------|---------|-------------------|
| Street View Images | Visual features extraction | Existing SVI databases |
| Online Survey Data | Visual-perceptual indicators | Crowdsourced assessments |
| Field Survey Data | Validation | On-site thermal comfort measurements |
| Meteorological Data | Environmental context | Weather stations / sensors |
| Urban Morphology | Spatial context | GIS data, building footprints |

## Image Feature Categories (IF)

| Category # | Feature Type | Examples |
|------------|--------------|----------|
| 1 | Sky View Factor | Visible sky ratio, openness |
| 2 | Greenery Coverage | Vegetation density, tree canopy |
| 3 | Building Geometry | Height, facade characteristics |
| 4 | Shading Elements | Shadow patterns, coverage |
| 5 | Material Properties | Surface materials, reflectance |

## Visual-Perceptual Indicators (VPI)

| Indicator Category | Number of Indicators | Assessment Focus |
|--------------------|---------------------|------------------|
| Visual Comfort | Multiple | Perceived comfort from streetscape appearance |
| Thermal Perception | Multiple | Visual cues suggesting thermal conditions |
| Environmental Quality | Multiple | Overall environmental quality perception |
| Spatial Openness | Multiple | Perceived openness and enclosure |
| Aesthetic Quality | Multiple | Visual appeal and design quality |
| **Total** | **19 indicators** | Comprehensive visual assessment |

## Model Architecture

| Stage | Input | Method | Output |
|-------|-------|--------|--------|
| Stage 1 | Street View Images | Feature Extraction | Image Features (IF) |
| Stage 2 | IF | Multi-task Neural Network | Visual-Perceptual Indicators (VPI) |
| Stage 3 | VPI | Elastic Net Regression | Thermal Affordance Score (VATA) |
| Validation | VATA Predictions | Comparison | Field OTC Measurements |

## Research Context: Urban Heat Challenges

| Challenge | Description | VATA Solution |
|-----------|-------------|---------------|
| **Climate Change** | Rising global temperatures | Identifies cool streetscape features |
| **Urban Heat Island (UHI)** | Cities hotter than surroundings | Maps thermal comfort potential |
| **Traditional Methods** | Resource-intensive field studies | Cost-effective SVI-based assessment |
| **Limited Scope** | Site-specific investigations | City-scale scalable framework |
| **Inefficiency** | Slow data collection | Rapid automated analysis |
| **Lack of Visual Link** | Focus on physical measurements only | Links visible features to thermal experience |

## Applications and Utilities

| Application # | Use Case | Beneficiaries |
|---------------|----------|---------------|
| 1 | Thermal affordance mapping at city scale | Urban planners |
| 2 | Long-term monitoring with model updates | City administrators |
| 3 | Streetscape improvement guidance (IF-VPI-VATA workflow) | Landscape architects |
| 4 | Heat resilience planning | Climate adaptation teams |
| 5 | Sustainable urban development | Policy makers |
| 6 | Liveable city design | Urban designers |

## Connection to City in Sight Programme

| Aspect | Description |
|--------|-------------|
| **Programme** | City in Sight |
| **Focus** | Linking visible urban form to human-centered environmental experience |
| **Scale** | Street-level channel |
| **Complementary Research** | Window view perceptions, urban comfort assessment |
| **Theoretical Framework** | Urban as system sampled by distributed observers |
| **Visual Channels** | Street view (this study) + Window view (related work) |

## Key Findings

| Finding # | Description |
|-----------|-------------|
| 1 | Visual features of streetscapes are strong predictors of thermal comfort potential |
| 2 | Multi-stage prediction (IF-VPI-VATA) achieves good validation against field OTC data |
| 3 | Geospatial mapping reveals spatial patterns of thermal affordance across Singapore |
| 4 | Specific visual elements (greenery, shading, sky view) have measurable impacts on thermal comfort |
| 5 | Framework is transferable and can support long-term urban-scale monitoring |

## Impact on Sustainable Development Goals

| SDG | Relevance |
|-----|-----------|
| **SDG 11: Sustainable Cities** | Enhances urban livability and resilience |
| **SDG 13: Climate Action** | Supports adaptation to climate change and UHI |
| **SDG 3: Good Health** | Improves outdoor thermal comfort for public health |

## Related Publications

| Year | Title | Focus |
|------|-------|-------|
| 2026 | Urban Comfort Assessment in Digital Planning | Multidimensional comfort framework |
| 2026 | City Landscape in Sight | Window view perceptions |
| 2022 | Comparing LCZ Methods for UHI Assessment | Urban heat island classification |
| 2023 | Role of Subjective Perceptions in House Prices | Urban environment perception impacts |

## Future Research Directions

| Direction # | Research Question |
|-------------|-------------------|
| 1 | Transfer VATA framework to other tropical and temperate cities |
| 2 | Integrate real-time meteorological data for dynamic thermal affordance prediction |
| 3 | Develop intervention strategies based on thermal affordance mapping |
| 4 | Link thermal affordance to actual usage patterns and health outcomes |
| 5 | Expand visual-perceptual indicators for other environmental comfort dimensions |
| 6 | Create decision-support tools for urban designers and planners |

## Project Team

| Role | Name | Affiliation |
|------|------|-------------|
| **First Author** | Sijie Yang | NUS, Urban Analytics Lab |
| **Co-author** | Adrian Chong | NUS |
| **Co-author** | Pengyuan Liu | NUS |
| **Principal Investigator** | Filip Biljecki | NUS, Urban Analytics Lab |

## Resources and Links

| Resource | Link |
|----------|------|
| **Paper PDF** | https://arxiv.org/pdf/2410.11887 |
| **DOI** | http://dx.doi.org/10.1016/j.buildenv.2025.112569 |
| **Blog Post** | /blog/2025/thermal-comfort/ |
| **Research Group** | Urban Analytics Lab, NUS |
| **Programme Page** | City in Sight research programme |
| **Project Website** | Sijie Yang's academic website |

---

## Summary Statement

This research addresses urban heat resilience by introducing **thermal affordance** - a novel concept that captures how streetscapes influence thermal comfort through visible features. The **VATA (Visual Assessment of Thermal Affordance)** framework provides a **cost-effective, scalable, and interpretable** method for urban-scale thermal comfort assessment, combining street view imagery, human perception surveys, and machine learning. By linking what people see to what they experience, this work supports **evidence-based streetscape design** for more **sustainable, liveable, and resilient** urban environments in the face of climate change.

---

*Document created: August 31, 2026*  
*Based on: Building and Environment (2025) publication*  
*Project: Thermal Affordance / City in Sight*
