"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";

const LocationDelector = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params?.toString()}`);
      });
    }
  }, [pathName, searchParams]);

  return (
    <Card>
      <div className="flex flex-col justify-center items-center  h-screen bg-slate-700 text-white">
        {loading && (
          <>
            <Image
              src="/200w.gif"
              alt="loading..."
              height={500}
              width={500}
              className="border rounded-md my-4"
            />
            <p className="text-4xl text-center">Detecting Location</p>
          </>
        )}
      </div>
    </Card>
  );
};

export default LocationDelector;
