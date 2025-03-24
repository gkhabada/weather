// TODO: всех иконок не хватает, например облачно (не частично), снег...

export function getIconName(conditionCode: number) : string {
  const iconsByCode : { [key: number]: string } = {
    1000: 'sunny',  // Sunny
    1003: 'cloudy', // Partly cloudy
    1006: 'cloudy', // Cloudy
    1009: 'rainy',  // Overcast
    1030: 'cloudy', // Mist
    1063: 'rainy',  // Patchy rain possible
    1066: 'rainy',  // Patchy snow possible
    1069: 'rainy',  // Patchy sleet possible
    1072: 'rainy',  // Patchy freezing drizzle possible
    1087: 'rainy',  // Thundery outbreaks possible
    1114: 'rainy',  // Blowing snow
    1117: 'windy',  // Blizzard
    1135: 'windy',  // Fog
    1147: 'windy',  // Freezing fog
    1150: 'rainy',  // Patchy light drizzle
    1153: 'rainy',  // Light drizzle
    1168: 'rainy',  // Freezing drizzle
    1171: 'rainy',  // Heavy freezing drizzle
    1180: 'rainy',  // Patchy light rain
    1183: 'rainy',  // Light rain
    1186: 'rainy',  // Moderate rain at times
    1189: 'rainy',  // Moderate rain
    1192: 'rainy',  // Heavy rain at times
    1195: 'rainy',  // Heavy rain
    1198: 'rainy',  // Light freezing rain
    1201: 'rainy',  // Moderate or heavy freezing rain
    1204: 'rainy',  // Light sleet
    1207: 'rainy',  // Moderate or heavy sleet
    1210: 'rainy',  // Patchy light snow
    1213: 'rainy',  // Light snow
    1216: 'rainy',  // Patchy moderate snow
    1219: 'rainy',  // Moderate snow
    1222: 'rainy',  // Patchy heavy snow
    1225: 'rainy',  // Heavy snow
    1237: 'rainy',  // Ice pellets
    1240: 'rainy',  // Light rain shower
    1243: 'rainy',  // Moderate or heavy rain shower
    1246: 'rainy',  // Torrential rain shower
    1249: 'rainy',  // Light sleet showers
    1252: 'rainy',  // Moderate or heavy sleet showers
    1255: 'rainy',  // Light snow showers
    1258: 'rainy',  // Moderate or heavy snow showers
    1261: 'rainy',  // Light showers of ice pellets
    1264: 'rainy',  // Moderate or heavy showers of ice pellets
    1273: 'rainy',  // Patchy light rain with thunder
    1276: 'rainy',  // Moderate or heavy rain with thunder
    1279: 'rainy',  // Patchy light snow with thunder
    1282: 'rainy',  // Moderate or heavy snow with thunder
  }

  return iconsByCode[conditionCode] || 'cloudy';
}

export function getWeatherText(conditionCode: number) : string {
  const iconsByCode : { [key: number]: string } = {
    1000: 'Солнечно',  // Sunny
    1003: 'Облачно', // Partly cloudy
    1006: 'Облачно', // Cloudy
    1009: 'Дождливо',  // Overcast
    1030: 'Облачно', // Mist
    1063: 'Дождливо',  // Patchy rain possible
    1066: 'Дождливо',  // Patchy snow possible
    1069: 'Дождливо',  // Patchy sleet possible
    1072: 'Дождливо',  // Patchy freezing drizzle possible
    1087: 'Дождливо',  // Thundery outbreaks possible
    1114: 'Дождливо',  // Blowing snow
    1117: 'Ветрено',  // Blizzard
    1135: 'Ветрено',  // Fog
    1147: 'Ветрено',  // Freezing fog
    1150: 'Дождливо',  // Patchy light drizzle
    1153: 'Дождливо',  // Light drizzle
    1168: 'Дождливо',  // Freezing drizzle
    1171: 'Дождливо',  // Heavy freezing drizzle
    1180: 'Дождливо',  // Patchy light rain
    1183: 'Дождливо',  // Light rain
    1186: 'Дождливо',  // Moderate rain at times
    1189: 'Дождливо',  // Moderate rain
    1192: 'Дождливо',  // Heavy rain at times
    1195: 'Дождливо',  // Heavy rain
    1198: 'Дождливо',  // Light freezing rain
    1201: 'Дождливо',  // Moderate or heavy freezing rain
    1204: 'Дождливо',  // Light sleet
    1207: 'Дождливо',  // Moderate or heavy sleet
    1210: 'Дождливо',  // Patchy light snow
    1213: 'Дождливо',  // Light snow
    1216: 'Дождливо',  // Patchy moderate snow
    1219: 'Дождливо',  // Moderate snow
    1222: 'Дождливо',  // Patchy heavy snow
    1225: 'Дождливо',  // Heavy snow
    1237: 'Дождливо',  // Ice pellets
    1240: 'Дождливо',  // Light rain shower
    1243: 'Дождливо',  // Moderate or heavy rain shower
    1246: 'Дождливо',  // Torrential rain shower
    1249: 'Дождливо',  // Light sleet showers
    1252: 'Дождливо',  // Moderate or heavy sleet showers
    1255: 'Дождливо',  // Light snow showers
    1258: 'Дождливо',  // Moderate or heavy snow showers
    1261: 'Дождливо',  // Light showers of ice pellets
    1264: 'Дождливо',  // Moderate or heavy showers of ice pellets
    1273: 'Дождливо',  // Patchy light rain with thunder
    1276: 'Дождливо',  // Moderate or heavy rain with thunder
    1279: 'Дождливо',  // Patchy light snow with thunder
    1282: 'Дождливо',  // Moderate or heavy snow with thunder
  }

  return iconsByCode[conditionCode] || 'cloudy';
}

export function convertKmhToMs(kmh: number): number {
  const ms = kmh / 3.6;
  return Math.round(ms) || 0;
}

export default {
  getIconName,
  getWeatherText,
  convertKmhToMs,
}
