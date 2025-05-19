# 🌍 Earthquake Monitoring App

A real-time web application that visualizes seismic activity worldwide.

## 🚀 Features

- **Real-time Data**: Fetches the latest earthquake data from the USGS Earthquake API.
- **Detailed Information**: Provides details such as magnitude, location, and timestamp for each event.

## 💠 Technologies Used

- **Frontend**:

  - React

- **Backend**:

  - Node.js
  - Express.js
  - [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/) for real-time data

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nadiia-dev/earthquake-monitoring-app.git
   cd earthquake-monitoring-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   CLOUD_ID=your_elasticsearch_cloud_id
   ELASTIC_USERNAME=your_elasticsearch_username
   ELASTIC_PASSWORD=your_elasticsearch_password
   ELASTIC_API_KEY=your_elasticsearch_api_key
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3001`.
