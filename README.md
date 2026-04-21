# Psyche 15A Spacecraft Exhibit

An interactive web-based exhibit for the ASU/NASA Psyche Mission, providing an immersive touchscreen experience for museum visitors exploring the full-scale Psyche spacecraft and its scientific instruments.

---

## Deployment Environment

| Property | Value |
|----------|-------|
| Hardware | Windows PC, fixed 1920×1080 display, exhibit kiosk |
| Input | Touchscreen only |
| Browser | Microsoft Edge on Windows |
| Network | Local ASU campus network |

---

## Features

- **Science Instruments** — Magnetometer, Gamma-Ray & Neutron Spectrometer, Multispectral Imager, Science Objectives
- **Communication Systems** — X-band radio, Deep Space Optical Communications (DSOC)
- **Navigation** — Star Trackers, Sun Sensors, Cold Gas Thrusters, Hall-Effect Thrusters
- **Spacecraft Bus** — Central Core, Dimensions, Fun Facts, Mission Plan, Materials
- **3D Visualization** — Interactive 3D models of spacecraft and the asteroid 16 Psyche
- **Analytics** — User interaction logging via PHP backend

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5, semantic landmarks, WAI-ARIA 1.2 |
| Styling | CSS3, CSS custom properties |
| Interactivity | Vanilla JavaScript, jQuery |
| Accessibility module | `src/accessibility/accessibility.css` + `src/accessibility/accessibility.js` |
| Backend | PHP (data collection and analytics) |
| Graphics | SVG, PNG assets |

---

## Getting Started

### Prerequisites

- A web server with PHP support for local development
- Microsoft Edge (deployed) or any modern browser (development)

### Running Locally

```bash
git clone <repository-url>
cd 15A_Spacecraft_Exhibit
```

Serve the `src/` directory from your web server root. Navigate to `src/index.html` to launch the exhibit.

**PHP must be enabled** for analytics (`saveData.php`, `download.php`) to function.

### Kiosk Deployment

1. Copy the `src/` directory to the Windows PC serving the exhibit.
2. Configure Edge to open `index.html` in kiosk/full-screen mode.
3. Ensure the analytics endpoint is reachable on the local ASU network.
4. Verify touchscreen input is correctly mapped.

---

## Project Structure

```
15A_Spacecraft_Exhibit/
├── README.md
├── CLAUDE.md                        # Development agent instructions
├── src/
│   ├── index.html                   # Home/landing page
│   ├── science.html                 # Science branch hub
│   ├── navigation.html              # Navigation branch hub
│   ├── communication.html           # Communication branch hub
│   ├── spacecraft.html              # Spacecraft branch hub
│   ├── [component].html             # 20 individual component pages
│   ├── spacecraft3D.html            # 3D spacecraft viewer
│   ├── astroid3D.html               # 3D asteroid viewer
│   ├── download_data.html           # Analytics download page
│   ├── css/
│   │   ├── common.css               # Shared base styles
│   │   ├── index.css                # Home page styles
│   │   ├── *branchcommon.css        # Per-branch button styles
│   │   └── [component].css          # Per-page styles
│   ├── accessibility/
│   │   ├── accessibility.css        # Accessibility layer (font scale, high contrast)
│   │   └── accessibility.js         # Settings panel, font scaling, contrast toggle
│   ├── scripts/
│   │   └── analytics.js             # User interaction tracking
│   ├── imgs/                        # Image assets
│   ├── saveData.php                 # Analytics write endpoint
│   └── download.php                 # Analytics export endpoint
```

---

## Contributors

- Yash Mulimani
- Kyle Knowles
- Bharath Gowda
- Chase Bulkin
- Ian Zweig

---

*Developed for the ASU/NASA Psyche Mission Exhibit — Spring 2026*
