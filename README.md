# ThinkAny AI API

Simple ThinkAny AI API using Express & Axios.

## Features

- Fast Response
- Easy To Use
- Claude-3-Haiku Model
- JSON Output
- Simple REST API

---

# Installation

## Clone Repository

```bash
git clone https://github.com/kawser444/Ai.git
```

## Enter Project Folder

```bash
cd Ai
```

---

# Install Packages

```bash
npm install
```

Or install manually

```bash
npm install express axios
```

---

# Project Structure

```bash
thinkany-api/
│
├── index.js
├── package.json
└── README.md
```

---

# Run Server

```bash
node index.js
```

Or

```bash
npm start
```

---

# Server URL

```bash
http://localhost:3000
```

---

# API Endpoint

## GET Request

```bash
/ai?q=hello
```

## Full Example

```bash
http://localhost:3000/ai?q=hi
```

---

# Response Example

```json
{
  "status": true,
  "creator": "Kawser Mahbub",
  "result": {
    "message": "Hello!"
  }
}
```

---

# Error Response

```json
{
  "status": false,
  "message": "Enter query"
}
```

---

# Deploy

## Railway

```bash
npm start
```

## Render

Build Command

```bash
npm install
```

Start Command

```bash
npm start
```

---

# Author

Kawser Mahbub

---

# License

MIT License
