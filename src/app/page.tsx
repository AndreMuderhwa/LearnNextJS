'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useQuery } from "react-query";
import axios from "axios";


//https://api.openweathermap.org/data/2.5/forecast?q=goma&appid=aac1cb30f24643628d6c223269423976&cnt=56
interface CityData {
  id: number;
  name: string;
  coord: {
      lat: number;
      lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
interface WeatherData {
  dt: number;
  main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
  };
  weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
  }[];
  clouds: {
      all: number;
  };
  wind: {
      speed: number;
      deg: number;
      gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
      "3h": number;
  };
  sys: {
      pod: string;
  };
  dt_txt: string;
  city: CityData; // Ajout de la propriété city
}
export default function Home() {
  const {isLoading, error, data}=useQuery<WeatherData>("repoData", async()=>{
    const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=goma&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`)
    return data
  }
    // fetch(
    //   "https://api.openweathermap.org/data/2.5/forecast?q=goma&appid=aac1cb30f24643628d6c223269423976&cnt=56"
    // ).then(res => res.json()) 
  );
  console.log("data", data?.city)
  if (isLoading) return "Loading..."
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">      hgh
      <Navbar/>
    </div>
  );
}
