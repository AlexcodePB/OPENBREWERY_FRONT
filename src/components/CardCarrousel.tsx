import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Image } from "@chakra-ui/react";
import { getBars, getBarsByState } from "../libs/api";
import Card from "./Card";

interface CardCarouselProps {
  title?: string;
  state?: string;
  imgGallery?: boolean;
}
interface Bar {
  id: number;
  name: string;
  street: string;
  phone: string;
}

const CardCarousel = ({
  title,
  state,
  imgGallery = false,
}: CardCarouselProps) => {
  const images = [
    "assets/images/bar2.jpg",
    "assets/images/bar3.jpg",
    "assets/images/bar4.jpg",
  ];
  const [bars, setBars] = useState<Bar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBars = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = state ? await getBarsByState(state) : await getBars();
        setBars(data);
      } catch (error) {
        console.error("Error fetching bars:", error);
        setError("No se pudieron cargar los bares.");
      } finally {
        setLoading(false);
      }
    };

    fetchBars();
  }, [state]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <Box margin={4}>
      <Heading as="h1" size="xl" mb={4} color={"white"}>
        {title}
      </Heading>
      {imgGallery ? (
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box key={index} overflow="hidden" padding={2}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width="800px"
                height="250px"
                borderRadius="lg"
                objectFit="cover"
              />
            </Box>
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {bars.map((bar: Bar, i: number) => (
            <Link key={bar.id} href={`/${bar.id}`} passHref>
              <Box key={bar.id} padding={2}>
                <Card
                  key={bar.id}
                  barName={bar.name}
                  address={bar.street}
                  contact={bar.phone}
                  imageSrc="assets/images/bar2.jpg"
                />
              </Box>
            </Link>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default CardCarousel;
