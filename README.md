# Forecastify 🌦️

**Forecastify** is a sleek, responsive weather application built with **React** and **Tailwind CSS**. It provides real-time weather updates including temperature, humidity, and wind speed for any city worldwide using the OpenWeatherMap API.

---
## 🔗 Try it Live
Check out the live website here: **https://forecastify-weatherapp.vercel.app/**

---

## 🚀 Features

* **Real-time Search:** Get instant weather data by entering a city name.
* **Dynamic Weather Icons:** Visual icons change based on current conditions such as Clear, Clouds, Rain, or Haze.
* **Detailed Metrics:** Displays temperature in Celsius, humidity percentage, and wind speed in km/hr.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.
* **Default Location:** Automatically loads London's weather on startup to ensure a populated UI.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **Icons:** Lucide-react
* **HTTP Client:** Axios
* **API:** [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📂 Project Structure

The application is structured into modular components for high maintainability:

| Component | Description |
| :--- | :--- |
| `WeatherContainer` | The main logic hub that handles API calls using Axios and manages the weather state. |
| `Search` | A functional search bar that handles input validation and capitalizes the city name before searching. |
| `WeatherDisplay` | Displays the primary weather information including icons, temperature, condition, and city name. |
| `WeatherData` | Displays secondary weather metrics such as Humidity and Wind Speed. |

---

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/niteeshayadav/Forecastify.git](https://github.com/niteeshayadav/Forecastify.git)
    cd Forecastify
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```env
    VITE_API_KEY=your_api_key_here
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```

---

## 📝 Usage Note

The app includes a built-in safety check in the `Search` component. If the input is empty, an alert will prompt the user to enter a city name. Additionally, it automatically capitalizes the first letter of your search and trims whitespace to ensure consistent API queries.

---
