# Heat Resilience & Thermal Affordance - Quick Reference Table

## Core Information Table

| **Category** | **Item** | **Details** |
|-------------|----------|-------------|
| **Study Title** | English | Thermal Comfort in Sight: Thermal Affordance and Its Visual Assessment for Sustainable Streetscape Design |
| | Chinese | 热舒适可供性:基于视觉评估的可持续街景设计 |
| **Authors** | Lead | Sijie Yang |
| | Co-authors | Adrian Chong, Pengyuan Liu, Filip Biljecki* |
| **Publication** | Journal | Building and Environment |
| | Year | 2025 |
| | DOI | 10.1016/j.buildenv.2025.112569 |
| **Research Programme** | Name | City in Sight |
| | Period | 2023 - present |
| | Affiliation | Urban Analytics Lab, NUS |
| **Key Concept** | Definition | Thermal Affordance = integrated capacity of streetscape to influence thermal comfort through visible features |
| **Framework** | Name | VATA (Visual Assessment of Thermal Affordance) |
| | Components | SVI + Surveys + Statistical Learning |
| | Stages | IF (5 categories) → VPI (19 indicators) → VATA score |
| **Study Area** | Location | Singapore |
| | Scale | City-wide / Urban scale |
| **Characteristics** | Properties | Cost-effective, Scalable, Transferable, Interpretable, Geospatially Explicit |

## Research Objectives Summary Table

| # | Objective | Status |
|---|-----------|--------|
| 1 | Introduce thermal affordance concept | ✓ Completed |
| 2 | Develop VATA framework | ✓ Completed |
| 3 | Integrate SVI + surveys + ML | ✓ Completed |
| 4 | Validate with field OTC data | ✓ Completed |
| 5 | Generate urban-scale thermal affordance maps | ✓ Completed |
| 6 | Guide sustainable streetscape design | ✓ Framework established |

## Methodology Components Table

| Stage | Input | Method | Output |
|-------|-------|--------|--------|
| 1 | Street View Images | Computer Vision Feature Extraction | IF (Image Features) - 5 categories |
| 2 | IF | Multi-task Neural Network | VPI (Visual-Perceptual Indicators) - 19 indicators |
| 3 | VPI | Elastic Net Regression | VATA Score (Thermal Affordance) |
| 4 | VATA Predictions | Statistical Validation | Validated against Field OTC Data |

## Data Sources Table

| Data Type | Source | Purpose | Method |
|-----------|--------|---------|--------|
| Street View Imagery | Existing SVI databases (Singapore) | Visual feature extraction | Computer vision analysis |
| Online Survey Data | Crowdsourced assessments | VPI calibration | Pairwise comparisons |
| Field Survey Data | On-site measurements | Validation | Outdoor Thermal Comfort (OTC) |
| Meteorological Data | Weather stations | Environmental context | Sensor data |
| Urban Morphology | GIS databases | Spatial context | Building footprints, land use |

## Image Feature Categories (IF) Table

| # | Category | Description | Thermal Relevance |
|---|----------|-------------|-------------------|
| 1 | Sky View Factor | Visible sky ratio, openness | Direct solar exposure |
| 2 | Greenery Coverage | Vegetation density, tree canopy | Evapotranspiration, shading |
| 3 | Building Geometry | Height, facade characteristics | Wind patterns, shading |
| 4 | Shading Elements | Shadow patterns, coverage | Direct radiation reduction |
| 5 | Material Properties | Surface materials, reflectance | Heat absorption/reflection |

## Visual-Perceptual Indicators (VPI) - 19 Indicators

| Indicator Category | Count | Assessment Focus |
|--------------------|-------|------------------|
| Visual Comfort | ~4 | Perceived comfort from appearance |
| Thermal Perception | ~4 | Visual cues suggesting thermal conditions |
| Environmental Quality | ~3 | Overall environmental quality |
| Spatial Openness | ~3 | Perceived openness and enclosure |
| Aesthetic Quality | ~3 | Visual appeal and design |
| Other Perceptual | ~2 | Additional perceptual dimensions |
| **Total** | **19** | **Comprehensive visual assessment** |

