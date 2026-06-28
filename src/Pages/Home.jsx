import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import { getUser } from "../Services/github";
import ProfileCard from "../Components/ProfileCard";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    try {
      setLoading(true);

      const data = await getUser(username);

      setUser(data);
    } catch (error) {
      console.error(error);
      alert("User not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen pt-24 flex-col items-center  overflow-hidden bg-linear-to-br from-[#0a0a0f] via-[#14141e] to-[#1a1a2e] px-4 pt-24">
      {/* Stars Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="stars-layer-1 absolute inset-0"></div>
        <div className="stars-layer-2 absolute inset-0"></div>
        <div className="stars-layer-3 absolute inset-0"></div>
        <div className="stars-layer-4 absolute inset-0"></div>

        {/* Glowing Orbs */}
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-2 text-center">
          <h1 className="bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-6xl font-bold text-transparent md:text-7xl">
            GitHub Analyzer
          </h1>
          <p className="mt-3 text-sm text-gray-400/80 md:text-base">
            Discover insights about any GitHub user
          </p>
        </div>

        <div className="mt-10 w-full max-w-2xl">
          <SearchBar onSearch={handleSearch} loading={loading} />
          {user && <ProfileCard user={user} />}
        </div>
      </div>

      {/* CSS for Stars */}
      <style jsx>{`
        .stars-layer-1 {
          background-image:
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(
              2px 2px at 40px 70px,
              rgba(255, 255, 255, 0.8),
              transparent
            ),
            radial-gradient(2px 2px at 50px 160px, #ddd, transparent),
            radial-gradient(
              2px 2px at 90px 40px,
              rgba(255, 255, 255, 0.6),
              transparent
            ),
            radial-gradient(2px 2px at 130px 80px, #fff, transparent),
            radial-gradient(
              2px 2px at 160px 30px,
              rgba(255, 255, 255, 0.7),
              transparent
            );
          background-size: 200px 200px;
          background-repeat: repeat;
          opacity: 0.8;
          animation: twinkle 4s ease-in-out infinite alternate;
        }

        .stars-layer-2 {
          background-image:
            radial-gradient(1px 1px at 10px 10px, #fff, transparent),
            radial-gradient(
              1px 1px at 60px 120px,
              rgba(255, 255, 255, 0.6),
              transparent
            ),
            radial-gradient(1px 1px at 110px 190px, #eee, transparent),
            radial-gradient(
              1px 1px at 150px 50px,
              rgba(255, 255, 255, 0.5),
              transparent
            ),
            radial-gradient(1px 1px at 180px 140px, #fff, transparent);
          background-size: 200px 200px;
          background-repeat: repeat;
          opacity: 0.6;
          animation: twinkle 6s ease-in-out infinite alternate-reverse;
        }

        .stars-layer-3 {
          background-image:
            radial-gradient(
              1.5px 1.5px at 5px 5px,
              rgba(255, 255, 255, 0.4),
              transparent
            ),
            radial-gradient(
              1.5px 1.5px at 35px 95px,
              rgba(255, 255, 255, 0.3),
              transparent
            ),
            radial-gradient(
              1.5px 1.5px at 75px 155px,
              rgba(255, 255, 255, 0.5),
              transparent
            ),
            radial-gradient(
              1.5px 1.5px at 120px 25px,
              rgba(255, 255, 255, 0.4),
              transparent
            ),
            radial-gradient(
              1.5px 1.5px at 165px 105px,
              rgba(255, 255, 255, 0.3),
              transparent
            );
          background-size: 200px 200px;
          background-repeat: repeat;
          opacity: 0.4;
          animation: twinkle 8s ease-in-out infinite alternate;
        }

        .stars-layer-4 {
          background-image:
            radial-gradient(
              3px 3px at 15px 55px,
              rgba(200, 200, 255, 0.15),
              transparent
            ),
            radial-gradient(
              3px 3px at 55px 185px,
              rgba(200, 200, 255, 0.1),
              transparent
            ),
            radial-gradient(
              3px 3px at 95px 75px,
              rgba(200, 200, 255, 0.2),
              transparent
            ),
            radial-gradient(
              3px 3px at 135px 135px,
              rgba(200, 200, 255, 0.15),
              transparent
            ),
            radial-gradient(
              3px 3px at 175px 45px,
              rgba(200, 200, 255, 0.1),
              transparent
            );
          background-size: 200px 200px;
          background-repeat: repeat;
          opacity: 0.3;
          animation: twinkle 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
