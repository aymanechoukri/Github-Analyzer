import { FaMapPin, FaLink, FaTwitter, FaBuilding, FaCalendarAlt, FaGithub } from "react-icons/fa";
import { FiUsers, FiUserPlus, FiStar } from "react-icons/fi";

export default function ProfileCard({ user }) {
  return (
    <div className="group mt-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white/5 backdrop-blur-3xl shadow-2xl shadow-white/5 ring-1 ring-white/10 transition-all duration-500 hover:shadow-3xl hover:shadow-white/20 hover:ring-white/20">
      
      {/* Stars background effect */}
      <div 
        className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10px 10px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 30px 40px, rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 50px 80px, rgba(255,255,255,0.25), transparent),
            radial-gradient(1px 1px at 70px 20px, rgba(255,255,255,0.15), transparent),
            radial-gradient(1px 1px at 90px 60px, rgba(255,255,255,0.3), transparent)
          `,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative flex flex-col md:flex-row items-stretch">
        {/* Left Side - Avatar */}
        <div className="relative md:w-1/3 min-h-[200px] md:min-h-[300px] bg-gradient-to-br from-white/5 via-white/5 to-white/5 overflow-hidden">
          {/* Glowing orbs - very subtle */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
          
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="h-32 w-32 md:h-40 md:w-40 rounded-2xl border border-white/20 bg-black/20 object-cover shadow-2xl shadow-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-white/40"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 p-6 md:p-8">
          {/* Name & Username */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white/90">
                {user.name || user.login}
              </h2>
              <div className="mt-0.5 flex items-center gap-2">
                <FaGithub className="text-white/40 text-sm" />
                <p className="text-sm text-white/40">
                  @{user.login}
                </p>
              </div>
            </div>
            
            {/* Follow Button */}
            <button className="group/btn relative overflow-hidden rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:shadow-lg hover:shadow-white/10 flex-shrink-0 ml-4">
              <span className="relative z-10">Follow</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>
            </button>
          </div>

          {/* Bio */}
          {user.bio && (
            <p className="mt-2 text-sm leading-relaxed text-white/60 line-clamp-2">
              {user.bio}
            </p>
          )}

          {/* Location & Links */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/40">
            {user.location && (
              <div className="flex items-center gap-1.5">
                <FaMapPin className="text-white/40 text-xs" />
                <span>{user.location}</span>
              </div>
            )}
            
            {user.blog && (
              <div className="flex items-center gap-1.5">
                <FaLink className="text-white/40 text-xs" />
                <a 
                  href={user.blog} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-white/60 hover:underline"
                >
                  {user.blog.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}
                </a>
              </div>
            )}
            
            {user.twitter_username && (
              <div className="flex items-center gap-1.5">
                <FaTwitter className="text-white/40 text-xs" />
                <span className="text-white/40">@{user.twitter_username}</span>
              </div>
            )}
            
            {user.company && (
              <div className="flex items-center gap-1.5">
                <FaBuilding className="text-white/40 text-xs" />
                <span>{user.company}</span>
              </div>
            )}
            
            {user.created_at && (
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-white/40 text-xs" />
                <span>Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              </div>
            )}
          </div>

          {/* Stats - Transparent cards */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="group/stat relative rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5">
              <div className="flex items-center justify-center gap-1.5">
                <h3 className="text-xl font-bold text-white/90">
                  {user.public_repos}
                </h3>
              </div>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/30">
                Repos
              </p>
              <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100"></div>
            </div>

            <div className="group/stat relative rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5">
              <div className="flex items-center justify-center gap-1.5">
                <FiUsers className="text-white/40 text-sm" />
                <h3 className="text-xl font-bold text-white/90">
                  {user.followers}
                </h3>
              </div>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/30">
                Followers
              </p>
              <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100"></div>
            </div>

            <div className="group/stat relative rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5">
              <div className="flex items-center justify-center gap-1.5">
                <FiUserPlus className="text-white/40 text-sm" />
                <h3 className="text-xl font-bold text-white/90">
                  {user.following}
                </h3>
              </div>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/30">
                Following
              </p>
              <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100"></div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative mt-4 flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex items-center gap-2 text-[10px] text-white/30">
              <FiStar className="text-white/30" />
              <span>GitHub Profile</span>
            </div>
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}