## Applications and Beneficiaries Table

| Application | Description | Primary Beneficiaries | Impact |
|-------------|-------------|-----------------------|--------|
| Thermal Mapping | City-scale thermal affordance maps | Urban planners, city administrators | Strategic planning for heat resilience |
| Long-term Monitoring | Model updates for temporal analysis | Climate adaptation teams | Track changes over time |
| Design Guidance | IF-VPI-VATA workflow for improvements | Landscape architects, urban designers | Evidence-based design decisions |
| Heat Resilience | Climate adaptation planning | Policy makers, public health officials | Reduce heat-related health risks |
| Sustainable Development | Liveable city initiatives | Developers, community groups | Enhanced quality of life |

## Sustainable Development Goals (SDG) Alignment

| SDG | Goal Name | Contribution |
|-----|-----------|--------------|
| 11 | Sustainable Cities and Communities | Enhances urban livability and resilience through better streetscape design |
| 13 | Climate Action | Supports adaptation to climate change and urban heat island mitigation |
| 3 | Good Health and Well-being | Improves outdoor thermal comfort for public health |

## Key Advantages Over Traditional Methods

| Traditional Method | Limitation | VATA Solution |
|--------------------|-----------|---------------|
| Field campaigns | Resource-intensive, costly | Uses existing street view imagery |
| Site-specific studies | Limited spatial coverage | City-wide scalable assessment |
| Physical sensors only | Miss perceptual dimension | Integrates human visual perception |
| One-time surveys | Not repeatable | Framework allows continuous updates |
| Expert assessment | Subjective, not scalable | Data-driven, reproducible methods |

## Innovation Highlights

| Innovation | Description | Significance |
|------------|-------------|--------------|
| Thermal Affordance Concept | New theoretical framework linking visible streetscape to thermal comfort | Bridges visual perception and thermal experience |
| Two-stage Inference | IF → VPI → VATA chain | Interpretable, actionable insights for design |
| SVI-based Assessment | Leverages existing street view data | Cost-effective, scalable to any city with SVI |
| Human-centered Validation | Validated against actual human comfort | Ensures ecological validity |
| Geospatial Mapping | Continuous urban-scale maps | Reveals spatial patterns for intervention |

## Related Research Within City in Sight Programme

| Year | Project | Focus | Connection to This Work |
|------|---------|-------|-------------------------|
| 2026 | City Landscape in Sight | Window view perceptions | Complementary visual channel (vertical) |
| 2025 | Urban Comfort Assessment | Multidimensional comfort framework | Broader context for thermal comfort |
| 2023 | Role of Subjective Perceptions | Perception impact on house prices | Economic value of environmental perception |

## Future Research Directions

| Priority | Research Direction | Expected Outcome |
|----------|-------------------|------------------|
| High | Transfer to other climate zones | Validate generalizability |
| High | Real-time dynamic prediction | Integrate weather data |
| Medium | Intervention strategies | Design guidelines |
| Medium | Usage and health outcomes | Impact assessment |
| Low | Expand to other comfort dimensions | Broader comfort framework |

---

## Citation

**APA Format:**
```
Yang, S., Chong, A., Liu, P., & Biljecki, F. (2025). Thermal Comfort in Sight: Thermal Affordance and Its Visual Assessment for Sustainable Streetscape Design. Building and Environment. https://doi.org/10.1016/j.buildenv.2025.112569
```

**BibTeX:**
```bibtex
@article{yang2025thermal,
  title={Thermal Comfort In Sight: Thermal Affordance And Its Visual Assessment For Sustainable Streetscape Design},
  author={Yang, Sijie and Chong, Adrian and Liu, Pengyuan and Biljecki, Filip},
  journal={Building and Environment},
  year={2025},
  doi={10.1016/j.buildenv.2025.112569}
}
```

---

*Last updated: August 31, 2026*
