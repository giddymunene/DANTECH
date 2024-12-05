import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const images = [
    'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/468995964_122171849834125327_633837603187881008_n.jpg?stp=dst-jpg_p417x417&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jm7Q5Hwt5IwQ7kNvgEWSLNt&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AQyqb7kQKUZTS9JN30u-OKo&oh=00_AYAbjvW2os6pqXvw8zNhUpVroNjy_oQ7MhFCZxPooY6v6Q&oe=6757AE41',
    'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/469043994_122171849870125327_8736859814105300272_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wWFHuI1jOlgQ7kNvgEi0yVw&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AyGNxG8G3Fi4TZQBumfnwmd&oh=00_AYCYfZbaT6nqpuI6TgxRltcvf2lfj9lNAhCWYK_vLXdH5g&oe=6757A1D5',
    'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/469044611_122171850056125327_8985088237468704690_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FZWf8BHgun0Q7kNvgHQeM91&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=ArNYo9VsEvFlXLFsFSMuAiT&oh=00_AYBgDZIMwU9B-bPu5wJKhfB9sAnfs8nYt2CpCWTm01C0SQ&oe=675798D5',
    'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/469077275_122171850008125327_1448474839328562526_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=T1lCXv2Em9QQ7kNvgG3a-Fr&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=AC_iz6qd0F35A3JE_vMPR38&oh=00_AYCRxm2ReRVKWlZqdjDLIg-SonXA6Ri_JlLQJBNh8iWjcA&oe=675787EE',
    'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/469076642_122171850206125327_451671824506689343_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eZPgbxhwGbwQ7kNvgHzo0-P&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=AOZPMbOwu8N4Vc_d2YBxtqq&oh=00_AYB4lNbjcQHy9ew2yPGwMcpIzAxquZatDmex3MW13o3f4w&oe=6757AC6D',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 30 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div
      className="container-fluid text-dark py-5"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="container">
        <h2 className="display-4">About Us</h2>
        <p>
          Welcome to Dantech Cyber! We offer a variety of cyber café services tailored to meet your needs.
          Our mission is to make online services easily accessible and secure for everyone.
        </p>
        <p>
          Whether you need document printing, online applications, or internet browsing, we have you covered! Our state-of-the-art equipment and secure network ensure that your experience is fast and reliable. 
        </p>
        <p>
          We pride ourselves on offering not only traditional services but also modern solutions like graphic design, eCitizen services, vehicle searches, and more.
        </p>
        <p>
          Dantech Cyber is committed to providing excellent customer service and ensuring that you can access what you need whenever you need it.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
