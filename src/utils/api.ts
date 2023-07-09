type GetCurrentWeatherProps = {
  city: string | undefined;
};

type GetForecastProps = {
  lat: number;
  lon: number;
};

export async function getCurrentWeather({
  city = "Utrecht",
}: GetCurrentWeatherProps): Promise<CurrentWeatherResponse> {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6019bd99eb84923645be2ba229c5a99a`
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error(
      "An error occurred while fetching the current weather:",
      error
    );
    throw error;
  }
}

export async function getForecast({
  lat,
  lon,
}: GetForecastProps): Promise<ForecastResponse> {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=6019bd99eb84923645be2ba229c5a99a`
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred while fetching the forecast:", error);
    throw error;
  }
}

export async function getLocationList({
  city,
}: GetCurrentWeatherProps): Promise<GeocodeLocation[]> {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6019bd99eb84923645be2ba229c5a99a`
    );

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred while fetching the forecast:", error);
    throw error;
  }
}
